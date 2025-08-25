import { describe, it, expect, vi, afterEach } from 'vitest';
import axios from 'axios';
import { getNews } from './api';
import type { NewsItem } from 'shared-types';

// Mock axios
vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

describe('api service', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch news successfully', async () => {
    const mockNews: NewsItem[] = [
      { id: '1', timestamp: '2025-08-24T12:00:00Z', tickers: ['AAPL'], headline: 'Test News 1', source: 'test', summary: 'summary 1', sourceUrl: 'https://example.com/news1', importanceLevel: 'Normal' },
    ];
    mockedAxios.get.mockResolvedValue({ data: mockNews });

    const news = await getNews();

    expect(news).toEqual(mockNews);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/api/news');
  });

  it('should throw an error if the api call fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getNews()).rejects.toThrow('Failed to fetch news');
  });
});
