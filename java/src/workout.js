import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { make } from "./array";
import { abi } from "./workoutarray";
export const Workform=()=>{

    const[fun,setfun]=useState({
        "fname":"",
        "lname":"",
        "email":"",
        "acode":0,
        "phnum":0 ,
        "cont":""

    })

    const yet=(fname)=>{
        const{name,value}=fname.target
        setfun(
            (back)=>{
                return{
                    ...back,
                    [name]:value
                }
            }
        )
    }

    const sweetie=()=>
    {
       // alert("Addded Successfulluy-Plese check in back")
        abi(fun)
    }
    const candy=()=>{
        alert("rejected")
    }

return(
    <>
      <div className="container bg-warning">
          <h1 className="text-center"><i>Contact Form</i></h1>
          <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-3 mb-4">
                  <div className="form-group ">
                     <div className="row ">
                         <label><h3>Your Name</h3></label>
                         <div className="col">
                             <input type="text" name="fname" onChange={yet} value={fun.fname} placeholder="enter fst name" className="form-control mb-4"/>
                         </div>
                         <div className="col">
                             <input type="text" name="lname" onChange={yet} value={fun.lname} placeholder="enter last name" className="form-control mb-4"/>
                         </div>
                     </div>
                     <label><h3>Your E-mail Address</h3></label>
                     <input type="text" name="email" onChange={yet} value={fun.email} placeholder="ex:myname@gmail.com" className="form-control mb-4"/>
                     <div className="row">
                        <label><h3>Phone number</h3></label>
                        <div className="col-4">
                            <input type="number" name="acode"onChange={yet} value={fun.acode} placeholder="Area Code" className="form-control mb-4"/>
                        </div>
                        <div className="col">
                            <input type="number" name="phnum" onChange={yet} value={fun.phnum} placeholder="phone number" className="form-control mb-4"/>
                        </div>
                    </div>

                    <label><h3>Perfferd Contacts?</h3></label><br/>
                    <input type="radio" name="cont" onChange={yet}  value="Email" className="form-check-input"/>E-mail<br/>
                    <input type="radio" name="cont" onChange={yet}  value="Phone" className="form-check-input"/>phone  

                    <div className="row justify-content-around">
                        <button onClick={sweetie} className="btn btn-outline-info text-dark col-4 mt-4"><b>Submit</b> </button>
                        <button onClick={candy} className="btn btn-outline-danger text-dark col-4 mt-4"><b>Clear</b></button>
                        </div>                  
                    </div>

                </div>
            </div>
      </div>
    </>
)
}