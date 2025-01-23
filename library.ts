// O sistema deve permitir adicionar livros, registrar usuários, emprestar livros e listar os livros emprestados por cada usuário.
// O sistema não precisa ter uma interface visual, faça toda demonstração de dados pelo console.log.


// Classe responsável por representar o livro
export class Book { 
    private name: string;
    private author: string;
}

// Classe responsável por representar o usuário que usa a biblioteca
export class User {

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

// Classe principal, responsável por executar o fluxo de sistema, instanciar as classes e executar os métodos
export class System {
    
}