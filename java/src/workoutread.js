import React, { useEffect, useState } from "react";
import { see } from "./workoutarray";


export const Look=(val)=>{
      const[data,setdata]=useState({
        "fname":"",
        "lname":"",
        "email":"",
        "acode":"0",
        "phnum":"0",
        "cont":""
      })

      useEffect(()=>{
          callfunction()
      })

      const callfunction=()=>{
          setdata(see(val.where))
      }

      return(
          <>
          <div className="container p-5">
              <div className="row justify-content-center">
                  <div className="card text-dark bg-secondary">
                      <div className="card-body">
                          <h2 className="card-title text-center">DISPLAY DETAILS</h2>
                          <hr/> 
                      <div className="row justify-content-around">
                      <button className="btn btn-dark col-4 me-1 mt-4">Firstname -{data.fname}</button>
                      <button className="btn btn-warning col-4 me-1 mt-4">Lastname -{data.lname}</button>
                      <button className="btn btn-info col-4 me-1 mt-4">Email-id -{data.email}</button>
                      <button className="btn btn-success col-4 me-1 mt-4">Universal Code -{data.acode}</button>
                      <button className="btn btn-danger col-4 me-1 mt-4">Phone number -{data.phnum}</button>
                      <button className="btn btn-primary col-4 me-1 mt-4">Contact to Some -{data.cont}</button>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
      )
}