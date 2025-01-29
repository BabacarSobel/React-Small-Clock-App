import {FC, memo} from 'react';
import {Outlet} from 'react-router-dom';

const MemoizedOutlet: FC = memo(() => (<Outlet/>));

export default MemoizedOutlet;
