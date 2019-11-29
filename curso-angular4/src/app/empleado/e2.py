print("datos de la primera persona")
#Para cargar por teclado una cadena de caracteres utilizamos la funcion input 
# Las variables pueden tener muchas unciones aqui teneis una la utiñizamos para alacenar el valor  introducido por teclado
nombre1=input("ingrese nombre del producto : ")
precio1=int(input("ingrese un presio :"))
nombre2=input("Ingrese nombre del producto :")
precio2=int(("ingrese un precio :")) 

#Esta es una constante 
BONIFICACION = 20
""" ESTAS comillas son comentarios largos """
#Estos numerales son comentarios cortos
precio_compra_total = precio1 + precio2 #opreador aritmetico
comprar = precio1 >= precio2 #operador comparacion
logico =(precio1 < precio2 and precio1 == precio2)#operador logico 

cabecera="resultados del producto {0}. y del producto.{1}:"
#concatenamos las cadenas de texto de varios formas aqui tenis  una con la funcion format
print (cabecera.format(nombre1,nombre2))
print ("El precio del primer es mayor o igual a el precio del segundo valor :")
print (comparar)
#concatenar  se puede hacer de esta manera con el sing+ y en la variblela propiedad
print ("la suma de los dos `roductos  es : " + str(precio_compra_total) )
print ("precio < precio2 and precio1 == precio2")
print (logico)
"""vemos el operador de operacion aqui abajo"""
precio_compra_total += BONIFICACION
print ("al precio total le incrementamos su valor que tiene la constante :" + str(precio_compra_total))