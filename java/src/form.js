import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { make } from "./array"
export const Formapp=()=>{
    //const[data,setdata]=useState(initialization)

    const[data,setdata]=useState({
        "uname":"",
        "uid":"",
        "uplace":"",
        "usalary":"",
        "uskills":new Array()
    })

    const tracks=(hey)=>{
        const{value}=hey.target
        data.uskills.push(value)
    }

    const yet=(dname)=>{
        const{name,value}=dname.target
        setdata(
            (old)=>{
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const sweety=()=>
    {
        // alert("submitted "+JSON.stringify(data))
        make(data)
    }
    const cany=()=>{
        alert("rejected")
    }
    
    return(
        <>
          <div className="container-fluid ">
              <h1 className="text-center">APPLICATION FORM</h1>
              <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                      <div className="form-group ">
                          <label>First Name</label>
                          <input type="text" name="uname" onChange={yet} value={data.uname} placeholder="enter first name" className="form-control"/>
                          <label>User Id</label>
                          <input type="text" name="uid" onChange={yet} value={data.uid} placeholder="enter user id" className="form-control"/>
                        </div>
                        <div className="row justify-content-center">
                            <div className="form-group">
                                <label>Place</label>
                                <select name="uplace" onChange={yet} value={data.uplace} className="form-select">
                                    <option>select place</option>
                                    <option>Salem</option>
                                    <option>chennai</option>
                                    <option>delhi</option>
                                    <option>USA</option>
                                </select>
                            </div>

                        </div>

                        <div className="form-group ">
                          <label>user salary</label>
                          <input type="number" name="usalary" onChange={yet} value={data.usalary} placeholder="enter user salary" className="form-control"/>
                          
                        </div>
                        <div className="mt-3 form-group">
                            <label className="me-sm-3 me-lg-3">Completed Course</label>
                            <input type="checkbox" name="c" onChange={tracks} value="C prgm" className="from-check-input"/>C prgm
                            <input type="checkbox" name="C++" onChange={tracks} value="C++ prgm" className="from-check-input ms-sm-2 ms=lg-2"/>C++ prgm
                            <input type="checkbox" name="python" onChange={tracks} value="python" className="from-check-input ms-sm-2 ms=lg-2"/>python
                            <input type="checkbox" name="Java" onChange={tracks} value="java" className="from-check-input ms-sm-2 ms=lg-2"/>java
                            
                        </div>
                        <div className=" mt-3 mb-2 row justify-content-around">
                            <button onClick={sweety} className=" col-2 btn btn-outline-info">submit</button>
                            <button onClick={cany} className=" col-2 btn btn-outline-danger">cancle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}