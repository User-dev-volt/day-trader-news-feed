import { vi } from 'vitest';

// Mock the window.electron object for testing
Object.defineProperty(window, 'electron', {
  value: {
    shell: {
      openExternal: vi.fn(),
    },
  },
  writable: true,
});

// Add TypeScript declaration for window.electron
declare global {
  interface Window {
    electron?: {
      shell: {
        openExternal: (url: string) => void;
      };
    };
  }
}