import React, { Component } from "react";
import ItemList from "./components/ItemList";
import ListItem from "./components/ItemList/ListItems";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Nav from "./components/Nav";
import items from "./items.json";
import pagesmock from "./pagesmock.json";
import Buttons from "./components/Buttons";
class App extends Component {
  state = {
    items,
    pagesmock,
    currentLocation: pagesmock[0]
  }

  handleLocationChange = id => {
    const newLocation = this.state.pagesmock.filter(location => {
      return id === location.id
    })
    console.log(newLocation);
    this.setState({ currentLocation: newLocation[0] })
  }

  render() {
    return (
      < div >
        <Nav>
          Escape Chicago
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
        {console.log(this.state.currentLocation)}
        {this.state.currentLocation.options.map(option => (
          <Buttons
            key={option[1]}
            buttonText={option[0]}
            handleLocationChange={() => this.handleLocationChange(option[1])}
          />
        ))
        })}
      </div >
    )
  }

};

export default App;
