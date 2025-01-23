import { Book, User, StudentUser, ProfessorUser, Library } from "./library";

// Classe principal, responsável por executar o fluxo de sistema, instanciar as classes e executar os métodos
export class System {
    // you should define class properties and initialize them inside the constructor
    private user: User

    constructor() {
        this.user = new User("Rafael");
        this.user.getUserName();
    }
}

console.log(new System())