const express = require("express");
const app = express();
const { MainController } = require("./MainController");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Pagina principal.
app.get("/", function (req, res) {
    res.send("Mi proyecto del curso");
});




//Traer todos los usuarios
app.get("/users", function (req, res) {
    MainController.getUsers(res);
});

//Agregar un usuario
app.post("/users", function (req, res) {
    let { users } = req.body;
    console.log(req.body);
    MainController.setUsers(users, res);
});

//Traer un usuario por su id
app.get("/users/id", function (req, res) {
    let { id } = req.params;
    MainController.getUser(id, res);
});
// acualizar usuario por Id
app.put("/users/id", function (req, res) {
    let users = req.body.users;
    users.id = req.params.id;
    MainController.updateUsers(users, res);
});

//Eliminar un Usuario por su id
app.delete("/users/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteUser(id, res);
});






//Traer todos los contenidos
app.get("/contenidos", (req, res) => {
    MainController.getContents(res);
});

//Agregar una actividad
app.post("/contenidos", function (req, res) {
    let { contenidos } = req.body;
    console.log(req.body);
    MainController.setContents(contenidos, res);
});

//Traer un usuario por su id
app.get("/contenidos/:id", function (req, res) {
    let { id } = req.params;
    MainController.getContents(id, res);
});

// acualizar contenido por Id
app.put("/contenidos/:id", function (req, res) {
    let contenidos = req.body.contenidos;
    contenidos.id = req.params.id;
    MainController.updateContents(contenidos, res);
});

//Eliminar un contenido por su id
app.delete("/contents/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteContents(id, res);
});







//Traer todas las actividades
app.get("/actividades", (req, res) => {
    MainController.getActivities(res);
});

//Agregar una actividad
app.post("/actividades", function (req, res) {
    let { actividades } = req.body;
    console.log(req.body);
    MainController.setActivities(actividades, res);
});

//Traer un usuario por su id   ---ERROR---
//app.get("/activities/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar actividad por Id
app.put("/actividades/:id", function (req, res) {
    let actividades = req.body.actividades;
    actividades.id = req.params.id;
    MainController.updateActivities(actividades, res);
});

//Eliminar una actividad por su id
app.delete("/actividades/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteActivities(id, res);
});





//Traer todas las evaluaciones
app.get("/evaluacion", (req, res) => {
    MainController.getEvaluations(res);
});

//Agregar una evaluacion
app.post("/evaluacion", function (req, res) {
    let { evaluacion } = req.body;
    console.log(req.body);
    MainController.setEvaluations(evaluacion, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar evaluacion por Id
app.put("/evaluacion/:id", function (req, res) {
    let evaluacion = req.body.evaluacion;
    evaluacion.id = req.params.id;
    MainController.updateEvaluations(evaluacion, res);
});

//Eliminar una actividad por su id
app.delete("/evaluacion/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteEvaluations(id, res);
});






//Traer todos los detalles de actividad
app.get("/detalleactividad", (req, res) => {
    MainController.getDetalleActividad(res);
});

//Agregar un detalle a la actividad
app.post("/detalleactividad", function (req, res) {
    let { detalleactividad } = req.body;
    console.log(req.body);
    MainController.setDetalleActividad(detalleactividad, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar detalles por Id
app.put("/detalleactividad/:id", function (req, res) {
    let DetalleActividad = req.body.DetalleActividad;
    DetalleActividad.id = req.params.id;
    MainController.updateDetalleActividad(DetalleActividad, res);
});

//Eliminar un detalle por su id
app.delete("/detalleactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleActividad(id, res);
});





//Traer todos los detalles de una evaluacion
app.get("/detalleactividad", (req, res) => {
    MainController.getDetalleActividad(res);
});

//Agregar un detalle a una evaluacion
app.post("/detalleactividad", function (req, res) {
    let { detalleactividad } = req.body;
    console.log(req.body);
    MainController.setDetalleActividad(detalleactividad, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/detalleactividad/:id", function (req, res) {
    let detalleactividad = req.body.detalleactividad;
    detalleactividad.id = req.params.id;
    MainController.updateDetalleActividad(detalleactividad, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/detalleactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleActividad(id, res);
});







//Traer todos los detalles de usuario
app.get("/tipousuario", (req, res) => {
    MainController.getTtipoUsuario(res);
});

//Agregar un detalle a una evaluacion
app.post("/tipousuario", function (req, res) {
    let { tipousuario } = req.body;
    console.log(req.body);
    MainController.setTtipoUsuario(tipousuario, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/ttipousuario/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/tipousuario/:id", function (req, res) {
    let tipousuario = req.body.tipousuario;
    tipousuario.id = req.params.id;
    MainController.updateTtipoUsuario(tipousuario, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/tipousuario/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTtipoUsuario(id, res);
});








//Traer todos los detalles de usuario
app.get("/detalleevaluacion", (req, res) => {
    MainController.getDetalleEvaluation(res);
});

//Agregar un detalle a una evaluacion
app.post("/detalleevaluacion", function (req, res) {
    let { detalleevaluacion } = req.body;
    console.log(req.body);
    MainController.setDetalleEvaluation(detalleevaluacion, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/ttipousuario/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/detalleevaluacion/:id", function (req, res) {
    let detalleevaluacion = req.body.detalleevaluacion;
    detalleevaluacion.id = req.params.id;
    MainController.updateDetalleEvaluation(detalleevaluacion, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/detalleevaluacion/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleEvaluation(id, res);
});







//Traer todos los tipos de actividades
app.get("/tipoactividad", (req, res) => {
    MainController.getTipoActividad(res);
});

//Agregar un tipo de actividades
app.post("/tipoactividad", function (req, res) {
    let { tipoactividad } = req.body;
    console.log(req.body);
    MainController.setTipoActividad(tipoactividad, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/tipoactividad/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar tipos de actividades por Id
app.put("/tipoactividad/:id", function (req, res) {
    let tipoactividad = req.body.tipoactividad;
    tipoactividad.id = req.params.id;
    MainController.updateTipoActividad(tipoactividad, res);
});

//Eliminar un tipo de actividades por su id
app.delete("/tipoactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTipoActividad(id, res);
});







//Traer todos los tipos de contenidos
app.get("/tipocontenido", (req, res) => {
    MainController.getTipoContenido(res);
});

//Agregar un tipo de contenidos
app.post("/tipocontenido", function (req, res) {
    let { tipocontenido } = req.body;
    console.log(req.body);
    MainController.setTipoContenido(tipocontenido, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/tipocontenido/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar tipos de contenidos por Id
app.put("/tipocontenido/:id", function (req, res) {
    let tipocontenido = req.body.tipocontenido;
    tipocontenido.id = req.params.id;
    MainController.updateTipoContenido(tipocontenido, res);
});

//Eliminar un tipo de contenidos por su id
app.delete("/tipocontenido/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTipoContenido(id, res);
});







exports.app = app;