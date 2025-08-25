
import axios from 'axios';
import type { NewsItem } from 'shared-types';

const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const POLYGON_API_URL = 'https://api.polygon.io/v2/reference/news';

// Interfaces for the Polygon.io API response
interface PolygonPublisher {
  name: string;
  homepage_url: string;
  logo_url: string;
  favicon_url: string;
}

interface PolygonNewsArticle {
  id: string;
  publisher: PolygonPublisher;
  title: string;
  author: string;
  published_utc: string;
  article_url: string;
  tickers: string[];
  amp_url?: string;
  image_url?: string;
  description?: string;
  keywords?: string[];
}

interface PolygonNewsResponse {
  results: PolygonNewsArticle[];
  status: string;
  request_id: string;
  count: number;
  next_url?: string;
}

/**
 * Maps a Polygon.io news article to our internal NewsItem format.
 * @param article - The Polygon.io news article.
 * @returns A NewsItem object.
 */
const mapToNewsItem = (article: PolygonNewsArticle): NewsItem => ({
  id: article.id,
  timestamp: article.published_utc,
  tickers: article.tickers,
  headline: article.title,
  summary: article.description || '',
  source: article.publisher.name,
  sourceUrl: article.article_url,
  importanceLevel: 'Normal', // Polygon.io API does not provide an importance level
});

/**
 * Fetches live news from the Polygon.io API.
 * @returns A promise that resolves to an array of NewsItem objects.
 */
export const getLiveNews = async (): Promise<NewsItem[]> => {
  if (!POLYGON_API_KEY) {
    throw new Error('Polygon.io API key is not configured.');
  }

  try {
    const response = await axios.get<PolygonNewsResponse>(POLYGON_API_URL, {
      params: {
        limit: 20, // Fetch 20 articles
        order: 'desc',
        sort: 'published_utc',
        apiKey: POLYGON_API_KEY,
      },
    });

    if (response.data && response.data.results) {
      return response.data.results.map(mapToNewsItem);
    }

    return [];
  } catch (error: any) {
    const errorMessage = `Error fetching live news from Polygon.io: ${error.message}`;
    console.error(errorMessage, { 
      requestUrl: POLYGON_API_URL,
      errorDetails: error.response?.data 
    });
    throw new Error('Failed to fetch live news.');
  }
};
