import { FunctionalComponent, h } from "preact";
import Walker from "./walker";
import { MAX_SIZE, SIZE } from "./walker/constants/size";
import { GithubIcon } from "./github-icon/github-icon";
import styled from "styled-components";
import { getQueryParam } from "./walker/helpers/query-params";
import { DEFAULT_STRING } from "./walker/constants/string";

const Content = styled.div`
    display: flex;
    align-items: center;
`;

const Link = styled.a`
    margin: 10px;
`;

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <Content>
                <h1>Random Walker</h1>
                <Link href="https://github.com/karavaan/random-walker">
                    <GithubIcon />
                </Link>
            </Content>
        <Walker
            size={Math.min(Number(getQueryParam('size') || SIZE), MAX_SIZE)}
            message={getQueryParam('message') || DEFAULT_STRING}
        />
        </div>
    );
};

export default App;
