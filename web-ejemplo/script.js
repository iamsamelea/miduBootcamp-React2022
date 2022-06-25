console.log('Hola mundo');

/* APUNTES 

1. JavaScript tiene tipado debil: quiere decir que a una variable la podemos declarar con un valor de tipo String i poder asignarle más adelante otro valor de tipo numerico y funcionaria igual, al contrario que con Java.

2. JavaScript és dinamico: significa que cuando le asignamos el valor el ya sabe que la variable es de tipo String, numerico o booleano sin tener que indicarle el tipo, al contrario que Java al que si que hay que indicar que tipo de dato vamos a pasarle como valor de la variable.

3. Tipos de datos PRIMITIVOS en JS i son immutables: numeral(2), String("Hola que tal"), boolean(true or false), undefined, null, BigInt, Symbol.

4. IMMUTABLE: Los datos inmutables son una parte de la información que no se puede (o no se debe) eliminar o modificar, por ejemplo si utilizamos el metodo setUppercase en una variable de tipo string no funcionará ya que és immutable, para poder hacerlo habria que declarar una variable i despues con la otra variable darle el tipo de dato modificado. Ejemplo:

//No funcionará, no hará el texto en mayúsculas
let pruebaImmutable = "Samuel";
pruebaImmutable.setUppercase();

//SI funcionará porque está asignada a otra variable
let pruebaImmutable = "Samuel";
let nuevaPruebaImmutableUppercase = pruebaImmutable.setUppercase();


5. MUTABLE: Los tipos de datos mutables son todos aquellos a los que es posible cambiar, modificar o actualizar su contenido, como por ejemplo Objetos.

6. FUNCIONES: Se dice que las funciones son "ciudadanos de primera clase" ya que se pueden utilizar como una variable más y la podemos utilizar para todo, esto és lo que hace JavaScript tan potente.
*/



/* DECLARAR VARIABLES */
let firstName = 'Samuel'; //Permite asignar valor y mas adelante cambiar el valor de la variable
const lastName = 4; //con una variable de tipo const no se puede cambair el valor de esta variable más adelante en el código
//var es la forma antigua de declarar una variable i tambien permite que se pueda acceder a esta variable desde fuera de un scope (un scope por ejemplo es dentro de las llaves de una función) i entonces se puede utilizar la variable en todo el código, en cambio let no.
var isDeveloper = true;





/* DECLARAR ARRAY */
//ARRAY DE FORMA MUTABLE
const list = []; //array vacio
list.push(1, 2, 3); //le asignamos los valores con el método push

//acceder a la primera posición del array
console.log(list[0]);






//ARRAY DE FORMA IMMUTABLE
const list2 = []; //declaramos el array de lista

list2.concat([127, 32, 44]); //utilizamos concat y concatenamos un array 
console.log(list2); //No se imprime porque es immutable

let listBuena = list2.concat([127, 32, 44]); //declaramos una variable para poder imprimr la concatenacion
console.log(listBuena); //Si se imprime porque es la nueva variable






/* DECLARAR OBJETOS */
const persona = {
    name: "Samuel",
    twitter: "@hola",
    age: 27,
    isDeveloper: true,
    links: ["https://www.twitch.com", "https://www.youtube.com"]
}

//Acceder a las propiedades del objeto
console.log(persona.name);
console.log(persona.links[0]);




//Acceder a un valor utilizando una variable que no está declarada en el objeto para acceder al objeto (ejemplo acceder al twitter), FORMA DINÁMICA DE ACCEDER.

const field = "twitter"; //la variable field tiene el mismo valor que la key que contiene twitter en el objeto persona, de esta forma tambien podemos acceder a esa key y sacar la información, ya que la variable field contiene el valor twitter y asi se nombra la key en el objeto persona.

console.log(persona[field]); //esto nos imprimirá @hola







/* FUNCIONES */
//CREAMOS LAS FUNCIONES

//Creamos una function expression, significa que a una constante se le asigna una función
const sumar = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
}

//Declaramos una función (expresion), lo que tiene de diferente una función es que la puedes llamar donde sea del código que JavaScript la puede leer
function restar(a, b) {
    return a - b;
}


let op1 = 2;
let op2 = 3;

//llamamos a la función 
console.log(sumar(2, 5)); //Le pasamos los numeros nostros como parametros
console.log(sumar(op1, op2)); //Le pasamos las variables como parámetros
console.log(restar(8, 2));
console.log(restar(op2, op1));
