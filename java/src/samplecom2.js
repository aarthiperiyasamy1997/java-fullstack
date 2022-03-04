import React from "react";
import { Name } from "./samplecom";

export const Area=()=>{

    return(
        <ol>
            <li>Mettur</li>
            <li>Yercaud</li>
            <li>Junction</li>
            <li>Annapark</li>
        </ol>
    )
}

const Indust=()=>{
    return(
        <>
           <h3>Industries</h3>
           <Name/>
        </>
    )
}
export default Indust;

export const Fitem=()=>
{
    return(<ol>
        <li>Thattu vadai set</li>
        <li>RR briyani</li>
    </ol>)
}