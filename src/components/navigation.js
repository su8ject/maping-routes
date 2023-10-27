import {NavLink} from "react-router-dom";

export const Navigation = ({tabs}) => {
    return (
        <nav>
            <ul>
                {tabs.map((tab, i) => (
                    <li key={i}>
                        <NavLink to={tab.id}>{tab.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};