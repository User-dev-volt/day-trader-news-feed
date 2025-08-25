## Epic 3: Importance & Actionability

**Expanded Goal:** This final epic for the MVP adds the critical layer of visual intelligence and usability that makes the filtered feed truly actionable. We will implement the color-coded importance borders, whose logic is now clearly defined, along with key quality-of-life features. The outcome is a polished, intuitive tool that helps a trader spot and understand key news items instantly.

---

**Story 3.1: Backend Importance-Ranking Logic**
*   **As a** developer, **I want** the backend service to analyze each news item and assign an 'importance level', **so that** this information can be used to visually distinguish articles in the UI.
*   **Acceptance Criteria:**
    1.  The backend service defines at least three importance levels (e.g., Normal, High, Critical).
    2.  The logic for assigning an importance level is implemented based on rules such as "Breaking News" status, keyword matching, or source reputation.
    3.  The API response for each news item now includes an `importanceLevel` field.

---

**Story 3.2: Visual Importance Indicators**
*   **As a** user, **I want** to see a color-coded, glowing border around news items, **so that** I can instantly understand their potential importance without having to read each headline.
*   **Acceptance Criteria:**
    1.  The UI consumes the `importanceLevel` field from the API response for each news item.
    2.  News items are displayed with different border colors and/or glow effects corresponding to their importance level.
    3.  The visual effect is clear and immediate but does not make the interface feel cluttered.

---

**Story 3.3: UI Polish and Control**
*   **As a** user, **I want** access to helpful tooltips and a manual refresh button, **so that** I can better understand the UI features and have more control over the data feed.
*   **Acceptance Criteria:**
    1.  Hovering over interactive elements like the 'Filter' button displays a helpful tooltip explaining its function.
    2.  A 'Refresh' button is added to the Main Dashboard.
    3.  Clicking the 'Refresh' button immediately triggers a new data fetch from the backend.
