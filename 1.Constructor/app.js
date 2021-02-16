//Personc constructor

function Person(name,dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        console.log(diff);
        const ageDate = new Date(diff);
        console.log(ageDate);
        return Math.abs(ageDate.getUTCFullYear()- 1970);
    }
}

// const brad = new Person('Brad',25);
// const john = new Person('John',43);

// console.log(brad);
// console.log(john);

const brad = new Person('Brad','4-11-2000');
console.log(brad.calculateAge());