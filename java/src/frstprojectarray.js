let food=[
    {
        "foodname":"Mutton Briyani",
        "cstarters":"Mutton GRavy with pepper pista",
        "cdesert":"Mango Flovour Chokie",
        "price":899

    },
    {
        "foodname":"Chicken Briyani",
        "cstarters":"Grill chicken ,chicken sukka,chilli chicken",
        "cdesert":"Vennila",
        "price":399
    },
    {
        "foodname":"Mutton Briyani",
        "cstarters":"Grill chicken half ,pepper chicken",
        "cdesert":"browni",
        "price":499

        
    },
    {
        "foodname":"Chicken Briyani",
        "cstarters":"Grill chicken half",
        "cdesert":"Ice cream",
        "price":399

    }
]

export const generate=(fun)=>{
    food.push(fun)
}

export const visibility=()=>{
    return food;
}

export const study=(p)=>{
    return food[p]
}