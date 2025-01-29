import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import var1Reducer from '@store/slices/var1Slice';
import App from '@/App';

describe('App Component', () => {
    const store = configureStore({
        reducer: {var1: var1Reducer},
        preloadedState: {
            var1: {value: 'TestVar'},
        },
    });

    it('redirects to /content1 when visiting the root path "/"', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByRole('heading', {name: 'Content 1'})).toBeInTheDocument();
    });

    it('renders Content1 when navigated to /content1', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/content1']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByRole('heading', {name: 'Content 1'})).toBeInTheDocument();
    });

    it('renders Content2 when navigated to /content2', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/content2']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByRole('heading', {name: 'Content 2'})).toBeInTheDocument();
    });

    it('always renders Layout components like Header and MainMenu', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/content1']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText(/MyApp/)).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Content 1'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Content 2'})).toBeInTheDocument();
    });
});
