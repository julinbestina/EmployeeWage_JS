
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const EMP_FULLTIME = 1;
const EMP_PARTTIME = 2;
const WAGE_PER_HOUR = 20;

let empHour = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case EMP_FULLTIME: 
            return FULL_TIME_HOUR;
            break;
        case EMP_PARTTIME:
            return PART_TIME_HOUR;
            break;
        default:
            return 0;
    }
}

empHour = getWorkingHours(empCheck);
let empWage = empHour * WAGE_PER_HOUR;
console.log("Employee wage :" + empWage);