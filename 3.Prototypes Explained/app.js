//Object.prototype
//Person.prototype


//Person constructor
function Person(firstName ,lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     console.log(diff);
    //     const ageDate = new Date(diff);
    //     console.log(ageDate);
    //     return Math.abs(ageDate.getUTCFullYear()- 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    // console.log(diff);
    const ageDate = new Date(diff);
    // console.log(ageDate);
    return Math.abs(ageDate.getUTCFullYear()- 1970);
}

//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John','Doe','8-12-90');
const mary = new Person('Mary','Louise','March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));