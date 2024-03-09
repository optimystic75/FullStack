#Exercise 1: create a list, tuple, float, integer, decimal and dictionary

my_list = ['blue', 'red', 'green', 'yellow', 'purple']

my_tuple = ('cat', 'dog', 'bird', 'fish', 'mouse')

my_float = 14.75

my_integer = 77

my_decimal = 21.1214

animales = {
    "ave": "pajaro",
    "mam": "gato",
    "rep": "serpiente" ,
    "ins": "mantis",
}


#Exercise 2: round your float up

import math

my_float = 14.75

round_number = math.ceil(my_float)

print(round_number)


#Exercise 3: get the square root of your float

import math

my_float = 14.75

square_root = math.sqrt(my_float)

print(square_root)


#Exercise 4: select the first element from your dictionary

animales = {
    "ave": "pajaro",
    "mam": "gato",
    "rep": "serpiente" ,
    "ins": "mantis",
}

especie = animales['ave']

print(especie)


#Exercise 5: select the second element from your tuple

my_tuple = ('cat', 'dog', 'bird', 'fish', 'mouse')

second_element = my_tuple[1]

print(second_element)


#Exercise 6: add an element to the end of your list

my_list = ['blue', 'red', 'green', 'yellow', 'purple']

my_list.insert(5, 'orange')

print(my_list)


#Exercise 7: replace the first element in your list

my_list = ['blue', 'red', 'green', 'yellow', 'purple']

my_list[0] = 'orange'

print(my_list)


#Exercise 8: sort your list alphabetically

my_list = ['blue', 'red', 'green', 'yellow', 'purple']

my_list.sort()

print(my_list)


#Exercise 9: use reassignment to add an element to your tuple

my_tuple = ('cat', 'dog', 'bird', 'fish', 'mouse')

my_tuple += ('elephant',)

anim1, anim2, anim3, anim4, anim5, anim6 = my_tuple

print(anim1)
print(anim2)
print(anim3)
print(anim4)
print(anim5)
print(anim6)







