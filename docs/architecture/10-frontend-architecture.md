# 10. Frontend Architecture

*   **Component Organization:** Structured by feature (feed, filters, layout).
*   **State Management:** Zustand for simple, scalable state management.
*   **Services Layer:** An `API Client Service` using `axios` abstracts all backend communication.

## 10.3. Routing

While the MVP is a single-screen application, we will implement a basic routing structure to accommodate future expansion (e.g., a settings page or user profiles). The `App.tsx` component will manage the display of the main `Dashboard.tsx` page.

## 10.2. Component Specification

All new React components should include a standard comment block at the top of the file to ensure clarity and consistent documentation. This is especially critical for guiding AI agent implementation.

The specification should follow this format:

```typescript
/**
 * @component [ComponentName]
 * @description [Brief, one-sentence description of the component's purpose.]
 *
 * @props {type} [propName] - [Description of the prop's purpose and usage.]
 *
 * @state {type} [stateName] - [Description of the state's purpose.]
 *
 * @example
 * <ComponentName propName={...} />
 */
```


