import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {MainMenu} from '@components/layout';

describe('MainMenu Component', () => {
    it('renders menu items with correct titles and URLs', () => {

        const mockMenuItems = [
            {title: 'Page 1', path: '/page1'},
            {title: 'Page 2', path: '/page2'},
            {title: 'Page 3', path: '/page3'},
        ];

        render(
            <MemoryRouter>
                <MainMenu menuItems={mockMenuItems}/>
            </MemoryRouter>
        );

        mockMenuItems.forEach((item) => {
            const linkElement = screen.getByText(item.title);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', item.path);
        });
    });
});
