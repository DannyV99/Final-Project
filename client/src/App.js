import React from "react";
import Wrapper from "./pages/wrapper";
import Main from "./pages/main";
import ItemList from "./pages/itemList";
import SurvivorList from "./components/survivorList";

const App = () => (
    <Wrapper>
        
        <Main>
            <Image/>
            <ItemList/>
            <SurvivorList/>
            <Paragraph/>
            <Buttons/>
        </Main>
        
    </Wrapper>
);

export default App;
