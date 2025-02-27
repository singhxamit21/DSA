function addOneDay(date) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}


// let today = new Date();
let today = new Date("2025-02-28");
console.log("Today:", today);
console.log("Tomorrow:", addOneDay(today));

//padStart(2, '0') ensures the output is always dd/mm/yyyy, maintaining two-digit formatting.
function formatDate(date) {
    console.log(date.getDate().toString())
    let day = date.getDate().toString().padStart(2, '0');
    // JavaScript months are zero-based, meaning January is 0, February is 1, and so on.
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

let today2 = new Date("2025-02-28");
console.log("Today 2:", formatDate(today2));
console.log("Tomorrow 2:", formatDate(addOneDay(today2)));