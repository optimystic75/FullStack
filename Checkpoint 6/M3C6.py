# Cree una clase de Python llamada Usuario que
# use el método init y cree un nombre de usuario 
# y una contraseña. 

# Crea un objeto usando la clase.


class Usuario:
    def __init__(self, nombre_usuario, contraseña):
        self.nombre_usuario = nombre_usuario
        self.contraseña = contraseña

usuario1 = Usuario("usuario1", "contraseña123")
print("Nombre de usuario:", usuario1.nombre_usuario)
print("Contraseña:", usuario1.contraseña)


