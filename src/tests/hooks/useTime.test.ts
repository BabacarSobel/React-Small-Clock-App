import { renderHook, act } from '@testing-library/react';
import useTime from '@/hooks/useTime';

describe('useTime Hook', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should initialize with the current time', () => {
        const { result } = renderHook(() => useTime());
        expect(result.current).toBeInstanceOf(Date);
    });

    it('should update time every second', () => {
        const { result } = renderHook(() => useTime());

        const initialTime = result.current.getTime();

        act(() => {
            vi.advanceTimersByTime(1000); // Move time forward by 1 second
        });

        expect(result.current.getTime()).toBeGreaterThan(initialTime);
    });

    it('should clear interval on unmount', () => {
        const { unmount } = renderHook(() => useTime());

        const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

        unmount();

        expect(clearIntervalSpy).toHaveBeenCalled();
    });
});
