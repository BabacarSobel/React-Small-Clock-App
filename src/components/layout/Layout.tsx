import {FC} from 'react';
import {Header, MainMenu, MemoizedOutlet} from '@components/layout';

// Can be put in a common place /types/components if the project grow
interface LayoutProps {
    menuItems: { title: string; path: string }[];
}

const Layout: FC<LayoutProps> = ({menuItems}) => {
    return (
        <div className="flex flex-col">
            <Header title="MyApp"/>
            <div className="flex flex-1">
                <MainMenu menuItems={menuItems}/>
                <div className="flex-1 p-4">
                    <MemoizedOutlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;