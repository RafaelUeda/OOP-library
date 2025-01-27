// definindo uma classe Example
class Example {
    // propriedades e métodos vem dentro da classe
}

class Car {
    private name: string;
    private model: string;
    private year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    } // este é o construtor da classe Car
    // o construtor é uma classe especial que é chamado quando um objeto (instância de uma classe) é criado.
    // ele é utilizado para iniciar um objeto com valores padrões;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }
}

// um objeto é uma instância de uma classe

let creta = new Car("Creta", "Renault", 2016)
console.log(creta.getName(), creta.getModel(), creta.getYear())

class A {
    print() {
        console.log("I am class A");
    }
}

class B extends A {
    print() {
        console.log("I am class B");
    }
}

const printa = new B();
printa.print();