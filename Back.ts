import * as PromptSync from "prompt-sync";

class webUser{
    private name: string;
    private surname: string;
    private email: string;
    private phoneNumber: string;

    public constructor(name: string, surname: string, email: string, phoneNumber: string){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public getUserFullName(): string{
        return this.name + " " + this.surname;
    }

    public getUserEmail(): string{
        return this.email;
    }

    public getUserPhoneNumber(): string{
        return this.phoneNumber;
    }
}

function createNewUser(name: string, surname: string, email: string, phoneNumber: string): webUser{
    const newUser = new webUser(name, surname, email, phoneNumber);
    return newUser;
}

function writeUserData(user: webUser){
    console.log(user.getUserFullName());
    console.log(user.getUserEmail());
    console.log(user.getUserPhoneNumber());

}

const prompt = PromptSync();
const userName = prompt("Enter name: ");
const userSurname = prompt("Enter surname: ");
const userEmail = prompt("Enter email: ");
const userPhoneNumber = prompt("Enter phone number: ");

const new_User: webUser = createNewUser(userName, userSurname, userEmail, userPhoneNumber);
writeUserData(new_User);