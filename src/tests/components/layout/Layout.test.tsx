import {render, screen} from '@testing-library/react';
import Layout from '@components/layout/Layout';
import {vi} from 'vitest';

vi.mock('@components/layout/Header', () => ({
    default: () => <div data-testid="header">Mocked Header</div>,
}));

vi.mock('@components/layout/MainMenu', () => ({
    default: ({menuItems}: { menuItems: { title: string; path: string }[] }) => (
        <nav data-testid="main-menu">
            {menuItems.map((item) => (
                <a key={item.path} href={item.path}>
                    {item.title}
                </a>
            ))}
        </nav>
    ),
}));

vi.mock('@components/layout/MemoizedOutlet', () => ({
    default: () => <div data-testid="outlet">Mocked Outlet</div>,
}));

describe('Layout Component', () => {
    const menuItems = [
        {title: 'Content 1', path: '/content1'},
        {title: 'Content 2', path: '/content2'},
    ];

    it('renders the Header component with the correct title', () => {
        render(<Layout menuItems={menuItems}/>);

        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('renders the MainMenu component with menuItems', () => {
        render(<Layout menuItems={menuItems}/>);
        const menu = screen.getByTestId('main-menu');

        expect(menu).toBeInTheDocument();

        menuItems.forEach(({title, path}) => {
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.getByText(title)).toHaveAttribute('href', path);
        });
    });

    it('renders the MemoizedOutlet component', () => {
        render(<Layout menuItems={menuItems}/>);

        expect(screen.getByTestId('outlet')).toBeInTheDocument();
    });
});
