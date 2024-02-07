import {Outlet} from "react-router-dom";
import {Navigation} from "./navigation";

export const Layout = ({tabs}) => {
    return (
        <div>
            <Navigation tabs={tabs}/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};