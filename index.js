const morgan=require('morgan');
const express= require('express');
const app= express();
const pokemon=require('./routes/pokemon')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/*
Para ejecutar en terminal es npm start 
vervos http
GET es obtener recursos 
POST almacenar recursos/crear recursos
PATCH es modificar un recurso una parte de un recurso 
PUT modificar un recurso, que nosotros modifiquemos un recurso completo 
DELETE es borrar un recurso     
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar los cambios (todos)
git add .

# 3. Crear el commit con un mensaje
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push origin main
*/
app.get("/", (req,res,next)=>{ 
    return res.status(200).json({code:1, message:"Bienveido al pokedex"});

});

app.use("/pokemon", pokemon );

app.use((req,res,next)=>{
    return res.status(404).json({code:404, message:"URL no encontrada"});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");

});