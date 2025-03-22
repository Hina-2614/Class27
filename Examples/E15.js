let arr=["welcome to","SKILLS CAREER","Institute"];
console.log(arr);
let map = arr.flatMap((elem)=>{
    return elem.split(" ");
});
console.log(map);