import React, { useEffect, useState } from "react";
import { read } from "./array";

export const Read=(fun)=>{
    const[person,setperson]=useState({
        "uname":"",
        "uid":"",
        "uplace":"",
        "usalary":"",
        "uskills":[]
    })

    useEffect(()=>{
        callReading()
    })

    const callReading=()=>{
        setperson(read(fun.who))
    }

    return(
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="card text-dark">
                    <h2 className="card-title text-center">{person.uname}</h2>
                    <div className="card-body">
                        <p className="float-start">{person.uid}</p>
                        <p className="float-end">{person.uplace}</p>
                        <p className="float-center">{person.usalary}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}