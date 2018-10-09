import React from "react";
import "./List.css";

const ListItem = props => (
    <li><img className="itemImg" alt={props.name} src={props.img} /></li>
);



export default ListItem;