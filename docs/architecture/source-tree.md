# Source Tree

This document outlines the official directory structure for the project, ensuring consistency and maintainability.

## Frontend (`apps/desktop`)

The `apps/desktop` directory will follow a feature-based organization to promote scalability and maintainability.

```plaintext
apps/desktop/
├── public/
│   └── electron.ts         # Electron main process file
├── src/
│   ├── main.tsx            # Application entry point
│   ├── App.tsx             # Root React component, handles routing
│   ├── index.css           # Global styles and Tailwind directives
│   │
│   ├── components/         # Reusable React components
│   │   ├── common/           # Generic, app-agnostic components (e.g., Button, Input, Modal)
│   │   │   ├── Button.tsx
│   │   │   └── ...
│   │   ├── layout/           # Components that define page structure (e.g., Header, PageWrapper)
│   │   │   └── PageLayout.tsx
│   │   └── news/             # Components specific to the news feature
│   │       ├── NewsFeed.tsx      # The main scrolling feed component
│   │       ├── NewsItem.tsx      # Component for a single news article
│   │       └── FilterPopup.tsx   # The modal for setting filters
│   │
│   ├── pages/              # Top-level components representing application pages/views
│   │   └── Dashboard.tsx     # The main dashboard screen
│   │
│   ├── services/           # Modules for interacting with external APIs
│   │   └── apiClient.ts      # Axios client setup and API call definitions
│   │
│   ├── store/              # Zustand stores for global state management
│   │   ├── newsStore.ts      # State related to news items and filters
│   │   └── uiStore.ts        # State for UI elements (e.g., popup visibility)
│   │
│   ├── hooks/              # Custom React hooks for shared logic
│   │   └── useNewsFeed.ts    # Hook to manage news fetching and state
│   │
│   ├── utils/              # Helper functions (e.g., date formatting)
│   │   └── formatters.ts
│   │
│   └── lib/                # Shadcn/UI utilities
│       └── utils.ts
│
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js
├── tsconfig.json
└── package.json
```
