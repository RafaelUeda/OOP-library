import { Book, Library, ProfessorUser, StudentUser, User } from "./library"

const bib = new Library()
const estudante = new StudentUser("Rafael")
const professor = new ProfessorUser("Armando")

bib.addBook(new Book("Livro1", "Fernando"))
bib.addBook(new Book("Livro2", "Fernando"))
bib.addBook(new Book("Livro3", "Fernando"))
bib.addBook(new Book("Livro4", "Fernando"))
bib.addBook(new Book("Livro5", "Fernando"))
bib.addBook(new Book("Livro6", "Fernando"))

bib.addUser(estudante)
bib.addUser(professor)

estudante.lendBook(bib.books[0])
// estudante.lendBook(bib.books[1])
// estudante.lendBook(bib.books[2])
// estudante.lendBook(bib.books[3])
// estudante.lendBook(bib.books[4])

// console.log(estudante.userName)
// console.log(professor.maxBooks)
// console.log(estudante.countBooks())
console.log(bib.listBookLent())