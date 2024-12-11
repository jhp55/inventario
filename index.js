//trae express para usarlo
const express = requiere("express");

//me crea una variable usar express 
const app = express();

//definimos el puerto 
PORT = 3000;

//configuramos el puerto 
app.set("port", PORT);

//definimos una ruta y un verbo HTTP, (req,res) creamos una funcion que tiene como parametros req:request y res:response el request es lo que recibimos y response a lo que respondemos
app.get("/hola",(req,res)=>{
    res.send("hola mundo")
});


app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
});