import {FC} from "react";
import {Layout} from "@components/layout";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "@/routes";

const App: FC = () => {
    const menuItems = routes.map(({title, path}) => ({title, path}));

    return (
        <Routes>
            <Route path="/" element={<Layout menuItems={menuItems}/>}>
                <Route index element={<Navigate to="/content1"/>}/>
                {routes.map(({path, component: Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
            </Route>
        </Routes>
    );
};

export default App;
