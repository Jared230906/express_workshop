const bodyparser = require('body-parser');
const express= require('express');
const app= express();
const { pokemon } =require('./pokedex.json');

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
app.post("/pokemon",(req,res,next)=>{
    return res.status(200).send(req.body);
});

app.get('/pokemon', (req,res,next)=>{
    return res.status(200).send(pokemon);
    
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id-1;
    if( id>=0 && id <= 150){
        return res.status(200).send(pokemon[req.params.id -1]);

    }
    return res.status(404).send("pokemon no encontrado");
    
});

app.get('/pokemon/:name([A-Za-z]+)', (req,res,next)=>{
    //condicion a evaluar ? valor si verdad; valor si falso
    const name =req.params.name;
/*cada uno de las posiciones va a pasar por esta funcion y lo que hace es*/
    const pk=pokemon.filter((p)=>{
        return (p.name.toUpperCase()==name.toUpperCase()) && p;// es como un if
        
    });
    (pk.length > 0) ? res.status(200).send(pk): res.status(404).send("Pokemon no encontrado");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server is running...");

});