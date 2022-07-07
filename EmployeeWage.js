
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const EMP_FULLTIME = 1;
const EMP_PARTTIME = 2;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const MAX_WORKING_HR = 160;

let totalEmpHour = 0;
let totalWorkingDays = 0;


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

while(totalEmpHour < MAX_WORKING_HR && totalWorkingDays < WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHour += getWorkingHours(empCheck);
}

let empWage = totalEmpHour * WAGE_PER_HOUR;
console.log("Working hours :" + totalEmpHour + " Hours, " + "  Working days :" + totalWorkingDays + "days   Employee wage =" + empWage);