// O sistema deve permitir adicionar livros, registrar usuários, emprestar livros e listar os livros emprestados por cada usuário.
// O sistema não precisa ter uma interface visual, faça toda demonstração de dados pelo console.log.


// Classe responsável por representar o livro
export class Book {
    private bookName: string;
    private author: string;

    constructor(bookName: string, author: string) {
        this.bookName = bookName;
        this.author = author;
    }
}

// Classe responsável por representar o usuário que usa a biblioteca
export class User {
    private userName: string;

    // constructor is a special method that is called when a new instance of the "User" class
    // and it must be a string
    constructor(userName: string) {
        this.userName = userName;
    }

    public getUserName(): string {
        return this.userName
    }
}

// Classe do estudante que herda (inheritance) User 
export class StudentUser extends User {

}


// Classe do professor que herda (inheritance) User
export class ProfessorUser extends User {

}

// Classe responsável por representar a biblioteca
export class Library {

}