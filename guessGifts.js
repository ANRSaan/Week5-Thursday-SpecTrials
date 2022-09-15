let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


const presentShaker = (wishlist, presents)=> {
    let answers = []
    for (i = 0; i < wishlist.length; i++){
        for (j = 0; j < presents.length; j++){
            if (wishlist[i].size === presents[j].size && wishlist[i].clatters === presents[j].clatters && wishlist[i].weight === presents[j].weight){
                answers.push(wishlist[i].name)
            }
        }
    }
    return answers
}

console.log(presentShaker(wishlist, presents))