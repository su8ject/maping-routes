import {Navigate, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

export const AppRouter = ({tabs}) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to={tabs[0].id}/>}/>
            {tabs.map((tab, i) => {
                const Component = lazy(() => import(`../${tab.path}`));
                return (
                    <Route path={tab.id} element={<Suspense><Component/></Suspense>} key={i}/>
                );
            })}
        </Routes>
    );
};
