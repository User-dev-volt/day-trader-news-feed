## Epic 2: The Filtering Engine

**Expanded Goal:** This epic builds directly on the core news feed from Epic 1. It focuses on implementing the application's primary value proposition: the powerful, easy-to-use filtering engine. The outcome will be an application where a user can define their specific trading niche and see the news feed transform from a generic stream into a tool for targeted intelligence.

---

**Story 2.1: Filter Configuration UI**
*   **As a** user, **I want** to click a 'Filter' button that opens a popup window with controls for creating a news filter, **so that** I can define the criteria for the news I want to see.
*   **Acceptance Criteria:**
    1.  A 'Filter' button is clearly visible on the Main Dashboard.
    2.  Clicking the 'Filter' button opens a modal popup window.
    3.  The popup contains input fields for Market Cap (min/max), Float (max), and Price (min/max).
    4.  The popup contains an ON/OFF toggle switch labeled 'Include Major Market News', which defaults to ON.
    5.  The popup has an 'Apply' button and a 'Close' button.

---

**Story 2.2: Backend Filtering Logic**
*   **As a** developer, **I want** to enhance the backend service to accept filter parameters and apply them to the news data, **so that** only relevant news is returned to the desktop application.
*   **Acceptance Criteria:**
    1.  The backend serverless function is updated to accept parameters for Market Cap, Float, and Price.
    2.  The backend service can recognize and include news related to a predefined list of major market-moving entities/keywords if the 'Include Major Market News' flag is enabled.
    3.  The service logic correctly filters the news data based on all received parameters.
    4.  If no parameters are provided, the full, unfiltered list of news is returned.

---

**Story 2.3: Activate Filtering**
*   **As a** user, **I want** to apply a filter from the popup and see the news feed update immediately to show only news that matches my criteria, **so that** I can focus on what's important to me.
*   **Acceptance Criteria:**
    1.  Clicking the 'Apply' button in the filter popup sends all specified criteria to the backend service.
    2.  The news feed on the Main Dashboard updates to display only the filtered results returned by the backend.
    3.  A visual indicator is present on the Main Dashboard (e.g., the 'Filter' button changes color) to show that a filter is currently active.
