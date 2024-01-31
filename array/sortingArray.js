let numbers = [5, 66, -44, 23, -31, 27, 65];

const sortArrayDec = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }
    return array;
}

console.log(sortArrayDec(numbers))
console.log(sortArrayDec([0,0,1,2,2]))


let strings = ["a", "b", "e", "k", "z", "v"];

const sortArrayDecStrings = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Compare strings using localeCompare for correct string comparison
            if (array[j].localeCompare(array[j + 1]) < 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(sortArrayDecStrings(strings));
