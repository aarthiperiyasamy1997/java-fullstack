let arr1=[
    {
        fname:"Aarthi",
        lname:"P",
        email:"name1@gmail.com",
        acode:"91",
        phnum:"94862827",
        cont:"Phone"
    },

    {
        fname:"Abi",
        lname:"v",
        email:"name2@gmail.com",
        acode:"91",
        phnum:"789349284",
        cont:"Email"
    },
    {
        fname:"Ammu",
        lname:"S",
        email:"name3@gmail.com",
        acode:"91",
        phnum:"89388393",
        cont:"Phone"
    },
    {
        fname:"Keerthi",
        lname:"R",
        email:"name4@gmail.com",
        acode:"91",
        phnum:"98379295",
        cont:"Email"
    }
    
]

export const abi=(fun)=>{
    arr1.push(fun)
}

export const display=()=>{
    return arr1;
}

export const see=(v)=>{
    return arr1[v]
}

