let arr=["welcome to","SKILLS CAREER","Institute"];
console.log(arr);
let map = arr.map((elem)=>{
    return elem.split(" ");
});
console.log(map);
let flat = map.flat(1);
console.log(flat);


