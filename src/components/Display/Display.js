import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{
            border: "2px solid black", margin: '5px'
        }} >
            <h2>Name : {props.name}</h2>
            <p>so far steps: {props.steps} </p>
            {/* evabe chaile step o pathano jae */}
            <Dial steps={props.steps}></Dial>
        </div >
    );
};

export default Display;