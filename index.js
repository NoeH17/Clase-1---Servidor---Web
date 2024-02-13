const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [
  {nombre:"Juan", edad:25},
  {nombre:"Maria", edad:30},
  {nombre:"Luis", edad:18}
]


app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});


app.post('/', function (req, res){
  usuarios.push ({nombre: req.body.nombre, edad: req.body.edad})
  res.send({mensaje: 'Usuario añadido correctamente'})
})

app.get('/', function (req, res){
  res.send(usuarios)
})

app.get('/:nombre', function(req, res){
  let nombre = req.params.nombre;
  
})

app.patch('/:nombre', function (req, res){
  let nombre = req.params.nombre
})

