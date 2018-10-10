import React from "react";
import "./Paragraph.css";
import API from "../../utils/API"

const Paragraph = props => <p className="paragraph">{props.children}</p>;

export default Paragraph;