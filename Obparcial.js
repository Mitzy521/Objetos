//Creamos la clase.
class muñecas {
    constructor (nombre, tamaño, año) {
        //Atributos
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.año = año;
    }

//Metodos
mostrarnombre(){
    return '${this.nombre)';
}
mostrarapellido(){
    return '${this.tamaño)';
}
mostrargenero(){
    return '$(this.año)';
}

}

//Creamos un objeto
let muñeca1 = new muñecas("Eliza", "30cm", "2000");
let muñeca2 = new muñecas("Mari", "25cm", "2015");
let muñeca3 = new muñecas("Cristal", "25cm", "2008");

//Imprimimos loa objetos
console.log(muñeca1);
console.log(muñeca2);
console.log(muñeca3);
