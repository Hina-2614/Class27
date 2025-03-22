let dupArr = [1, 2, 3, 4, 2, 5, 6, 3];
console.log(dupArr);
let uniqueArray=dupArr.reduce((unique,value)=>{
    if (!unique.include(value)) {
        unique.push(value);
    }
    return unique;
},[])
console.log(uniqueArray);
