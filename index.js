const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "Maria", edad: 30 },
  { id: 3, nombre: "Luis", edad: 18 }
];


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});


app.post('/', function (req, res){
  usuarios.push ({id: req.body.id, nombre: req.body.nombre, edad: req.body.edad})
  res.send({mensaje: 'Usuario añadido correctamente'})
})

app.get('/', function (req, res){
  res.send(usuarios)
})

app.patch('/:nombre', function(req, res){
  const nombre = req.params.nombre;
  const encontrado = usuarios.find(res.send(usuarios));
   if (!encontrado) return res.send("No se encontró al usuario");
    else{
      encontrado.nombre = req.body.nombre
      encontrado.edad = req.body.edad
      res.send({ mensaje: 'Usuario actualizado correctamente', usuario: encontrado })
    }
  
});

app.delete('/:nombre', function(req, res){
  const nombre = req.params.nombre;
  const indice = usuarios.findIndex(usuario => usuario.nombre === nombre);
  
  if (indice === -1) return res.status(404).send("No se encontró al usuario");
  
  usuarios.splice(indice, 1);
  res.send(`Se eliminó al usuario ${nombre}`);
});
  





