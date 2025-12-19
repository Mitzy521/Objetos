//Creación de la clase
class vehiculos {
    constructor (marca, año, color){
        //declaración de los diferentes atributos.
        this.marca = marca;
        this.año = año;
        this.color = color;
    }
//Creación de los metodos.
mostrarmarca(){
    return '$(This.marca)';
}
mostraraño(){
    return '$(This.año)';
}
mostrarcolor(){
    return '$(This.color)';
}
}

//Creación de los diferentes objetos y espesificación sus atributos.
let vehiculo1 = new vehiculos ("Toyota", 2015, "Azul")
let vehiculo2 = new vehiculos ("Mitsubishi", 2000, "Negro")
let vehiculo3 = new vehiculos ("Hundai", 2020, "Blanco")

//Impresión de los objetos.
console.log (vehiculo1)
console.log (vehiculo2)
console.log (vehiculo3)
