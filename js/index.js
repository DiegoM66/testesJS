/* Imprimir no console */

//console.log("Olá mundo!");

/* Imprimir na tela */

//document.write("Olá mundo!");

/* Var, Let e Const

Var -> Escopo Global (Mais antigo)
Let -> Escopo de Bloco
Const -> Escopo de Bloco (não pode ser redefinido)


*/

// Variáveis

var string1 = "João";
var number1 = 20;
var logic1 = true;

let nomeIdade = string1 + " " + number1;

var string2 = "Maria";
var number2 = 21;
var logic2 = true;

let somaIdade = number1 + number2;

document.write(nomeIdade);
document.write(somaIdade);

// Operadores

if(number1 >= number2) {
    console.log("True");
}
else {
    console.log("False");
}

// Array -> Uma variável com vários valores dentro

let frutas = ["maca", "pera", "banana", "melancia", 90, true]
console.log(frutas[3]);

// Laços de repetição -> for, while e do

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Funções com e sem parâmetros

function teste(escolha) {
    console.log(escolha);
}

teste("Olá");

function teste2() {
    console.log("Olá 2")
}

teste2();

// Outra forma de função (com arrow function)

const teste3 = () => {
    console.log("Olá 3");
}

teste3();

// Mais uma forma de função

(
    function() {
        alert("Olá");
    }
)();

// Callback

function teste4(nome, func) {
    console.log(nome);
    func();
}

teste4("Marcos", function(){
    console.log("Hey!")
});

// Classes

class Estudo {
    constructor(){
        this.nome = "Amanda";
    }
    printNome(){
        console.log(this.nome);
    }
}

var estudo = new Estudo();

estudo.nome = "Isa";

estudo.printNome();

var estudo2 = new Estudo();

estudo2.printNome();

// Classes com  parâmetro

class NovoEstudo {
    constructor(nome){
        this.nome = nome;
        console.log(nome);
    }
    printNome(){

    }
}

var novoestudo = new NovoEstudo("Felipe");

// Promises

function teste5 () {
    return new Promise(function(resolve, reject) {
        if(1 == 2) {
        resolve("Antônio");
        } else {
            reject("Falhou");
        }
    })
}

teste5().then(function(val) {
    alert(val);
}).catch(function(error) {
    alert(error);
})

// Funções Assíncronas

function teste6 () {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000, "Guilherme") /* 2s de atraso */
    })
}

teste6().then(function(val){
    console.log(val);
});

// Await -> deve estar em um escopo assíncrono

function teste7 () {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000, "Carlos") /* 2s de atraso */
    })
}

(
    async function() {
        await teste7().then(function(val){
            console.log(val);
        });

        console.log("Chamando depois do atraso");
    }
)();

