class Person{
    constructor(firstName, lastName){
        this.firstName =  firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembership(){
        return 500;
    }
}

const john = new Customer('John','Doe','333-45-6666','Standard');

console.log(john.greeting());

console.log(Customer.getMembership());