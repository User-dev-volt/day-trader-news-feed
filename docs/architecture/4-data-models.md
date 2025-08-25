# 4. Data Models

## 4.1. NewsItem
```typescript
export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt: Date;
  ticker?: string;
  importanceLevel: 'Normal' | 'High' | 'Critical';
}
```

## 4.2. FilterPreset
```typescript
export interface FilterPreset {
  id: string;
  name: string;
  marketCap: { min: number; max: number; };
  float: { max: number; };
  price: { min: number; max: number; };
  timeRange: 'hour' | 'day' | 'week';
  includeMajorMarketNews: boolean;
}
```

---
