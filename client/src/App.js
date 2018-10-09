import React from "react";
// import Wrapper from "./pages/wrapper";
// import Main from "./pages/main";
import ItemList from "./components/ItemList";
// import SurvivorList from "./components/survivorList";
import Paragraph from "./components/Paragraph"
import Image from "./components/Image"
import Nav from "./components/Nav"
import Buttons from "./components/Buttons"
const App = () => (
  <div>
    <Nav>
      Escape from Chicago
    </Nav>
    <Image />
    {<ItemList />}
    {/* <SurvivorList /> */}
    <Paragraph>
      hello
    </Paragraph>
    <Buttons />
  </div>
);

export default App;
