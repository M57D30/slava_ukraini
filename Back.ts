function helloWorld(): string{
    return "Hello world";
}

function sendAlert(): void{
    alert("Website is in development");
}

class User{
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;

    public constructor(name: string, surname: string, email: string, phoneNumber: string){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }   
}

function createUser(name: string, surname: string, email: string, phoneNumber: string){
    const newUser = new User(name, surname, email, phoneNumber);
    return newUser;
}

console.log(helloWorld());
const newPerson = createUser("Antanas", "Antauskis", "pastas@gmail.com", "+37051515515");
console.log(newPerson.name);