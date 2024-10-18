import Producto from "../database/model/producto.js";

export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud get a la ruta de prueba ");
  res.send("Hola mundo desde backend");
};

export const crearProducto = async (req, res) => {
  
  try{
 // extrare el producto del body de la solicitud 
 
 // validar los datos del body 
 // crear un objeto con el modelo de producto 
 const productoNuevo = new Producto(req.body);
 // guardar el objeto en la BD
  await productoNuevo.save()
 //enviar respuesta que pudimos crear el producto 
 res.status(201).json({mensaje:'El producto fue creado correctamente'})
  } catch(error){
    console.error(error)
    res.status(500).json({mensaje:'Ocurrio un error, no se pudo crear el producto'})
  }

}

export const listarProductos = async (req, res) => {
  
  try{
 
 // pedir a la base de datos la coleccion de productos
 
 const productos = await Producto.find()

 //enviar respuesta que pudimos crear el producto 
 res.status(201).json(productos)
  } catch(error){
    console.error(error)
    res.status(500).json({mensaje:'Ocurrio un error, no se pudo crear el producto'})
  }

}

export const editarProducto = async(req, res) => {
  try{
       console.log(req.body)
       console.log(req.params.id)
       //validar los datos del body
       //buscar si el producto existe

       // en caso que el producto no exista contesto con un error 
       
       // si lo encontre al producto, entonces lo edito 
       //envio respuest aal frontend 

      } catch(error){
       console.error(error)
       res.status(500).json({mensaje:'Ocurrio un error, no se pudo crear el producto'})
     }
}
