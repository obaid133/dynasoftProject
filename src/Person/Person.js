import React from 'react';
const person=(props)=> {

    return(
    <div>
        <p> name is: {props.name} and age ={props.age} years</p>
        {/* <p> {props.children} </p> */}
    </div>
    )
};
    

export default person;