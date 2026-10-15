//dependencias
const morgan=require('morgan');
const express= require('express');
const app= express();
//routers
const pokemon=require('./routes/pokemon');
const user=require('./routes/user');
//middleware
const auth=require('./middleware/auth'); 
const notFound=require('./middleware/notFound');    
const index=require('./middleware/index');

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
app.get("/", index);
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon );


app.use(notFound);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");

});