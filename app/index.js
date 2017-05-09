'use strict';

class Employee{
	constructor(){
		this.surname = "";
		this.firstName = "";
		this.age = 0;
		this.minimumSalary = 0;
	}

	setName(surname, firstName) {
		if(typeof(surname) !== 'string' || typeof(firstName) !== 'string') {
			return "Invalid name";
		}
		this.surname = surname;
		this.firstName = firstName;
	}

	setAge(employeeAge) {
		if(!Number.isInteger(employeeAge) || !isNaN(employeeAge)) {
			return "Invalid age"
		}
		this.age = employeeAge;
	}

	setMinimumSalary(level, employmentType) {
		if(employmentType === "Permanent") {
			if(level <= 7) {
				this.minimumSalary = 120000;
			}
			else if(level > 7 && level <= 11) {
				this.minimumSalary = 170000;
			}
			else if(level >= 12 && level <= 15) {
				this.minimumSalary = 220000;
			}
			else {
				this.minimumSalary = 260000;
			}
		}
		else if(employmentType === "Contract") {
			if (level <= 7) {
				this.minimumSalary = 50000;
			}
			else if(level >= 8 && level <= 10) {
				this.minimumSalary = 80000;
			}
			else {
				this.minimumSalary = 100000;
			}
		}
		else {
			return 0;
		}
	}

	isManager(employmentType, minimumSalary) {
		if(employmentType === "Permanent" && minimumSalary >= 180000) {
			return true;
		}
		else if(employmentType === "Contract" && minimumSalary >= 130000) {
			return true;
		}
		else {
			return false;
		}
	}

	retire(yearsOfService) {
		if(yearsOfService === 35){
			return "Retired"
		}
		else {
			return "Still active";
		}
	}
}

module.exports = {
	Employee : Employee
}