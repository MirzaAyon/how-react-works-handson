import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    //ekta diye maan pabo ekta diye update krbo step and setSteps
    //useState er maan take dispatch kore setSteps

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
        //state er je update ta hy ei je setSteps(newStepsCount) eta asynchronous
        console.log(steps); //inspact e dekhbo
        //click korar por age inspact e show hy

    }

    // useEffect(() => {
    //     console.log('hello');
    // }, [])
    //use effect karo upr depend kore na o just ekbar code chalae erpr shob bhule jae
    //inspact e dekhbo
    //, [] ei part ta na diye dekhbo and ebar baarbaar click korle baar baar hello ashbe , ja bujhlam empty array er jnno useEffect kaj kore 
    useEffect(() => {
        console.log(steps);
    }, [steps])
    //2 ta alada kore inspact e check kore dekhbo ebar ek ek kore barbe 


    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is my watch</h2>
            <h3>My current steps: {steps} </h3>
            <button onClick={increaseSteps}>Be Dour</button>
            <Display name="grameen" steps={steps}></Display>
        </div>
    );
};

export default Watch;
//ekta compo er pater vitore arekta compo