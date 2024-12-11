# Proyecto inventario 
### inicio del proyecto 
abrimos la terminal en la carpeta del proyecto u hacemos el comando npm init 
```
npm init -y
```

despues instalamos las dependencias 
```
npm install express mongoose dotenv cors
```

despues instalamos dependencias de desarrollo (morgan)
```
npm install --save-dev nodemon
```

abrimos IDE
```
code . 
```

creamos los archivos 

```
tounch index.js .env README.md .gittignore
```

dentro de  .gittignore escribimos lo siguiente:  

```
node modules
.env
```

dentro de index.js pusimos el codigo: 
```
```

- const express = requiere("express"); trae express para usarlo

- const app = express(); //me crea una instancia o imagen de express para usarla en nuestra app.  

-PORT = 3000; definimos el puerto que queremos usar 

- app.set("port", PORT); configuramos el puerto de nuestra app

- app.get("/hola", definimos una ruta y un verbo HTTP
(req,res)=>{ (req,res) creamos una funcion que tiene como parametros 
- req:request es lo que recibimos
- res:response lo que respondemos
-res.send("hola mundo") }); enviamos la repuesta 

- app.listen(PORT,()=>{ escucha el puerto y avisa al console.log 
- console.log(`Listening port ${PORT}`)}); el mensaje de que todo esta OK 




