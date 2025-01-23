// O sistema deve permitir adicionar livros, registrar usuários, emprestar livros e listar os livros emprestados por cada usuário.
// O sistema não precisa ter uma interface visual, faça toda demonstração de dados pelo console.log.
const prompt = require('prompt-sync')();

// Classe responsável por representar o livro
export class Book {
    private bookName: string;
    private author: string;

    constructor(bookName: string, author: string) {
        this.bookName = bookName;
        this.author = author;
    }

    public getBookInfo(): string {
        return this.bookName, this.author;
    }
}

export class User {
    private userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    public getUserName(): string {
        return this.userName
    }

    public getBooks(): [Book] {
        return books[]
    }

    public lendBook(): Book {
        
    }
}

// Classe do estudante que herda (inheritance) User 
export class StudentUser extends User {

}


// Classe do professor que herda (inheritance) User
export class ProfessorUser extends User {

}

// Classe responsável por representar a biblioteca, contém livros e usuários
export class Library extends Book {

}

// Classe principal, responsável por executar o fluxo de sistema, instanciar as classes e executar os métodos
export class System extends User, Book, Library {
    // you should define class properties and initialize them inside the constructor
    private user!: User;
    private book!: Book
 
    constructor() {
        let option: number;
        do {
            option = parseInt(prompt("1 - Registrar um livro \n 2 - Registrar um usuário \n 9 - Sair da biblioteca \n") || 0);
            if (option === 1) {
                let bookName: string = prompt("Digite o nome do livro: ")
                let bookAuthor: string = prompt("Digite o nome do autor do livro: ")
                this.book = new Book(bookName, bookAuthor)
                console.log(this.book.getBookInfo());
            } else if (option === 2) {
                let userName: string = prompt("Digite o nome do usuário: ")
                this.user = new User(userName);
                console.log(this.user.getUserName());
            } else if (option === 9) {
                console.log("Saindo da biblioteca...");
            } else {
                console.log("Opção inválida")
            }
        }
        while (option !== 9)
    }
}

new System();