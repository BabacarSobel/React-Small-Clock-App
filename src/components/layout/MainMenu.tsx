import {FC, memo} from 'react';
import {Menu} from 'react-daisyui';
import {Link} from 'react-router-dom';

// Can be put in a common place /types/components if the project grow
interface MenuProps {
    menuItems: { title: string; path: string }[];
}

const MainMenu: FC<MenuProps> = memo(({menuItems}) => {
    return (
        <Menu className="w-1/8 border-r-2 border-b-2 border-gray-950">
            {menuItems.map((menuItem) => (
                <Menu.Item key={menuItem.title}>
                    <Link to={menuItem.path}>{menuItem.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
});

export default MainMenu;
