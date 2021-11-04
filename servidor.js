const express = require('express');
const mongoose = require('mongoose');
const EmpleadoSchema = require("./modelo/Empleado.js");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
//no olvidar el parentesis del .json(), siempre se me olvida
app.use(express.json());


mongoose.connect("mongodb+srv://Andreswebciclo4:w38c1c104@clusterciclo4.of0ri.mongodb.net/EmpleadosBD1?retryWrites=true&w=majority");

router.get('/', (req, res) => {
    res.send("Servidor En Línea");
});

router.post('/empleado', (req, res)=>{
    let nuevoEmpleado = new EmpleadoSchema({
            tipodoc: req.body.tipodoc,
            id: req.body.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            email: req.body.email,
            telefono: req.body.telefono,
            celular: req.body.celular,
            url: req.body.url,
            descripcion: req.body.descripcion
    });
    nuevoEmpleado.save(function(err, datos){
        if(err){
            console.log(err);
        }
        console.log(datos);
        res.send("Empleado Almacenado Correctamente")
    })
});

router.get('/empleado', (req, res) => {   
      EmpleadoSchema.find(function(err, datos){
        res.send(datos);
      }); 
  });
 
  router.put('/tarea/:id', (req, res) => {
    res.empleado.tipodoc = req.body.tipodoc,
    res.empleado.id = req.body.id,
    res.empleado.nombre = req.body.nombre,
    res.empleado.apellido = req.body.apellido,
    res.empleado.direccion = req.body.direccion,
    res.empleado.email = req.body.email,
    res.empleado.telefono = req.body.telefono,
    res.empleado.celular = req.body.celular,
    res.empleado.url = req.body.url,
    res.empleado.descripcion = req.body.descripcion
    const actualizatarea = res.tarea.save();
    res.json( actualizatarea);
});

router.delete('/tarea', (req, res) => {  
    TareaSchema.deleteOne( function(err, datos){
        res.send(datos);
        console.log("Tarea eliminada");
    });
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor Corriendo Por El Puerto 3000!")
});

//CRUD DE PRUEBA PARA TAREA
/*
router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        console.log(datos);
        //res.datos = datos;   
        res.send("Tarea Almacenada Correctamente"); 
              
    })   
     
});

router.get('/tarea', (req, res) => {   
    TareaSchema.find(function(err, datos){
      res.send(datos);
    }); 
});
*/
