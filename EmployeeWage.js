const ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
console.log(empCheck);
if(empCheck == ABSENT) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is Present");
}

