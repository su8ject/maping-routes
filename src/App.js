import tabs from "./tabs.json"
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/appRouter";
import {Navigation} from "./components/navigation";

function App() {
    tabs = tabs.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
    });

    return (
        <BrowserRouter>
            <Navigation tabs={tabs}/>
            <AppRouter tabs={tabs}/>
        </BrowserRouter>
    );
}

export default App;