/*
Porgramacion orientada a objetos(POO)


Paradigma = Manera en la que se puede hacer algo especifico.
Paradigma de programacion = Forma o manera en la que puedo programar algo.


POO en JAVA, en JS, C#

Programacion Funcional
Programacion imperativa
Programacion declarativa

Condicion con reglas
Algo que cambia o revoluciona
Algo ya establecido

Pilares fundamentales de la programacion POO
    -POlimorfistico
    -Herencia
    -Encapsulamiento
    -Abstraccion

-Clases(plantillas para hacer muchos objetos)
-Objetos
    -Atributos( lo que tengo - ojitos pispiretos)
    -Metodos ( lo que puedo hacer con lo que tengo - mirar lo bello de la vida)
*/

//Ejemplo del gatito

//Propiedades = variables o constantes

const color ="Gris";
var tamaño = "chiquito";
var edad = 5;
var cicatrices = "true";
var raza = "Angora";
var caracter = "Agresivo";


//Metodos o funciones

function comer(){}
function treparArboles(){}
function maullar(){}
function gruñir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array

//var gato = ["Cilantro", "Agresivo", 5, "Angora", true, "chiquito"]

//Evolución de los arreglos 


// Esta es la sintaxis del objeto 
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}
console.log(Cilantro);

var Perejil = {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames"
}

var DonMicho = {
    nombre: "DonMicho",
    edad: 4,
    caracter : "Flojo",
    raza : "Atigrado"
}

console.log(typeof(DonMicho))
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Don Micho es", DonMicho.caracter)



/*
Clases para agilizar este proceso(plantillas)

*/

// 1.- Defino mi clase con la palabra reservada class

class gato {
    // 2.- Definir mis propiedades o atributos como variables, para despues ponerle valores
    nombre = "";
    edad =  0;
    raza = "";
    caracter = "";

// 4.- Agregar constructores
// Necesito construir con los atributos que ya definí en la clase

constructor(nombre,edad, raza, caracter){ // es una funcion especial para construir donde necesito esos parametros
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.caracter = caracter;
    }

//  "this" es para separar los atributos individuales de cada uno y que no se confunda

// 3.- Definir los metodos que serán deifinidos como funciones o acciones
    maullar(){
        console.log("Miau");
    }
    dormir(){
        console.log("Zzzzzzz");
    }
    ronronear(){
        console.log("prrrrr");
    }
}

//5.- PAra empezar a crear o instanciar objetos(gatos), vamos a utilizar la palabra reservada new nombreClase

var Garfield = new gato("Garfield", 9, "Naranja, Dormilon") ;
var Felix = new gato("Felix", 4, "Caricatura", "Amistoso");
var Kitty = new gato("kitty", 1,"kawaii","tranquilo");
var Esponjoso = new gato("Esponjoso", 3, "gris", "tranquilo");
var Miguel = new gato(" Miguel", 4, "naranja", "amistoso");

console.log(Garfield);

Garfield.ronronear();
Garfield.dormir();
Felix.ronronear();
Miguel.maullar();


//ORDEN GENERAL DE LAS COSAS
// Clases
//Atributos
//Constructores
//Metodos o acciones 

/*

JSON( JavaScript Object Notion)

Es un formato estandar ( que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS


*/

// objetos normales de JS
var Cebollita = {
    nombre: "Cebollita",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

// Objetos en JSON
var CebollitaJSON = {
    "nombre": "Cebollita",
    "edad": 5,
    "caracter" : "Agresivo",
    "raza" : "Angora",
}

console.log(CebollitaJSON);
console.log(typeof(CebollitaJSON));


const objetoDeserealizado = {
    "nombre": "Cebollita", 
    "edad": 5};

const objetoSerealizado = `{
    "nombre": "Cebollita", "edad": 5};`

console.log(typeof(objetoDeserealizado));
console.log(typeof(objetoSerealizado));

//Para poder hacer esas conversiones lo mas rapido posible uso dos metodos


//Objeto de Js
var Perejil ={
    nombre: "Perejil",
    edad: 10,
    caracter: "Feliz",
    raza: "Siames"
}



    // JSON.stringify(Objeto a string para que el servidor lo lea)
    const PerejilSerializado = JSON.stringify(Perejil);

    //JSon.parse(string a un objeto JSON)
    const PerejilDeserializado = JSON.parse(PerejilSerializado);


    console.log("Este es Perejil como objeto", PerejilDeserializado);
    console.log("Este es un Perejil como cadena", PerejilSerializado)