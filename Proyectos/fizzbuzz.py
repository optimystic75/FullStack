# El problema clásico de FizzBuzz consiste en imprimir 
# los números del 1 al 100, pero con las siguientes 
# condiciones:

#Si el número es divisible por 3, 
# se imprime "Fizz" en lugar del número.

#Si el número es divisible por 5, 
# se imprime "Buzz" en lugar del número.

#Si el número es divisible por 3 y por 5, 
# se imprime "FizzBuzz" en lugar del número.


def fizzbuzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

# Ejecutar el programa
fizzbuzz()
