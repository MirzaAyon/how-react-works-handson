import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    //dynamic way te data receive korar jnno props 
    return (
        <div>
            <h2>I have : {props.name}</h2>
            {/* price ta add korbo onno ekta component folder theke , components er vitore device er moto arekta compo banabo*/}
            <DeviceDetail price={props.price} ></DeviceDetail>
            {/* eta na korle price ta show hbe na */}

        </div>
    );
};

export default Device;