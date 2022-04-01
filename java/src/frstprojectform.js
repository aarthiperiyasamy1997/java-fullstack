import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { generate } from "./frstprojectarray";


export const Hform=()=>{
    const[fun,setfun]=useState({
        "foodname":"",
        "cstarters":"",
        "cdesert":"",
        "price":0
    })
    const tracks=(hey)=>{
        const{value}=hey.target
        fun.cstarters.push(value)
    }

    const yet=(aarthi01)=>{
        const{name,value}=aarthi01.target
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
        // alert("Addded Successfulluy-Plese check in back"+JSON.stringify(fun))
        generate(fun)
    }
    const candy=()=>{
        alert("rejected")
    }

    return(
        <>
        <div className="container bg-warning">
             <h2 className="text-center"><b>COMBO OFFER</b></h2>
             <div className="row justify-content-center">
             <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-3">  
             <div className="form-group  p-3">
                 <label><h3><i>Main Item</i></h3></label>
                 <br/><input type="radio" name="" onChange={yet} value={fun.foodname}/>Chicken Briyani<br/>
                 <input type="radio" name="foodname" onChange={yet} value={fun.foodname} className="mb-3"/>Mutton Briyani<br/>
                 <img src="../images/briyani4.jpg"/> 
                 
             </div>
             <div className="form-group ">
                 <label className="me-sm-3 me-lg-3"><h3><i>Non Veg Starterts</i></h3></label><br/>
                 <input type="checkbox" name="chilli" onChange={tracks} value={fun.cstarters}className="form-check-input ms-sm-2 ms-lg-2 "/>Chilli Chicken
                 <input type="checkbox" name="sukka" onChange={tracks} value={fun.cstarters} className="form-check-input ms-sm-2 ms-lg-2"/>Chicken Sukka
                 <input type="checkbox" name="grill" onChange={tracks} value={fun.cstarters} className="form-check-input ms-sm-2 ms-lg-2"/>Grill Chicken
                 <input type="checkbox" name="pepper" onChange={tracks} value={fun.cstarters} className="form-check-input ms-sm-2 ms-lg-2"/>Pepper Chicken
                 
             </div>

             <div className="mt-2 form-group col-6 ">
                 <label><h3><i>Desert</i></h3></label><br/>
                 <select
                  name="cdesert" onChange={yet} value={fun.cdesert} className="form-select">
                     <option selected hidden>select option</option>
                     <option>Cupcake</option>
                     <option>Brownie</option>
                     <option>Flooda</option>
                     <option>Ice cream</option>
                 </select><br/>
                 <img src="../images/ice cream1.jpg"/>
             </div>

             <div className="from-group col-6">
                 <br/><label><h3><i>Prize</i></h3></label><br/>
                 <input type="number" name="price" onChange={yet} value={fun.price} placeholder="Enter the prize" className=" form-control mb-3"/>
             </div>
             <div className=" row justify-content-around">
                 <button className="btn btn-outline-dark  col-3" onClick={sweetie}><b>Order</b></button>
                 <button className="btn btn-outline-light  col-3" onClick={candy}><b>Cancel</b></button>
             </div>
             </div>
             </div>
        </div>
        </>
    )
}
