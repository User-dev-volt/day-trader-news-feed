# Day Trader News Feed

This monorepo contains the source code for the Day Trader News Feed application, a tool designed to provide real-time, actionable news for day traders.

## 🚀 Getting Started

To get the development environment running, follow these steps:

1.  **Install Dependencies:**
    This project uses npm workspaces. Install all dependencies from the root directory.
    ```bash
    npm install
    ```

2.  **Run Applications:**
    You can run the desktop and API applications separately using the following commands:
    ```bash
    # Run the Electron desktop app
    npm run dev --workspace=@day-trader-news-feed/desktop

    # Run the backend API service
    npm run dev --workspace=@day-trader-news-feed/api
    ```

## 📦 Monorepo Structure

This repository is a monorepo managed with npm workspaces. The project is divided into `apps` and `packages`.

### Apps

These are the main applications of the project.

-   `apps/desktop`: The Electron-based desktop application. This is the main user-facing client.
-   `apps/api`: The serverless backend service responsible for fetching, processing, and delivering news data.

### Packages

These are shared modules used across the applications.

-   `packages/shared-types`: Contains shared TypeScript types and interfaces (e.g., `NewsItem`, `FilterSettings`) to ensure type safety between the API and the desktop client.
-   `packages/eslint-config-custom`: Holds the shared ESLint configuration to enforce consistent coding standards across the entire codebase.
-   `packages/tsconfig-custom`: Provides a base TypeScript `tsconfig.json` for all other packages to inherit from, ensuring consistent compiler settings.
"# day-trader-news-feed" 
