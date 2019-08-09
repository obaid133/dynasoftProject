import React from 'react';
const animal=(props)=> {

    return(
    <div>
        <p> name is: {props.name} and color ={props.color} </p>
        {/* {<p> {props.children} </p> } */}
    </div>
    )
};
    

export default animal;