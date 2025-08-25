export interface NewsItem {
  id: string;
  timestamp: string; // Full ISO 8601 date-time string (e.g., "2025-07-29T14:35:12Z")
  tickers: string[];   // Associated stock tickers, e.g., ['TSLA', 'MSFT']
  headline: string;
  summary: string;
  source: string; // e.g., "Reuters"
  sourceUrl: string;
  importanceLevel: 'Critical' | 'High' | 'Normal' | 'None';
}
