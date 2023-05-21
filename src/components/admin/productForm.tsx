import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ProductForm = (props:any) => {
  const { saveProd, title, id, ...others } = props
  const [producto, setProducto] = useState({...others})
  const [saveImage, setSaveImage] = useState(false)

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setSaveImage(file)
    setProducto({...producto, img: file.name})
  };
  
  return (
    <div>
      <h3 className='text-center'>
        {title}
      </h3>
      <Form onSubmit={(e)=>saveProd(producto, id, e, saveImage)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control             
            type="text" 
            value={producto.name} 
            onChange={(e)=>setProducto({...producto, name: e.target.value})} />
        </Form.Group>      
        <Form.Group className="mb-3 col" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control               
            type="number" 
            step="0.01"
            value={producto.price} 
            onChange={(e)=>setProducto({...producto, price: parseFloat(e.target.value)})} />
        </Form.Group>  
        <Form.Group className="mb-3 col" controlId="price">
          <Form.Label>Descripción</Form.Label>
          <Form.Control               
            type="text" 
            value={producto.description} 
            onChange={(e)=>setProducto({...producto, description: e.target.value})} />
        </Form.Group>  
        <Form.Group className="mb-3 col" controlId="price">
          <Form.Label>Imagen</Form.Label>
          <input               
            type="file" 
            accept="image/png, image/jpeg"
            onChange={(e)=> handleFileChange(e)} 
            />
            {producto.img && <p>Selected file: {producto.img}</p>}
        </Form.Group>        
        <Form.Group className='text-center mt-5 m-1'>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form.Group>                                  
      </Form>
    </div>
  )
}

export default ProductForm