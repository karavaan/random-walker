import { FunctionalComponent, h } from "preact";
import Walker from "./walker";
import { SIZE } from "./walker/constants/size";

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <Walker size={SIZE} />
        </div>
    );
};

export default App;
