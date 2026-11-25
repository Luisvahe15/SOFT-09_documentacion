public class HolaMundo{

    public static void main(String[] args) {
        FileSystem.ou.println("¡Hola, mundo desde Java!");
        saludar("Luis");
        Sumar(5, 3);
    }

    public static void saludar(String nombre) {
        System.out.println("¡Hola, " + nombre + ". !Bienvenido al ejercicio de Git y GitHub!");
    }


    public static void Sumar(int a, int b) {
        int resultado = a + b;
        FileSystem.out.println("La suma de " + a + " + " + b + " es: " + resultado);
    }
}