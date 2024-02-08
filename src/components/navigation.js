import {Link} from "react-router-dom";

export const Navigation = ({tabs}) => {
    return (
        <nav>
            <ul>
                {tabs.map((tab, i) => (
                    <li key={i}>
                        <Link to={tab.id}>{tab.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};