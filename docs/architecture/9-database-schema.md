# 9. Database Schema

*   **`news` table:** Stores historical news articles with indexes on `published_at` and `ticker`.
*   **`filter_presets` table:** Stores user-defined filters using a flexible `JSONB` column.
*   **`api_usage` table:** Tracks monthly API requests for the cascade strategy.

---
