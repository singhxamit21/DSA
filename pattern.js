const withInbuildPattern = () => {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}
console.log(withInbuildPattern())

const withoutInbuildPattern = () => {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
    
}
console.log(withoutInbuildPattern())

const numberPattern = () => {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
    
}
console.log(numberPattern())