const express= require('express');
const app= express();
/*
vervos http
GET 
POST
PATCH
PUT
DELETE
*/
app.get("/", (req,res,next)=>{
    res.status(200);
    res.send("bienvenido ");
});

app.listen(3000, ()=>{
    console.log("server is running...");

});