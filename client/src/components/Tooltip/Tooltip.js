import React from "react";
import ReactTooltip from 'react-tooltip'

const Tooltips = (props) => {
    return (
        <div>
            <a data-tip data-for={props.id}> σ`∀´)σ </a>
            {/* <a data-tip data-for='global'> (〃∀〃) </a> */}
            <ReactTooltip id={props.id} aria-haspopup='true' role='example'>
                <p>This is a global react component tooltip</p>
                <p>You can put every thing here</p>
                <ul>
                    <li>{props.name}</li>
                    <li>{props.desc}</li>
                    <li>{props.img}</li>
                </ul>
            </ReactTooltip>

        </div >
    );
};

export default Tooltips;