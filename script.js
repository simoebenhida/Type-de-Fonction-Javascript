var Person = function(nom,prenom,DateBirth){
    this.nom = nom;
    this.prenom = prenom;
    this.DateBirth = DateBirth;
}
Person.prototype.calculAge = function () {
    return 2017 - this.DateBirth;
}
var Person1 = new Person('Alex','Juin',1995);
var Person2 = new Person('John','John2',1996);


console.log(Person1.calculAge());
console.log(Person2.calculAge());
