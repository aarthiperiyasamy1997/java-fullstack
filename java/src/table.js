import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { file } from "./array";
import { Formapp } from "./form";
import { Read } from "./Read";

export const Table=()=>{
    const[temparray,settemparray]=useState([])
    const[makeview,setmakeview]=useState(false)
    const[readview,setreadview]=useState(false)
    const[pos,setpos]=useState(0)

    const hai=()=>{
        settemparray(file())
    }

    // once page can be load then value will display

    useEffect(()=>{
        hai()
    },[])

    return(
        <>

            {/* view button click then value will display */}

        {/* <button className="btn btn-primary" onClick={hai}>view</button> */}
        <div className="container mt-3" >

            {(makeview)?
            <>
            <Formapp/>
            <button className="btn btn-dark" onClick={
                ()=>{
                    setmakeview(false)
                }}>
                <i class="bi bi-back"></i> back
            </button>
            </>
            :
            (readview)?
            <>
            <Read who={pos}/>
            <button className="btn btn-secondary" onClick={()=>{
                setreadview(false)
            }
            }>

            </button>
            </>
            :
            <>
               <button className="btn btn-success mb-3" onClick={()=>{
                   setmakeview(true)
               }}>
                  <i class="bi bi-cloud-plus-fill"></i> apply
                </button> 

                <div className="row justify-content-center">
                    <div className="table table-responsive-md">
                        <table className="table table-striped p-3 shadow rounded">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Employee id</th>
                                    <th>Employee place</th>
                                    <th>Employee salary</th>
                                    <th>Employee Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                {temparray.map((e,index)=>(
                                    <tr>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>{
                                                setreadview(true)
                                                setpos(index)
                                            }
                                            }>
                                                <i class="bi bi-book-half"></i>
                                            </button>
                                            {e.uname}</td>
                                        <td>{e.uid}</td>
                                        <td>{e.uplace}</td>
                                        <td>{e.usalary}</td>
                                        <td>{e.uskills}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </>
                }
            </div>
        </>
    )
}

