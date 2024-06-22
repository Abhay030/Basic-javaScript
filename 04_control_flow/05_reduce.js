const nums = [1,2,3,4]

// const newNums = nums.reduce((acc , currval) => acc+currval)
// console.log(newNums);

const newNums = nums.reduce( function(acc , curval) {
    console.log(`acc ${acc} and curval is ${curval}`);
    return acc + curval;
})
// console.log(newNums);

const shoppingCart = [
    {
        item : 'PS5',
        price : 45000
    },
    
    {
        item : 'x-BOX',
        price : 50000
    },
    
    {
        item : 'MAMA EARTH FACEWASH',
        price : 299
    }
]
const Totalval = shoppingCart.reduce((acc ,item) => item.price + acc , 0)
console.log(Totalval);
