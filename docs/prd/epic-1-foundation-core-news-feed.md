## Epic 1: Foundation & Core News Feed

**Expanded Goal:** Establish the core technical foundation of the project, including the monorepo, CI/CD pipeline, and a packaged Windows desktop application. Deliver a functional, end-to-end data pipeline that connects to the live news API and displays a basic, real-time, clickable news feed.

---

**Story 1.1: Project Scaffolding**
*   **As a** developer, **I want** a properly configured monorepo with separate packages for the desktop app and the backend service, **so that** we have a clean, organized, and scalable foundation for development.
*   **Acceptance Criteria:**
    1.  A new monorepo is created using the chosen tooling.
    2.  A placeholder 'desktop' application package is created within an `apps` directory.
    3.  A placeholder 'api' package is created within the `apps` directory.
    4.  Shared linting and TypeScript configurations are set up across the monorepo.

---

**Story 1.2: Basic Backend Service (Mock Data)**
*   **As a** developer, **I want** a simple, deployable serverless function that returns a mock list of news articles, **so that** we have a working backend endpoint to test our deployment process.
*   **Acceptance Criteria:**
    1.  A new serverless function is created in the `apps/api` package.
    2.  When invoked, the function returns a hardcoded list of 3-5 sample news articles in a consistent JSON format.
    3.  The function can be run locally for testing.
    4.  The function is successfully deployed to our cloud development environment.

---

**Story 1.3: Basic Desktop UI Shell**
*   **As a** user, **I want** a basic desktop application window that displays a simple, scrollable list area, **so that** I can see the basic structure of the news feed.
*   **Acceptance Criteria:**
    1.  A Windows desktop application can be launched, showing a single main window.
    2.  The window contains a component designed to display a list of news articles.
    3.  The UI is styled with the basic dark mode theme.
    4.  The application does not yet fetch or display any data.

---

**Story 1.4: End-to-End Data Pipeline (Mock Data)**
*   **As a** user, **I want** the desktop application to connect to the backend service and display the mock news, **so that** the core end-to-end data pipeline is proven to be functional.
*   **Acceptance Criteria:**
    1.  On launch, the desktop application successfully calls the deployed backend serverless function.
    2.  The mock news data returned from the backend is displayed correctly in the UI's scrollable list.
    3.  The UI automatically polls the backend for new data on a set interval (e.g., every 15 seconds).
    4.  The list in the UI updates to show the latest fetched data.

---

**Story 1.5: Live API Integration**
*   **As a** developer, **I want** the backend service to connect to the live news API and return real news data, **so that** the application uses live, real-world data.
*   **Acceptance Criteria:**
    1.  An API abstraction layer is created in the backend to isolate the external provider.
    2.  The backend service successfully fetches news from the selected third-party API.
    3.  API keys are stored securely and are not hardcoded in the source.
    4.  The data returned to the client correctly uses the shared `NewsItem` type.

---

**Story 1.6: Clickable News Links**
*   **As a** user, **I want** each news item in the list to be a clickable link, **so that** I can open the original source article to read the full story.
*   **Acceptance Criteria:**
    1.  Each news item in the UI is a hyperlink.
    2.  Clicking the link opens the item's `sourceUrl` in the user's default web browser.

---

# Story 1.7: CI/CD Pipeline Setup

**As a** developer, **I want** an automated CI/CD pipeline, **so that** builds, tests, and deployments are automated, ensuring consistency and speed.

### Acceptance Criteria:

1.  A new GitHub Actions workflow file is created at `.github/workflows/main.yml`.
2.  The workflow is configured to trigger on every `push` to the `main` branch.
3.  The workflow defines separate jobs for the following stages:
    *   **Lint & Test:**
        *   A job that runs the linter for all workspaces (`npm run lint`).
        *   A job that runs all unit tests for all workspaces (`npm test --workspaces --if-present`).
    *   **Build:**
        *   A job that builds the `api` service.
        *   A job that builds the `desktop` application for Windows.
    *   **Deploy:**
        *   A job that deploys the `api` service to Vercel. This job should only run if the "Build" stage succeeds.
        *   A job that creates a new GitHub Release, tags it, and uploads the packaged Windows executable as a release artifact. This job should also only run if the "Build" stage succeeds.
4.  The workflow status (pass/fail) must be required to pass before merging pull requests to the `main` branch.
5.  All sensitive information (e.g., `VERCEL_TOKEN`, `SUPABASE_KEY`) must be stored as encrypted secrets in the GitHub repository settings and accessed securely within the workflow. They must not be hardcoded.

---

**Story 1.8: Desktop App Packaging**
*   **As a** user, **I want** the desktop application to be packaged as a standalone Windows executable, **so that** I can easily install and run it on my computer.
*   **Acceptance Criteria:**
    1.  A build process is created that generates a single `.exe` file.
    2.  The executable can be run on a clean Windows machine without requiring developer tools.
    3.  The packaged application functions identically to the development version.
