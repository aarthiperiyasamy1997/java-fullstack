import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { visibility } from "./frstprojectarray";
import { Hform } from "./frstprojectform";
import { Read } from "./frstprojectread";


export const Htable=()=>{

    const[file,setfile]=useState([])
    const[generateview,setgenerateview]=useState(false)
    const[studyview,setstudyview]=useState(false)
    const[index,setindex]=useState(0)

    const view=()=>{
        setfile(visibility())
    }

     useEffect(()=>{
        view()
    },[])

    return(
        <>
        <div className="container bg-dark ">
            {(generateview)?
            <>
            <Hform/>
            <button className="btn btn-success text-dark" onClick={()=>{
                setgenerateview(false)
            }}> Back</button>
            </>
            :
            (studyview)?
            <>
            <Read where={index}/> 
            <button className="btn btn-outline-success " onClick={()=>{
                setstudyview(false)
            }}>  Prev</button>
            </>
            :
            <>
            <button className="btn btn-success" onClick={()=>{
                setgenerateview(true)
            }}>  Apply</button>
           
            <div className="row justify-content-center">
                <table className="table table-table-responsive text-light">
                    <thead>
                        <tr>
                            <th>Main item</th>
                            <th>Starters</th>
                            <th>Dessert</th>
                            <th>Prize</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {file.map((v,p)=>(
                            <tr>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={()=>{
                                        setstudyview(true)
                                        setindex(p)
                                    }}> read</button>
                                    {v.foodname}
                                </td>
                                <td>{v.cstarters}</td>
                                <td>{v.cdesert}</td>
                                <td>{v.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
        } 
        </div>
               
        </>

    )
 }
