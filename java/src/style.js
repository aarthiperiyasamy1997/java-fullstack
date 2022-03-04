import React from "react";

const fstyle={
    fontsize:'75px',
    fontfamily:'Monotype corsiva',
    color:'blue',
    backgroundColor:'black',
    
}

const barder={
    border:'7px',
    borderRadius:'10px',
    borderStyle:'dotted',
    borderColor:'green'
}

const imgsrc={
    width:'100px',
    height:'50px',
    boxShadow:'10px 10px 10px blue'
}

export const Imgapp=()=>{
    return(
    <>

       <p style={fstyle}>Hi Im Aarthi From Salem</p>
       <hr color='red'/>
       <p style={{textTransform:'uppercase'}}>Zealous</p>

       <img style={imgsrc} src="images/aarthilogo.jpg"/>

       <p>Name</p>
       
        <ol style={barder}>
            <li>Sasi</li>
            <li>Annakili</li>
            <li>uma</li>

        </ol>
       

       
    </>
    )

    
    
}