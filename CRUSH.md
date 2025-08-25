# Archon Integration & Workflow

**CRITICAL: This project uses Archon for knowledge management, task tracking, and project organization.**

## Core Archon Workflow Principles

### The Golden Rule: Task-Driven Development with Archon

**MANDATORY: Always complete the full Archon task cycle before any coding:**

1. **Check Current Task** → Review task details and requirements
2. **Research for Task** → Search relevant documentation and examples
3. **Implement the Task** → Write code based on research
4. **Update Task Status** → Move task from "todo" → "doing" → "review"
5. **Get Next Task** → Check for next priority task
6. **Repeat Cycle**

**Task Management Rules:**
- Update all actions to Archon
- Move tasks from "todo" → "doing" → "review" (not directly to complete)
- Maintain task descriptions and add implementation notes
- DO NOT MAKE ASSUMPTIONS - check project documentation for questions

# Build & Test Commands
- `npm run dev` - Start desktop development server
- `npm run build` - Build all workspaces
- `npm run lint` - Lint all workspaces
- `cd apps/desktop && npm test` - Run all tests
- `cd apps/desktop && npm run test:ui` - Run tests with UI
- `cd apps/desktop && npm test -- NewsFeed.test.ts` - Run single test file
- `cd apps/desktop && npm test -- --run` - Run tests without watch mode

# Code Style Guidelines
## TypeScript & React
- Use TypeScript with strict mode enabled
- React functional components with TypeScript interfaces
- Import order: React, third-party, shared-types, local modules
- Use ESNext modules with consistent imports

## Naming Conventions
- Components: PascalCase (NewsFeed, NewsFeedList)
- Functions/Variables: camelCase (fetchNews, newsItems)
- Interfaces: PascalCase (NewsState, NewsItem)
- Constants: UPPER_SNAKE_CASE (API_BASE_URL)

## Error Handling
- Always handle async errors with try/catch
- Use Zustand for state management with error states
- Log errors to console for debugging
- Provide user-friendly error messages in UI

## Testing
- Use Vitest for unit/integration tests
- Mock external dependencies (axios, APIs)
- Test file naming: *.test.ts
- Setup files in src/test/setup.ts

## Project Structure
- Monorepo with apps/ and packages/ directories
- Shared types in packages/shared-types
- Desktop app in apps/desktop with Vite + React
- API in apps/api with TypeScript
- ESLint config extends custom package rules