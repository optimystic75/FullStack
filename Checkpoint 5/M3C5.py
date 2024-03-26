# 1. Cree un bucle For de Python.

flores = ['clavel', 'jazmin', 'crisantemo', 'tulipan']

for flor in flores:
     print(flor)
      

# 2. Cree una función de Python llamada suma que 
# tome 3 argumentos y devuelva la suma de los 3.

def suma(a, b, c):
    total = a + b + c
    return total

print(suma(5, 7, 9))


# 3. Cree una función lambda con la misma funcionalidad 
# que la función de suma que acaba de crear. 

suma = lambda a, b, c : a + b + c

print(suma(10, 5, 3))


# 4. Utilizando la siguiente lista y variable, determine 
# si el valor de la variable coincide o no con un valor 
# de la lista. 

nombre = 'Enrique'

lista_nombre = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']

if nombre in lista_nombre:
  print(f'{nombre} esta en la lista')
else:
  print(f'{nombre} no esta en la lista')

