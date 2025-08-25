import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { usePolling } from './usePolling';

describe('usePolling', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call the callback at the specified interval', () => {
    const callback = vi.fn();
    renderHook(() => usePolling(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    // Advance time by 1 second
    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    // Advance time by another 3 seconds
    vi.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(4);
  });

  it('should not call the callback if the delay is null', () => {
    const callback = vi.fn();
    renderHook(() => usePolling(callback, null));

    vi.advanceTimersByTime(5000);
    expect(callback).not.toHaveBeenCalled();
  });

  it('should stop the interval on unmount', () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => usePolling(callback, 1000));

    vi.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    unmount();

    vi.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(1); // Should not have been called again
  });
});
