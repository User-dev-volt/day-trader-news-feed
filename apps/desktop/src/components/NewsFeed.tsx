import React from 'react';
import { useNewsStore } from '../store/newsStore';
import type { NewsItem } from 'shared-types';

/**
 * @component NewsFeed
 * @description Displays a list of news articles.
 */
const NewsFeed: React.FC = () => {
  const { newsItems, isLoading, error } = useNewsStore();

  const handleItemClick = (url: string) => {
    if (window.electron?.shell?.openExternal) {
      window.electron.shell.openExternal(url);
    } else {
      console.warn('Electron shell API not available');
    }
  };

  if (isLoading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {newsItems.map((item: NewsItem) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.sourceUrl)}
            style={{ cursor: 'pointer', marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            <h2>{item.headline}</h2>
            <p>{item.summary}</p>
            <span>Source: {item.source}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;