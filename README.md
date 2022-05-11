# prueba-stac
creacion de api rest para prueba stac

prueba-stac
url https://prueba-stac.herokuapp.com/

servicios
CLIENTES
GET
Get clientes
https://prueba-stac.herokuapp.com/api/v1/clientes
GET
Get cliente
https://prueba-stac.herokuapp.com/api/v1/clientes/1
POST
Create cliente
https://prueba-stac.herokuapp.com/api/v1/clientes
Bodyraw (json)
json
{
  "nombre": "briget",
  "apellido": "vergara",
  "telefono": "23223296",
  "usuarioId": "25"
}
PATCH
Update cliente
https://prueba-stac.herokuapp.com/api/v1/clientes/1
Bodyraw (json)
json
{
  "nombre": "camilo",
  "apellido": "acosta",
  "telefono": "23333",
  "usuario_id": "2"
}
DEL
Delete cliente
https://prueba-stac.herokuapp.com/api/v1/clientes/8

PRODUCTOS
GET
Get productos
https://prueba-stac.herokuapp.com/api/v1/productos
GET
Get producto
https://prueba-stac.herokuapp.com/api/v1/productos/2
POST
Create producto
https://prueba-stac.herokuapp.com/api/v1/productos
json
{
  "id": 3,
  "nombre": "sillaasasas",
  "precio": "2000",
  "categoriaId": "1"
}
PATCH
Update producto


https://prueba-stac.herokuapp.com/api/v1/productos/1
json
{
  "nombre": "sillaasasas",
  "precio": "2000",
  "categoriaId": "256"
}
DEL
Delete producto
https://prueba-stac.herokuapp.com/api/v1/productos/2
