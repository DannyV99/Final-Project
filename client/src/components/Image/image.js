import React from "react";

const Image = props => (<div>
    <img src={props.imgURL} />
    {props.imgURL}
</div>);

export default Image;