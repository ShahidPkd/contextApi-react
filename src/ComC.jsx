import React from "react";
import {FirstName, LastName} from './App';

const ComC = () =>{
    return (
        <>
        <h1>Hello, This is C</h1>
            <FirstName.Consumer>
               {(fname) =>{
                return (
                    <LastName.Consumer>
                        {(lname) =>{
                            return <h1> My name is {fname} {lname}</h1>
                        }}
                    </LastName.Consumer>
                )
               }}
            </FirstName.Consumer>
        </>
    );

}

export default ComC;