import React from "react";
import { Area, Fitem } from "./samplecom2";

const Appln=()=>{
    return(
        <>
           <h1>Salem city</h1>
           <h3>Famous area</h3>
           <Area/>
        </>
    )
}
export {Appln}

export const Name=()=>{
    return(
        <ol>
            <li>Stell plant</li>
            <li>Power plant</li>
            <li>Textiles manufacture</li>
        </ol>
    )
}

const Fname=()=>{
    return(
        <>
           <h3>Famous food</h3>
           <Fitem/>
        </>
    )
}
export {Fname}