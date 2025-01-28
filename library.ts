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
        if (book.emprestado === true) {
            console.log("Este livro já foi emprestado")
        } else if (this.userBooks.length >= this.maxBooks) {
            console.log(this.userName, `já emprestou ${this.maxBooks} livros`)
        } else {
            this.userBooks.push(book)
            book.emprestado = true
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

}

// Classe do professor que herda (inheritance) User
export class ProfessorUser extends User {
    maxBooks: number = 5;

    constructor(userName: string) {
        super(userName)
    }
}

// Classe responsável por representar a biblioteca, contém livros e usuários
export class Library {
    public books: Book[] = []
    public users: User[] = []

    constructor() {

    }

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
            }
        })

        if (booksLent === 1) {
            console.log(booksLent, "livro está emprestado e", booksNotLent, "não estão.")
        } else if (booksNotLent === 1) {
            console.log(booksLent, "livros estão emprestados e", booksNotLent, "não está.")
        } else {
            console.log(booksLent, "livros estão emprestados e", booksNotLent, "não estão.")
        }
    }
}

export class System {
    constructor(bib: Library, estudante: StudentUser, professor: ProfessorUser) {
        bib.addBook(new Book("Livro1", "Fernando"))
        bib.addBook(new Book("Livro2", "Fernando"))
        bib.addBook(new Book("Livro3", "Fernando"))
        bib.addBook(new Book("Livro4", "Fernando"))
        bib.addBook(new Book("Livro5", "Fernando"))
        bib.addBook(new Book("Livro6", "Fernando"))

        bib.addUser(estudante)
        bib.addUser(professor)
    }

    execute(): void {
        estudante.lendBook(bib.books[0]) // estudante empresta um livro
        console.log(estudante.countBooks()) // retorna 1, contagem dos livros do estudante
        professor.lendBook(bib.books[0]) // professor tenta emprestar o mesmo livro, mas não é permitido

        estudante.lendBook(bib.books[1])
        estudante.lendBook(bib.books[2])
        estudante.lendBook(bib.books[3]) // estudante tenta emprestar mais de 3 livros, retorna que não é permitido

        professor.lendBook(bib.books[3])
        professor.lendBook(bib.books[4])
        professor.lendBook(bib.books[5])

        bib.addBook(new Book("Livro7", "Fernando"))
        bib.addBook(new Book("Livro8", "Fernando"))
        bib.addBook(new Book("Livro9", "Fernando")) // tive que adicionar mais livros, para validar a regra de negócio g

        professor.lendBook(bib.books[6])
        professor.lendBook(bib.books[7])
        professor.lendBook(bib.books[8]) // professor tenta emprestar mais de 5 livros, retorna que não é permitido

        bib.listBookLent()
    }

}

const bib = new Library()
const estudante = new StudentUser("Rafael")
const professor = new ProfessorUser("Armando")

const system = new System(bib, estudante, professor)
system.execute()