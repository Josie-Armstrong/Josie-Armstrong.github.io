
// PROBLEM 1
const employee1 = JSON.parse('{"first name":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raise eligible":true}');
const employee2 = JSON.parse('{"first name":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raise eligible":true}');
const employee3 = JSON.parse('{"first name":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise eligible":false}');
console.log("Below are the three employees' JSON (Problem 1):");
console.log(employee1);
console.log(employee2);
console.log(employee3);
// END PROBLEM 1


// PROBLEM 2
let employee_array = [employee1, employee2, employee3];
// console.log(employee_array);
let string_employee_array = JSON.stringify(employee_array);

// making the tech company JSON object
let techCompany = JSON.parse('{"companyName":"Tech Stars", "website":"www.techstars.site", "employees":' + string_employee_array + '}');
console.log("Company JSON is below (Problem 2):")
console.log(techCompany);
// END PROBLEM 2


// PROBLEM 3
// making the new employee using json object
const employee4 = JSON.parse('{"first name":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raise eligible":false}');

// adding the new employee to the company json
techCompany.employees.push(employee4);
console.log("The new employee has been added, and is visible below (Problem 3):")
console.log(techCompany);
// END PROBLEM 3


// PROBLEM 4
let salary_total = 0;

for (i = 0; i < techCompany["employees"].length; i++) {
    // console.log(techCompany["employees"][i]["salary"]);
    salary_total += techCompany["employees"][i]["salary"];
}

console.log("Below is the salary total (Problem 4):")
console.log(salary_total);
// END PROBLEM 4

// PROBLEM 5
function giveRaises() {
    for (i = 0; i < techCompany["employees"].length; i++) {

        if (techCompany["employees"][i]["raise eligible"] === true) {

            techCompany["employees"][i]["salary"] = techCompany["employees"][i]["salary"] * 1.1;
            techCompany["employees"][i]["raise eligible"] = false;

        }
    }
}

giveRaises();
// console.log(techCompany);
console.log("After giving raises, this is the new company JSON (Problem 5):");
console.log(techCompany);
// END PROBLEM 5


// PROBLEM 6
techCompany["working from home"] = JSON.parse('["Anna", "Sam"]');
// console.log(techCompany);

for (i = 0; i < techCompany["employees"].length; i++) {
    if (techCompany["working from home"].includes(techCompany["employees"][i]["first name"])) {
        // console.log("includes");
        techCompany["employees"][i]["wfh"] = true;
    }
    else {
        techCompany["employees"][i]["wfh"] = false;
    }
}

console.log("Below, the company JSON includes employees' work from home status, as well as the new array of wfh names (Problem 6)");
console.log(techCompany);
// END PROBLEM 6