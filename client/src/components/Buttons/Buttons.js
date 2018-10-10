import React, { component } from 'react';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const Buttons = props => (
    <div className="well" style={wellStyles}>
        <button bsStyle="danger" bsSize="large" onClick={props.handleLocationChange} block>
            {props.buttonText}
        </button>
    </div>
);

export default Buttons;