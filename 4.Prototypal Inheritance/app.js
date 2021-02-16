//Person constructor
function Person(firstName ,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Doe');

// console.log(person1.greeting());

//Customer
function Customer(firstName,lastName,phone,membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer prototypr return customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Jack', 'Sparrow', '444-555-4444', 'Standard');


Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}


console.log(customer1.greeting());