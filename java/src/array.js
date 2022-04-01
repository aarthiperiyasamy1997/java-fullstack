let arr=[
    {
        uname:"aarthi",
        uid:1001,
        uplace:"salem",
        usalary:12000,
        uskills:"python,java"
    },
    {
        uname:"annakili",
        uid:1002,
        uplace:"valapady",
        usalary:15000,
        uskills:"python,java,c++ prgm"
    },
    {
        uname:"uma",
        uid:1003,
        uplace:"valapady",
        usalary:16000,
        uskills:"c prgm p,java"
    },
    {
        uname:"Fazel",
        uid:7801,
        uplace:"Amarica",
        usalary:200000,
        uskills:"React js,Bootstrap new version"
    },
    {
        uname:"manoj",
        uid:1004,
        uplace:"namakkal",
        usalary:18000, 
        uskills:"c++ prgm,java"
    }
]

export const make=(data)=>{
    arr.push(data)

}

export const file=()=>{
    return arr;
}

export const read=(index)=>{
    return arr[index]
}

