import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios'

const PaqueteForm = (props:any) => {
  const { savePack, title, id, school, sch_description, colegios, products, ...others } = props
  const [paquete, setPaquete] = useState({...others})
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [mount, setMount] = useState(false)
  const [saveImage, setSaveImage] = useState(false)
  const animatedComponents = makeAnimated();

  useEffect(() => {
    if(id){
      axios.get(`${import.meta.env.VITE_API}/get-products-by-package/${id}`)
      .then(({ data }) => {
        const pSelect = data.data.map((p:any, i:string)=>{
          return {value: p.id, label: p.name, price: p.price}
        })
        setMount(true)
        setSelectedProducts(pSelect)
      })
    }else{
      setMount(true)
    }
  }, [id]);

  const productHanlder = (e:any) => {
    let price = 0
    const pSelect = e.map((p:any, i:string)=>{
      price += p.price
      return {value: p.value, label: p.label, price: p.price}
    })
    setPaquete({...paquete, price: price})
    setSelectedProducts(pSelect)
  }

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    setSaveImage(file)
    setPaquete({...paquete, img: file.name})
  };
  
  return (
    <div>
      <h3 className='text-center'>
        {title}
      </h3>
      <Form onSubmit={(e)=>savePack(paquete, id, e, selectedProducts, saveImage)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control             
            type="text" 
            value={paquete.name} 
            onChange={(e)=>setPaquete({...paquete, name: e.target.value})} />
        </Form.Group>      
        <Form.Group className="mb-3" controlId="school">
          <Form.Label>Colegio</Form.Label>
          <Form.Select             
            value={paquete.school_id} 
            onChange={(e)=>setPaquete({...paquete, school_id: parseInt(e.target.value)})}>
            {colegios.map((c:any, i:string)=>{
              return (<option key={i} value={c.id}>{c.name}</option>)
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="sch_description">
          <Form.Label>Productos</Form.Label>
          {mount && 
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={selectedProducts}
              isMulti
              options={products}
              onChange={(e:any)=>productHanlder(e)}
            />
          }
        </Form.Group>   
        <Form.Group className="mb-3 col" controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control               
            type="text" 
            value={paquete.price} 
            onChange={(e)=>setPaquete({...paquete, price: parseFloat(e.target.value)})} />
        </Form.Group>  
        <Form.Group className="mb-3 col" controlId="price">
          <Form.Label>Imagen</Form.Label>
          <input               
            type="file" 
            accept="image/png, image/jpeg"
            onChange={(e)=> handleFileChange(e)} 
            />
            {paquete.img && <p>Selected file: {paquete.img}</p>}
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

export default PaqueteForm