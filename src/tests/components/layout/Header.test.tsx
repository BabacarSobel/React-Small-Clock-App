import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Header from '@components/layout/Header.tsx';
import {vi} from 'vitest';

vi.mock('@components/layout', () => ({
    LiveClock: () => <span data-testid="live-clock">Mocked Clock</span>,
}));
const mockVar1Reducer = vi.fn().mockImplementation(() => ({value: 'MockedVar'}));

describe('Header Component', () => {
    it('renders the title and mocked var1 correctly', () => {
        const store = configureStore({
            reducer: {
                var1: mockVar1Reducer,
            },
        });

        render(
            <Provider store={store}>
                <Header title="MyApp"/>
            </Provider>
        );

        expect(screen.getByText(/MyApp - MockedVar/)).toBeInTheDocument();
        expect(screen.getByTestId('live-clock')).toBeInTheDocument();
    });
});
