Herramienta = require("../models/inventario")

exports.obtenerInventario =async (req, res) => {
    try{
        const inventario = await Herramienta.find({})
        res.json(inventario).status(200)
    }catch (error){
        console.log(error)
        return res.status(500).send(error)
      }
};

exports.crearHerramienta = async(req,res)=>{
    try{
      await Herramienta.create({
        nombre : req.body.nombre,
        unidades: req.body.unidades
      })
      res.status(201).send("Herramienta Creada")
    }catch (error){
      console.log(error)
      return res.status(500).send(error)
    }
  }