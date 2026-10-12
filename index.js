const bodyParser = require('body-parser');
const morgan=require('morgan');
const express= require('express');
const app= express();
const pokemon=require('./routes/pokemon')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
Para ejecutar en terminal es npm start 
vervos http
GET es obtener recursos 
POST almacenar recursos/crear recursos
PATCH es modificar un recurso una parte de un recurso 
PUT modificar un recurso, que nosotros modifiquemos un recurso completo 
DELETE es borrar un recurso     

*/

app.get("/", (req,res,next)=>{ 
    return res.status(200).send("bienvenido al pokemon");

});

app.use("/pokemon", pokemon );

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");

});