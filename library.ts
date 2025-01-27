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
        return 'Book: ${this.bookName}, Author: ${this.author}'
    }
}

export class User {
    private userName: string;
    public maxBooks: number = 0;

    constructor(userName: string) {
        this.userName = userName;
    }
}

// Classe do estudante que herda (inheritance) User 
export class StudentUser extends User {
    maxBooks: number = 3;

    public lendBook(): Book[] {
        return []
    }
}

// Classe do professor que herda (inheritance) User
export class ProfessorUser extends User {
    maxBooks: number = 5;
}

// Classe responsável por representar a biblioteca, contém livros e usuários
export class Library {
    public books: Book[] = []
    public users: User[] = []

    public addBook(book: Book) {
        this.books.push(book)
    }

    public addUser(user: User) {
        this.users.push(user)
    }
}

// Classe principal, responsável por executar o fluxo de sistema, instanciar as classes e executar os métodos
export class System {
    // you should define class properties and initialize them inside the constructor
    private library: Library;

    constructor() {
        this.library = new Library();
    }
}

const system = new System();