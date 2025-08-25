# 2. High Level Architecture

This section establishes the foundational architectural decisions for the project.

## 2.1. Technical Summary

The architecture will be a serverless system deployed on Vercel and Supabase. The frontend will be a standalone Windows desktop application built with Electron and React, featuring a customizable UI. The backend will consist of Vercel Serverless Functions triggered by a cron job to fetch news from external APIs and store it in a Supabase PostgreSQL database. A RESTful endpoint will be exposed for the desktop application to retrieve both real-time and historical news data, with advanced filtering capabilities. This architecture is designed to be extremely low-cost, easy to manage, and meet the near real-time requirements outlined in the PRD, while also providing powerful features for a small user base.

## 2.2. Platform and Infrastructure Choice

**Platform:** Vercel + Supabase

**Key Services:**
*   **Vercel:** Hosting, Serverless Functions, Cron Jobs
*   **Supabase:** PostgreSQL Database, Authentication, Storage

**Rationale:**
*   **Vercel + Supabase (Recommended)**
    *   **Pros:** Extremely generous free tiers, excellent developer experience, integrated solution.
    *   **Cons:** Less flexibility than major cloud providers like AWS.

## 2.3. Repository Structure

**Structure:** Monorepo
**Monorepo Tool:** npm workspaces
**Package Organization:**
*   `apps/desktop`: Electron/React frontend.
*   `apps/api`: Vercel Serverless Functions backend.
*   `packages/shared-types`: Shared TypeScript types.
*   `packages/eslint-config-custom`: Shared ESLint configuration.
*   `packages/tsconfig-custom`: Shared TypeScript configuration.

## 2.4. High Level Architecture Diagram

```mermaid
graph TD
    subgraph User's Machine
        A[Windows Desktop App (Electron + React, Customizable UI)]
    end

    subgraph Vercel
        B[Serverless Function (Get News)]
        C[Cron Job (Scheduler)]
    end

    subgraph Supabase
        D[PostgreSQL Database (Historical News)]
    end

    E[External News API]

    A -->|1. Fetches news with advanced filters| B
    B -->|4. Returns news| A
    C --_Triggers on schedule_-->|2. Invokes| B
    B -->|3. Stores/Retrieves news| D
    B -->|Fetches news data| E
```

## 2.5. Architectural Patterns

*   **Serverless Architecture:** Backend built with Vercel Serverless Functions.
*   **Component-Based UI:** Frontend built with reusable, customizable React components.
*   **Repository Pattern (Backend):** Abstract data access logic for easier management and testing.

---
