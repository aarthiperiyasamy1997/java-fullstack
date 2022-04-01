import React, { useEffect, useState } from "react";
import {study } from "./frstprojectarray";
 
export const Read=(val)=>{
    const[person,setperson]=useState({
        "foodname":"",
        "cstarters":"",
        "cdesert":"",
        "price":"0"
    })

    useEffect(()=>{
        calling()
    }) 

    const calling=()=>{
        setperson(study(val.where))
    }

    return(
        <>
        <div className="container ">
            <div className="row justify-content-center">
                <h2 className="text-center text-light">DISPLAY DETAILS</h2>
                <table className="table table-border-3 text-light">
                    <tr>
                        <td>{person.foodname}</td>
                        <td>{person.cstarters}</td>
                        <td>{person.cdesert}</td>
                        <td>{person.price}</td>
                        

                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}