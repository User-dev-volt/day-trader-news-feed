import express from 'express';
import type { NewsItem } from 'shared-types';

const app = express();
const PORT = 3001;

// Mock news data
const mockNews: NewsItem[] = [
  {
    id: '1',
    timestamp: '2025-08-24T12:00:00Z',
    tickers: ['AAPL'],
    headline: 'Apple Announces New iPhone Features',
    summary: 'Apple reveals exciting new features coming to iPhone in the next update.',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com/apple-new-features',
    importanceLevel: 'High'
  },
  {
    id: '2',
    timestamp: '2025-08-24T11:30:00Z',
    tickers: ['TSLA'],
    headline: 'Tesla Stock Surges on Earnings Beat',
    summary: 'Tesla exceeds earnings expectations, sending stock price higher.',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com/tesla-earnings',
    importanceLevel: 'Critical'
  },
  {
    id: '3',
    timestamp: '2025-08-24T10:45:00Z',
    tickers: ['MSFT'],
    headline: 'Microsoft Expands AI Partnership',
    summary: 'Microsoft announces expansion of AI capabilities with new partnerships.',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com/microsoft-ai',
    importanceLevel: 'Normal'
  }
];

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API endpoint for news
app.get('/api/news', (req, res) => {
  console.log('Serving mock news data...');
  res.json(mockNews);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Mock API server running on http://localhost:${PORT}`);
  console.log(`📰 News endpoint: http://localhost:${PORT}/api/news`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});