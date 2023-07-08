const { database } = require("./controllers/database");

const Users = require("./models/Users");
const Contenidos = require("./models/contenidos");
const Actividades = require("./models/actividades");
const Evaluacion = require("./models/evaluacion");
const DetalleActividad = require("./models/DetalleActividad");
const DetalleEvaluacion = require("./models/DetalleEvaluacion");
const tipo_usuario = require("./models/tipo_usuario");

class MainController {
    constructor() {
        database.connect();
    }


    //Traer todos los usuarios
    getUsers(res) {
        Users.find({}, (err, users) => {
            res.send({ status: 200, users: users });
        });
    }

    //Agregar un usuario
    setUsers(users, res) {
        Users.create(users, function (err, newUsers) {
            if (err) throw err;
            res.send('Usuario creado exitosamente');
        });
    }

    //Traer un usuario por su id
    getUser(id, res) {
        Users.find({ _id: id }, (err, users) => {
            res.send({ status: 200, users: users });
        });
    }
    //actializar por id
    updateUsers(user, res) {
        let { id, name, last_name, email, password, id_type_user } = user;
        Users.updateOne(
            { _id: id },
            { $set: { name: name, last_name: last_name, email: email, password: password, id_type_user: id_type_user } }
        )
            .then(rawResponse => {
                res.send({ message: "User actualizado", raw: rawResponse })
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Ocurrió un error al actualizar el usuario con el id: ' + id);
            });
    }

    //eliminar por id
    deleteUser(id, res) {
        Users.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Usuario ha sido Borrado" });
        });
    }







    //Traer todo los contenidos
    getContents(res) {
        Contenidos.find({}, (err, contenidos) => {
            res.send({ status: 200, contenidos: contenidos });
        });
    }

    //Agregar un contenido
    setContents(contenidos, res) {
        Contenidos.create(contenidos, function (err, newContenidos) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer un contenido por su id    ---ERROR---
    //getActivities(id, res) {
    //    Activities.find({ _id: id }, (err, newActivities) => {
    //        res.send({ status: 200, activities: newActivities });
    //    });
    //}

    //actializar por id
    updateContents(contenidos, res) {
        let { id, nom, par_con, id_usuario, id_tipo_contenido } = contenidos;
        Contenidos.updateOne(
            { _id: id },
            { $set: { nom: nom, par_con: par_con, id_usuario: id_usuario, id_tipo_contenido: id_tipo_contenido } }
        )
            .then(rawResponse => {
                res.send({ message: "Contents update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar contenido por id
    deleteContents(id, res) {
        Contenidos.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Contenido borrado" });
        });
    }





    //Traer todas las actividades
    getActivities(res) {
        Actividades.find({}, (err, activities) => {
            res.send({ status: 200, activities: activities });
        });
    }

    //Agregar un actividad
    setActivities(activities, res) {
        Actividades.create(activities, function (err, newActivities) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar por id
    updateActivities(activities, res) {
        let { id, nom, par_actividad, id_tipo_activi } = activities;
        Actividades.updateOne(
            { _id: id },
            { $set: { nom: nom, par_actividad: par_actividad, id_tipo_activi: id_tipo_activi } }
        )
            .then(rawResponse => {
                res.send({ message: "Activities update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteActivities(id, res) {
        Actividades.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Actividad borrada" });
        });
    }






    //Traer todas las evaluaciones
    getEvaluations(res) {
        Evaluacion.find({}, (err, evaluacion) => {
            res.send({ status: 200, evaluacion: evaluacion });
        });
    }

    //Agregar una evaluación
    setEvaluations(evaluacion, res) {
        Evaluacion.create(evaluacion, function (err, newEvaluations) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar evaluacion por id
    updateEvaluations(evaluacion, res) {
        let { id, nombre, tipo_evaluacion, tipo_pregunta } = evaluacion;
        Evaluacion.updateOne(
            { _id: id },
            { $set: { nombre: nombre, tipo_evaluacion: tipo_evaluacion, tipo_pregunta: tipo_pregunta, id_tipo_contenido: id_tipo_contenido } }
        )
            .then(rawResponse => {
                res.send({ message: "Evaluations update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteEvaluations(id, res) {
        Evaluacion.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Actividad borrada" });
        });
    }







    //Traer todos los detalles de una actividad
    getDetalleActividad(res) {
        DetalleActividad.find({}, (err, detalleactividad) => {
            res.send({ status: 200, detalleactividad: detalleactividad });
        });
    }

    //Agregar un detalle de una actividad
    setDetalleActividad(detalleactividad, res) {
        DetalleActividad.create(detalleactividad, function (err, newDetalleActividad) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar evaluacion por id
    updateDetalleActividad(detalleactividad, res) {
        let { id, ask, desc_ask, opt_one, opt_two, opt_three, opt_answ_correct } = detalleactividad;
        DetalleActividad.updateOne(
            { _id: id },
            { $set: { ask: ask, desc_ask: desc_ask, opt_one: opt_one, opt_two: opt_two, opt_three: opt_three, opt_answ_correct: opt_answ_correct } }
        )
            .then(rawResponse => {
                res.send({ message: "Detalle Actividad actualizada", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteDetalleActividad(id, res) {
        DetalleActividad.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Detalle de la actividad borrada" });
        });
    }








    //Traer todos los detalles de un usuario
    getTtipoUsuario(res) {
        tipo_usuario.find({}, (err, tipo_usuario) => {
            res.send({ status: 200, tipo_usuario: tipo_usuario });
        });
    }

    //Agregar un detalle de un usuario
    setTtipoUsuario(tipousuario, res) {
        tipo_usuario.create(tipousuario, function (err, newtipousuario) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer un  detalle por usuario por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar detalle usuario por id
    updateTtipoUsuario(tipousuario, res) {
        let { id, name, last_name, email, user_type } = tipousuario;
        tipo_usuario.updateOne(
            { _id: id },
            { $set: { name: name, last_name: last_name, email: email, user_type: user_type } }
        )
            .then(rawResponse => {
                res.send({ message: "Tipo de usuario actualizada", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteTtipoUsuario(id, res) {
        tipo_usuario.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Detalle del usuario borrada" });
        });
    }






    //Traer todos los detalles de un evaluacion
    getDetalleEvaluation(res) {
        DetalleEvaluacion.find({}, (err, detalleevaluacion) => {
            res.send({ status: 200, detalleevaluacion: detalleevaluacion });
        });
    }

    //Agregar un detalle de un evaluacion
    setDetalleEvaluation(detalleevaluacion, res) {
        DetalleEvaluacion.create(detalleevaluacion, function (err, newdetalleevaluacion) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer un  detalle por evaluacion por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar detalle evaluacion por id
    updateDetalleEvaluation(detalleevaluacion, res) {
        let { id, ask, desc_ask, opt_one, opt_two, opt_three, opt_answ_correct } = detalleevaluacion;
        DetalleEvaluacion.updateOne(
            { _id: id },
            { $set: { ask: ask, desc_ask: desc_ask, opt_one: opt_one, opt_two: opt_two, opt_three: opt_three, opt_answ_correct: opt_answ_correct } }
        )
            .then(rawResponse => {
                res.send({ message: "Detalle de la evaluacion actualizada", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteDetalleEvaluation(id, res) {
        DetalleEvaluacion.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Detalle de la evaluacion borrada" });
        });
    }

}

exports.MainController = new MainController();