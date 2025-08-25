import { create } from 'zustand';
import { getNews } from '../services/api';
import type { NewsItem } from 'shared-types';

interface NewsState {
  newsItems: NewsItem[];
  isLoading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<NewsState>((set) => ({
  newsItems: [],
  isLoading: false,
  error: null,
  fetchNews: async () => {
    set({ isLoading: true, error: null });
    try {
      const newsItems = await getNews();
      set({ newsItems, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch news', isLoading: false });
    }
  },
}));
