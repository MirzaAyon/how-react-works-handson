import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: "2px solid blue", margin: '5px' }
        }>
            <h2>This is Dial</h2>
            <p>Steps so far: {props.steps} </p>
        </div >
    );
};

export default Dial;