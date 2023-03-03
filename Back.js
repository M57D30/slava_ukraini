function helloWorld() {
    return "Hello world";
}
function sendAlert() {
    alert("Website is in development");
}
var User = /** @class */ (function () {
    function User(name, surname, email, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return User;
}());
function createUser(name, surname, email, phoneNumber) {
    var newUser = new User(name, surname, email, phoneNumber);
    return newUser;
}
console.log(helloWorld());
var newPerson = createUser("Antanas", "Antauskis", "pastas@gmail.com", "+37051515515");
console.log(newPerson.name);
