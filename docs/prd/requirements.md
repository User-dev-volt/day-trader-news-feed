## Requirements

**Functional Requirements**

1.  **FR1:** The system must connect to external news APIs and fetch data in near real-time.
2.  **FR2:** The system must display fetched news items in a chronological, continuously updating, and scrollable list, with the newest items appearing at the top.
3.  **FR3:** The system must provide a user interface for creating, applying, and modifying news filters based on specific stock characteristics (including, but not limited to, market cap, float, and price).
4.  **FR4:** The system must process the incoming news feed against the user's active filter, displaying only the items that match the defined criteria.
5.  **FR5:** The system must apply a visual indicator (e.g., a color-coded border) to news items to signify their potential importance.
6.  **FR6:** Each displayed news item must be a clickable link that opens the original source article in the user's default web browser.

**Non-Functional Requirements**

1.  **NFR1:** The end-to-end latency from a news event to on-screen display must be minimized, with an acceptable delay of up to 15 minutes to meet budget constraints.
2.  **NFR2:** The application must be packaged as a standalone executable for the Windows operating system.
3.  **NFR3:** The application's user interface must be intuitive and simple, requiring minimal learning for a new user.
4.  **NFR4:** The system's ongoing operational costs must be kept to a minimum (target: under $10/month) to support a free-to-use model.
