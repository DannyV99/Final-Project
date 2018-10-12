import React, { Component } from "react";
import ItemList from "./components/ItemList";
import ListItem from "./components/ItemList/ListItems";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Nav from "./components/Nav";
import items from "./items.json";
import API from "./utils/API";
import Buttons from "./components/Buttons";

class App extends Component {
  state = {
    items,
    currentLocation: {},
  }

  handleLocationChange = id => {
    API.getPage(id)
      .then(res => {
        console.log("response", res);
        this.setState({ currentLocation: res.data[0] })
        console.log(res.data[0])
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    API.getPage(0)
      .then(res => {
        console.log("response", res);
        this.setState({ currentLocation: res.data[0] })
        console.log(res.data[0])
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      < div >
        <Nav>
          Escape Chicago
        </Nav>
        <Image imgURL={this.state.currentLocation.imageURL} />
        {console.log(this.state.currentLocation)}
        <Paragraph>
          {this.state.currentLocation.paragraph}
        </Paragraph>
        <ItemList>
          {this.state.items.map(item => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </ItemList>
        {this.state.currentLocation.options && this.state.currentLocation.options.map(option =>
          <Buttons
            key={option[1]}
            id={option[1]}
            buttonText={option[0]}
            handleLocationChange={this.handleLocationChange}
          />
        )};
      </div>
    )
  }
};
export default App;
