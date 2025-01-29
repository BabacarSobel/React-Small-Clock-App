import {FC, memo} from 'react';
import {Navbar} from 'react-daisyui';
import {useSelector} from 'react-redux';
import {RootState} from '@store/store.ts';
import {LiveClock} from "@components/layout";


const Header: FC<{ title: string }> = memo(({title}) => {
    const var1 = useSelector((state: RootState) => state.var1.value);

    return (
        <Navbar className="border-b-2 border-gray-950">
            <Navbar.Start>
                <span className="text-lg font-bold">
                  {title} - {var1}
                </span>
            </Navbar.Start>
            <Navbar.End>
                <LiveClock/>
            </Navbar.End>
        </Navbar>
    );
});

export default Header;