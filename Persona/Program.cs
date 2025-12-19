using System;

class Persona
{
    public string Nombre;
    public int Edad;
    public float Altura;
    public string Sexo;
    public float Peso;

    public void Saludar()
    {
        Console.WriteLine($"Hola Soy {Nombre}, tengo la edad de {Edad}, mido {Altura} metros, soy de sexo {Sexo} y peso {Peso} Libras.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Persona alumno = new Persona();
        alumno.Nombre = "Luis";
        alumno.Edad = 25;
        alumno.Altura = 1.70f;
        alumno.Sexo = "Masculino";
        alumno.Peso = 140.0f;

        alumno.Saludar();
    }
}