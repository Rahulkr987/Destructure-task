
//first

//function countwords(str){
    //     const words = str.split("");
    //     const map = new Map();
        
    //     for(let word of words){
    //         if(map.has(word)) {
    //         map.set(word,map.get(word)+1);
            
    //     }else{
    //         map.Set(word, 1);
    //     }
    //     }
    // return map;
    // }
    // const sentence = "the quick lazy dogs jumps over the river"
    // console.log(countwords(sentence));

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
// second 
function unelement (arr){
    return new Set(arr);
}
console.log(unelement([1,2,3,4,5,6,4,1,2,3,4,6]));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// THIRD

function swap(a,b){
    [a,b] = [b,a];
    return [a,b];
}

let x = 5;
let y = 10;
[x,y]= swap(x,y);
console.log(x,y);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//fourth
function extract(arr){
    const [first , second ,,,,,,,last] = arr;
    return [first , second , last];
}
let array = [10,20,30,40,50,60,70,80,90];

console.log(extract(array));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//fifth

function numbers(aray){
    return{
    max : Math.max(...aray),
    min : Math.min(...aray),

    };
}
const ans = [20 , 22 ,24 , 25 , 65, 45, 78, 90, 56, 85 ];
console.log(numbers(ans));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//sixth

const person ={
    name : "yujiitadori",
    address : {
        street: " 1/2 ",

        city : "ludhiana ",
        state : "Punjab",

    },

};

function output(obj){
    const {
        name,
        address:{street},
    } = obj;
    return {name , street};
    }
console.log(output(person));

