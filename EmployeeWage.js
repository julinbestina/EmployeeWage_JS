
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const EMP_FULLTIME = 1;
const EMP_PARTTIME = 2;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const MAX_WORKING_HR = 160;

let totalEmpHour = 0;
let totalWorkingDays = 0;
let empWageArray = new Array();


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

function calculateEmpWage(empHour) {
    return empHour * WAGE_PER_HOUR;
}

function totalWage(totalwage,dailywage) {
    return totalwage +dailywage;
  }

while(totalEmpHour < MAX_WORKING_HR && totalWorkingDays < WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHour = getWorkingHours(empCheck);
    totalEmpHour += empHour;
    empWageArray.push(calculateEmpWage(empHour));
}

let totalEmpWage = empWageArray.reduce(totalWage, 0);

console.log("Working hours :" + totalEmpHour + " Hours, " + "  Working days :" + totalWorkingDays + "days   Employee wage =" + totalEmpWage);
console.log(empWageArray);
