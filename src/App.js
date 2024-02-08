import tabs from "./tabs.json"
import {Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Suspense, createElement, lazy} from "react";
import {Layout} from "./components/layout";

function App() {
    const sortTabs = tabs.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
    });

    const routes = createRoutesFromElements(
        <Route element={<Layout tabs={sortTabs}/>}> 
            <Route index element={<Navigate to={tabs[0].id}/>}/>
            {sortTabs.map((tab) => {
                return (
                    <Route
                    path={`${tab.id}`}
                    element={createElement(lazy(() => import(`./${tab.path}`)))}
                    key={tab.order}
                    />
                );
            })
        }
        </Route>
    );

    const router = createBrowserRouter(routes);

    return (
        <Suspense>
            <RouterProvider router={router}/>
        </Suspense>
    );
}

export default App;