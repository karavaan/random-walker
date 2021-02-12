import { FunctionalComponent, h } from "preact";
import Walker from "./walker";
import { SIZE } from "./walker/constants/size";
import { GithubIcon } from "./github-icon/github-icon";
import styled from "styled-components";

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
            <Walker size={SIZE} />
        </div>
    );
};

export default App;
