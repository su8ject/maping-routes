import tabs from "./tabs.json"
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Suspense, lazy} from "react";
import { Layout } from "./components/layout";

function App() {
    const sortTabs = tabs.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
    });

    const routes = createRoutesFromElements(
        <Route element={<Layout tabs={sortTabs}/>}>
            <Route index element={<Navigate to={tabs[0].id}/>}/>
            {sortTabs.map((tab, i) => {
                const Component = lazy(() => import(`./${tab.path}`));
                console.log(`./${tab.path}`);
                return (
                    <Route
                    element={<Suspense><Component/></Suspense>}
                    path={`/${tab.id}`}
                    key={i}
                    />
                )
            })
        }
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;