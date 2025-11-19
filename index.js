import express from "express"
import router from "./src/router/router.js";
import { errorHandler } from "./src/middlewares/index.js";

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",router)

// 404
app.use((req, res) => {
    res.status(404).send({ error: "Ruta no encontrada" });
});

app.use(errorHandler);

// Servidor
app.listen(8080, ()=>{
console.log("Server corriendo en 8080")
})