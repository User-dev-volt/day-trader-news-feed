
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getLiveNews } from '../services/polygon.service';

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const newsItems = await getLiveNews();
    response.status(200).json(newsItems);
  } catch (error: any) {
    if (error.message.includes('not configured')) {
      response.status(500).json({ error: 'API is not configured.' });
    } else {
      response.status(500).json({ error: 'Failed to fetch news' });
    }
  }
}
