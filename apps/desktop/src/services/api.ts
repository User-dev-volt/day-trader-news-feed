import axios from 'axios';
import type { NewsItem } from 'shared-types';

// In a real app, this would come from an environment variable
const API_BASE_URL = 'http://localhost:3001/api';

/**
 * @description Fetches news articles from the backend API.
 * @returns {Promise<NewsItem[]>} A promise that resolves to an array of news articles.
 * @throws {Error} Throws an error if the API call fails.
 */
export const getNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get<NewsItem[]>(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news');
  }
};
