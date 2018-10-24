var express = require('express')
var app = express();

var cors = require('cors');
var  bodyPaser = require('body-parser');


app.listen(8090, function(){
    console.log("El Servidor esta corriendo")
});

app.use(cors());
app.use(bodyPaser());

app.post ('/v1/post/new', function(req, res){
    
    var texto = req.body.texto;
    var date2 = req.body.date2;
    var images = req.body.images;

    var result = {
        success :true,
        texto : texto,
        date2 : date2,
        images : images,
    }

    res.send(result);

});

app.post ('/v1/post/coment', function(req, res){
    var publicacion = req.body.publicacion;
    var comentario = req.body.comentario;
    var fecha =  req.body.fecha;

    var result = {
        success : true,
        publicacion : publicacion,
        comentario : comentario,
        fecha : fecha,
    }

    res.send(result);

});
 app.put ('/v1/post/like', function(req, res){
     var post = req.body.post;
     var like = req.body.like;

     var result = {
        success : true,
        post : post,
        like : like,


     }
     res.send(result);

 });

 app.get('/v1/post', function(req, res){

    var limit = req.body.limit || 5;
    var fechaactual = req.body.fechaactual || "Mensajes ayer";
    var images = req.body.images || "Capitan America";
    var usuarios = req.body.usuarios || "Los que comentaron";
    var coment = req.body.coment || "todos";
    var like = req.body.like || "me gusta";

    var result = {

        success : true,
        limit : limit,
        fechaactual : fechaactual,
        images : images,
        usuarios : usuarios,
        coment : coment,
        like : like,


    }

    res.send(result);

})
app.delete('/v1/post/delete', function(req, res){

    var selecPost = req.body.selecPost;
    var confirmar = req.body.confirmar;

    var result = {

        selecPost : selecPost,
        confirmar : confirmar,
    }

    res.send(result);

})



