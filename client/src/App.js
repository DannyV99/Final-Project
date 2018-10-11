import React, { Component } from "react";
import axios from 'axios';
import ItemList from "./components/ItemList";
import ListItem from "./components/ItemList/ListItems";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import Nav from "./components/Nav";
import items from "./items.json";
import API from "./utils/API";
import pagesmock from "./pagesmock.json";
import Buttons from "./components/Buttons";
import img from "./components/Image/image.jpg";


class App extends Component {
  state = {
    items,
    pagesmock,
    currentLocation: {},
  }

  handleLocationChange = id => {
    const newLocation = this.state.pagesmock.filter(location => {
      return id === location.id
    })
    console.log(newLocation);
    this.setState({ currentLocation: newLocation[0] })
  }

  componentDidMount() {
    API.getPage(0)
      .then(res => {
        console.log("response", res);
        this.setState({ currentLocation: res.data[0] })
        console.log(res.data[0]);
      });
  }

  render() {
    return (
      < div >
        <Nav>
          Escape Chicago
    </Nav>
        <Image img={img} />
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
        {this.state.currentLocation.options && this.state.currentLocation.options.map(option => {

          // console.log(option);
          return (
            <Buttons
              key={option[1]}
              buttonText={option}
              handleLocationChange={() => this.handleLocationChange(option[1])}
            />
          )
        })
        })}
      </div >
    )
  }

};

export default App;
