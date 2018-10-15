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
    items: [],
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
    API.getItems()
      .then(res => {
        console.log("response", res);
        this.setState({ items: res.data })
      })
  }

  render() {
    return (
      < div >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Nav>
                Escape Chicago
              </Nav>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Image imgURL={this.state.currentLocation.imageURL} />
            </div>
            <div className="col-md-6">
              <Paragraph>
                {this.state.currentLocation.paragraph}
              </Paragraph>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {this.state.currentLocation.options && this.state.currentLocation.options.map(option =>
                <Buttons
                  key={option.id}
                  id={option.id}
                  buttonText={option.text}
                  handleLocationChange={this.handleLocationChange}
                />
              )}
            </div>
          </div>

        </div>
      </div >
    )
  }
};
export default App;
