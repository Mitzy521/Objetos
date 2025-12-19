using System;

class vehiculo
{
    public string namepropietario;
    public string marca;
    public int decada;
    public string color;

    public void datos()
    {
        Console.WriteLine($"Hola! Soy {namepropietario} dueño de el vehículo {marca} del {decada} de color {color}.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        vehiculo vehiculo1 = new vehiculo();
        vehiculo1.namepropietario = "Angel";
        vehiculo1.marca = "Toyota";
        vehiculo1.decada = 2020;
        vehiculo1.color = "rojo";

        vehiculo1.datos();

        vehiculo vehiculo2 = new vehiculo();
        vehiculo2.namepropietario = "Carlos";
        vehiculo2.marca = "Mitsubishi";
        vehiculo2.decada = 2018;
        vehiculo2.color = "azul";

        vehiculo2.datos();
    }
}