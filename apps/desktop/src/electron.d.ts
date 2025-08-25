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