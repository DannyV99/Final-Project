import React from "react";
import "./List.css";

const ItemList = props => (
  <div className="well" >
    <ul className="list-inline">
      {props.children}
    </ul>
  </div>
);



export default ItemList;