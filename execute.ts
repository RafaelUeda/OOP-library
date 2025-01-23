import { Book, User, StudentUser, ProfessorUser, Library } from "./library";

const prompt = require('prompt-sync')();

// Classe principal, responsável por executar o fluxo de sistema, instanciar as classes e executar os métodos
export class System {
    // you should define class properties and initialize them inside the constructor
    private user: User

    constructor() {
        this.user = new User("Rafael");
        this.user.getUserName();
    }
}

console.log(new System());
var teste = prompt("Digite algo: ");
console.log(teste);