import React, { Component } from "react";
import axios from 'axios';
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
    currentLocation: pagesmock[0],
  }

  handleLocationChange = id => {
    const newLocation = this.state.pagesmock.filter(location => {
      return id === location.id
    })
    console.log(newLocation);
    this.setState({ currentLocation: newLocation[0] })
  }

  componentDidMount() {
    axios.get('api/page')
      .then(res => {
        this.setState({ currentLocation: pagesmock[0] })
        console.log(this.state.currentLocation);
      });
  }

  render() {
    return (
      < div >
        <Nav>
          Escape Chicago
    </Nav>
        <Image imgURL={this.state.currentLocation.imgURL} />
        {console.log()}
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        {console.log(this.state.currentLocation)}
        {
          this.state.currentLocation.options.map(option => (
            <Buttons
              key={option[1]}
              buttonText={option[0]}
              handleLocationChange={() => this.handleLocationChange(option[1])}
            />
          ))
        })
      }
      </div >
    )
  }

};

export default App;
