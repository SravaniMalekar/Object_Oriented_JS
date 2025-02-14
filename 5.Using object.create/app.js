const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Louuise';
mary.age = 30;

mary.getsMarried('Efron');
console.log(mary.greeting());

const brad = Object.create(personPrototypes,{
    firstName: {value: 'Brad'},
    lastName : {value: 'Traversy'},
    age : {value: 30}
});

console.log(brad);
console.log(brad.greeting());