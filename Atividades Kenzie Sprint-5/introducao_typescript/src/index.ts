// Inferência de Tipos

let myStr = "Minha String";

let myInt = 10;

let myFloat = 10.5;

let myDate = new Date();

let myArray = [1, 2, 3];

let myObj = { name: "nome", valor: 5 };

// Erro de tipagem

myInt = "Hello";

// Tipando Funções

const myFunction = (name: string, age: number): string => {
  return `Nome: ${name} - Idade: ${age}`;
};

// Chamando a Função

const myName = "Nome";
const myAge = 150;

let stringReturn: string;
let numberReturn: number;

// 1
stringReturn = myFunction(myName, myAge);

// 2
numberReturn = myFunction(myName, myAge);

// 3
stringReturn = myFunction(myAge, myAge);

// 4
stringReturn = myFunction(myName);

// Funções e Parâmetros Opcionais

const myFunction2 = (name: string, age?: number): string => {
  if (age === undefined) {
    return `Name - ${name}`;
  }

  return `Nome: ${name} - Idade: ${age}`;
};

myFunction2("Nome");

myFunction2("Nome", 42);

// O Tipo Any

let myValue: any = "Minha String";

myValue = 5;

let myValue; // Implicitamente myValue é do tipo Any

// parameter vai ter o tipo any de forma implícita
const myFunction3 = (parameter) => {
  return parameter;
};

// Criando Tipos com Type

type Book = {
  author: string;
  title: string;
};

// Definindo uma variável com o tipo "Book"
let book: Book = {
  author: "Author",
  title: "Title",
};

// Definindo um parâmetro de função com o tipo "Book"
const printBookData = (book: Book) => {
  console.log(`${book.author} - ${book.title}`);
};

//Criando Tipos com Interface

interface IBook {
  author: string;
  title: string;
}

let ibook: IBook = { author: "Author", title: "Title" };

const printAuthorBook = (book: IBook) => {
  console.log(`${book.author} - ${book.title}`);
};

// Extendendo o Type

type BookFull = Book & {
  publicationYear: number;
};

// Extendendo a Interface

interface IBookFull extends Book {
  publicationYear: number;
}

// Atributor Opcionais em Type e Interface

type BookAll = {
  author: string;
  title: string;
  published?: Date;
};

interface IBookAll {
  author: string;
  title: string;
  published?: Date;
}