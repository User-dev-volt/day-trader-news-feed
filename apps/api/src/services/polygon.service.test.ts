
import { NewsItem } from 'shared-types';

describe('Polygon Service', () => {
  beforeEach(() => {
    // Reset modules to clear cache
    jest.resetModules();
  });

  it('should fetch live news and map it correctly', async () => {
    process.env.POLYGON_API_KEY = 'test_api_key';

    const mockAxios = {
      get: jest.fn().mockResolvedValue({
        data: {
          results: [
            {
              id: '123',
              publisher: { name: 'Test Publisher' },
              title: 'Test Headline',
              published_utc: '2025-01-01T00:00:00Z',
              article_url: 'http://test.com',
              tickers: ['TEST'],
              description: 'Test summary.',
            },
          ],
        },
      }),
    };

    jest.doMock('axios', () => ({
      __esModule: true,
      default: mockAxios,
    }));

    const { getLiveNews } = await import('./polygon.service');
    const newsItems: NewsItem[] = await getLiveNews();

    expect(newsItems).toHaveLength(1);
    expect(newsItems[0]).toEqual({
      id: '123',
      timestamp: '2025-01-01T00:00:00Z',
      tickers: ['TEST'],
      headline: 'Test Headline',
      summary: 'Test summary.',
      source: 'Test Publisher',
      sourceUrl: 'http://test.com',
      importanceLevel: 'Normal',
    });
  });

  it('should throw an error if the API key is not configured', async () => {
    delete process.env.POLYGON_API_KEY;
    const { getLiveNews } = await import('./polygon.service');
    await expect(getLiveNews()).rejects.toThrow('Polygon.io API key is not configured.');
  });

  it('should throw an error if the API call fails', async () => {
    process.env.POLYGON_API_KEY = 'test_api_key';

    const mockAxios = {
      get: jest.fn().mockRejectedValue(new Error('Network Error')),
    };

    jest.doMock('axios', () => ({
      __esModule: true,
      default: mockAxios,
    }));

    const { getLiveNews } = await import('./polygon.service');
    await expect(getLiveNews()).rejects.toThrow('Failed to fetch live news.');
  });
});
