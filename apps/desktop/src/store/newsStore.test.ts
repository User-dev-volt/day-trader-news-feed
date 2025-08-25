import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useNewsStore } from './newsStore';
import * as api from '../services/api';
import type { NewsItem } from 'shared-types';

// Mock the api service
vi.mock('../services/api');
const mockedApi = vi.mocked(api, true);

describe('useNewsStore', () => {
  beforeEach(() => {
    // Reset the store state before each test
    useNewsStore.setState({
      newsItems: [],
      isLoading: false,
      error: null,
    });
  });

  it('should fetch news and update state on success', async () => {
    const mockNews: NewsItem[] = [
      { id: '1', timestamp: '2025-08-24T12:00:00Z', tickers: ['AAPL'], headline: 'Test News 1', source: 'test', summary: 'summary 1', sourceUrl: 'https://example.com/news1', importanceLevel: 'Normal' },
    ];
    mockedApi.getNews.mockResolvedValue(mockNews);

    const { fetchNews } = useNewsStore.getState();
    await fetchNews();

    const state = useNewsStore.getState();
    expect(state.isLoading).toBe(false);
    expect(state.newsItems).toEqual(mockNews);
    expect(state.error).toBeNull();
  });

  it('should handle errors when fetching news', async () => {
    mockedApi.getNews.mockRejectedValue(new Error('Failed to fetch'));

    const { fetchNews } = useNewsStore.getState();
    await fetchNews();

    const state = useNewsStore.getState();
    expect(state.isLoading).toBe(false);
    expect(state.newsItems).toEqual([]);
    expect(state.error).toBe('Failed to fetch news');
  });

  it('should set loading state correctly', async () => {
    mockedApi.getNews.mockResolvedValue([]);
    const { fetchNews } = useNewsStore.getState();

    // Manually check loading state before the call completes
    const promise = fetchNews();
    expect(useNewsStore.getState().isLoading).toBe(true);

    await promise;
    expect(useNewsStore.getState().isLoading).toBe(false);
  });
});
