const nestArr = [[1, 2, 3], [4, 5], [6, 7, 8]];
console.log(nestArr);
const comArr = nestArr.reduce(
    (newArray, currentArray) => {
        return newArray.concat(currentArray)
    }
    , []
)
console.log(comArr);

