import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import { file } from "./array";
import { Workform } from "./workout";
import { Look} from "./workoutread";
import { display } from "./workoutarray";


export const Wtable=()=>{
    const[temparray,settemparray]=useState([])
    const[makeview,setmakeview]=useState(false)
    const[seeview,setseeview]=useState(false)
    const[pos,setpos]=useState(0)

    const lang =()=>{
        settemparray(display)
    }
    
    useEffect(()=>{
        lang()
    },[])

    return(
        <>
        <div className="container">
        {(makeview)?
            <>
            <Workform/>
            <button className="btn btn-dark" onClick={
                ()=>{
                    setmakeview(false)
                }}>
                <i class="bi bi-back"></i> back
            </button>
            </>
            :
            (seeview)?
            <>
            <Look where={pos}/>
            <br/><button className="btn btn-outline-success" onClick={()=>
            {
                setseeview(false)
            }
            }>

             prev</button>
            </>
            :
            <>
               <button className="btn btn-success mb-3" onClick={()=>{
                   setmakeview(true)
               }}>
                  <i class="bi bi-cloud-plus-fill"></i> apply
                </button> 
            <div className="row justify-content-center">
                <table className="table table-striped bg-info text-dark shadow-lg">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail id</th>
                            <th>Area Code</th>
                            <th>Phone Number</th>
                            <th>Perfferd Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {temparray.map((p,v)=>(
                            <tr>
                                <td>
                                    <button className="btn btn-dark" onClick={()=>{
                                        setseeview(true)
                                        setpos(v)
                                    }}> read</button>
                                 {p.fname}</td>
                                 <td>{p.lname}</td>
                                 <td>{p.email}</td>
                                 <td>{p.acode}</td>
                                 <td>{p.phnum}</td>
                                 <td>{p.cont}</td>
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

