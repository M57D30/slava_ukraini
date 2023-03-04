"use strict";
exports.__esModule = true;
var PromptSync = require("prompt-sync");
var webUser = /** @class */ (function () {
    function webUser(name, surname, email, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    webUser.prototype.getUserFullName = function () {
        return this.name + " " + this.surname;
    };
    webUser.prototype.getUserEmail = function () {
        return this.email;
    };
    webUser.prototype.getUserPhoneNumber = function () {
        return this.phoneNumber;
    };
    return webUser;
}());
function createNewUser(name, surname, email, phoneNumber) {
    var newUser = new webUser(name, surname, email, phoneNumber);
    return newUser;
}
function writeUserData(user) {
    console.log(user.getUserFullName());
    console.log(user.getUserEmail());
    console.log(user.getUserPhoneNumber());
}
var prompt = PromptSync();
var userName = prompt("Enter name: ");
var userSurname = prompt("Enter surname: ");
var userEmail = prompt("Enter email: ");
var userPhoneNumber = prompt("Enter phone number: ");
var new_User = createNewUser(userName, userSurname, userEmail, userPhoneNumber);
writeUserData(new_User);
