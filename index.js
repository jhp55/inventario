const express = require('express');
const mongoose = require("mongoose")
require("dotenv").config()
const holaRoutes = require("./routes/holaRoutes")
const inventarioRoutes = require("./routes/inventario")
const app = express();
PORT = 3000;

app.set("port", PORT);

app.use(express.json())


app.get("/hola",(req,res)=>{
    res.send("hola mundo")
});

app.use("/api/hola",holaRoutes)
app.use("/api/inventario",inventarioRoutes)


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Conectado a la Base de datos"))
.catch((err)=>console.error(err))

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
});