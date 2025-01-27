// O sistema deve permitir adicionar livros, registrar usuários, emprestar livros e listar os livros emprestados por cada usuário.
// O sistema não precisa ter uma interface visual, faça toda demonstração de dados pelo console.log.
const prompt = require('prompt-sync')();

// Classe responsável por representar o livro
export class Book {
    private bookName: string = '';
    private author: string = '';
    public emprestado: boolean = false;

    constructor(bookName: string, author: string) {
        this.bookName = bookName;
        this.author = author;
    }
}

export class User {
    public userName: string;
    public userBooks: Book[] = [];
    public maxBooks: number = 0;

    constructor(userName: string) {
        this.userName = userName;
    }

    public lendBook(book: Book): void {
        if (book.emprestado === false) {
            this.userBooks.push(book)
            book.emprestado = true
        } else {
            console.log("Este livro já está emprestado")
        }
    }

    public countBooks(): number {
        return this.userBooks.length
    }
}

// Classe do estudante que herda (inheritance) User 
export class StudentUser extends User {
    maxBooks: number = 3;

    constructor(userName: string) {
        super(userName);
    }

    public lendBook(book: Book): void {
        if (book.emprestado === false && this.userBooks.length < this.maxBooks) {
            this.userBooks.push(book)
            book.emprestado = true
        } else if (book.emprestado === false) {
            console.log("Este livro já foi emprestado")
        } else if (this.userBooks.length < this.maxBooks) {
            console.log(this.userName, " já emprestou 3 livros")
        }
    }
}

// Classe do professor que herda (inheritance) User
export class ProfessorUser extends User {
    maxBooks: number = 5;

    constructor(userName: string) {
        super(userName)
    }

    public lendBook(book: Book): void {
        if (book.emprestado === false && this.userBooks.length < this.maxBooks) {
            this.userBooks.push(book)
            book.emprestado = true
        } else if (this.userBooks.length < this.maxBooks) {
            console.log(this.userName, " já emprestou 5 livros")
        } else {
            console.log("Este livro já foi emprestado")
        }
    }
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

    public listBookLent(): void {
        let booksLent: number = 0;
        let booksNotLent: number = 0;

        this.books.find((book) => {
            if (book.emprestado === false) {
                booksNotLent++;
            } else if (book.emprestado === true) {
                booksLent++;
            } else {
                return null;
            }
        })

        console.log(booksLent, "livros estão emprestados e", booksNotLent, "não estão.")
    }
}