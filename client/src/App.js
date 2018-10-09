import React, { Component } from "react";
import ItemList from "./components/ItemList";
import ListItem from "./components/ItemList/ListItems";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Nav from "./components/Nav";
import items from "./items.json";
import Buttons from "./components/Buttons";
class App extends Component {
  state = {
    items
  }

  render() {
    return (
      < div >
        <Nav>
          Escape from Chicago
    </Nav>
        <Image />
        <ItemList>
          {this.state.items.map(item => (
            <ListItem
              key={item.id}
              name={item.name}
              img={item.img}
            />))}
        </ItemList>
        <Paragraph>
          hello
    </Paragraph>
        <Buttons />
      </div >
    )
  }

};

export default App;
