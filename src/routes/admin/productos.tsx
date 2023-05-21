import { FC, useEffect, useState } from "react";
import { Table, Container, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";

import GenericModal from "../../components/genericModal";
import ProductForm from "../../components/admin/productForm";

const Productos:FC = () => {
  const proDefault = {
    id: '',
    img: '/default.png',
    name: '',
    price: '',
    description: ''
  }
  const [productos, setProductos] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [proProd, setProProd] = useState(proDefault);
  const [deleteProd, setDeleteProd] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/get-products`)
    .then(({ data }) => {
      setProductos(data.data)
    })
  }, [reload]);

  const editProduct = (id:string) => {
    setProProd(productos.find(a=>a.id === id))
    setModalTitle('Editar Producto') 
    setShowModal(true);
  }

  const addProduct = () => {
    setProProd({...proDefault})
    setModalTitle('Agregar Producto');
    setShowModal(true);
  }

  const deleteProduct = async (id:string) => {
    setDeleteProd(id)
    setModalTitle('Eliminar Paquete') 
    setShowModal(true);    
  }

  const updateProduct = async (p:any, id:string, e:any = null, img:any) => {
    if(e) e.preventDefault();
    if(img){
      const imgData = await saveImage(img);
      p.img = imgData.data.path;
    }
    axios.put(`${import.meta.env.VITE_API}/update-product/${id}`, p)
    .then(({ data }) => {
      setReload(!reload)
      setShowModal(false)
    })
  }

  const saveProduct = async (p:any, id:string, e:any = null, img:any) => {
    e.preventDefault();
    if(img){
      const imgData = await saveImage(img);
      p.img = imgData.data.path;
    }
    axios.post(`${import.meta.env.VITE_API}/create-product`, p)
    .then(({ data }) => {
      setReload(!reload)
      setShowModal(false)
    })
  }

  const saveImage = async (file:any) => {
    const formData = new FormData();
    formData.append('image', file);
    return await axios.post(`${import.meta.env.VITE_API_FRONT}/upload-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  const deletePDB = (id:string) => {
    axios.delete(`${import.meta.env.VITE_API}/delete-product/${id}`)
    .then(({ data }) => {
      setDeleteProd('')
      setReload(!reload)
      setShowModal(false)
    })
  }

  return (
    <Container className="text-center" fluid style={{marginTop:'50px'}}>
      <Row>
        <Col>
          <h3 className="mb-4">Administrar productos</h3>
        </Col>
        <Col xs={3}>
          <Button className="" variant="primary" onClick={()=> addProduct()}>Agregar Producto <i className="bi bi-plus-lg"></i></Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((p, i: number) => (
              <tr key={i} style={{verticalAlign: 'middle'}}>
                <td>{p.id}</td>
                <td><img src={p.img} style={{width:'80px'}} /></td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td><Button variant="primary" onClick={()=> editProduct(p.id)}><i className="bi bi-pencil-square"></i></Button></td>
                <td><Button variant="danger" onClick={()=> deleteProduct(p.id)}><i className="bi bi-trash"></i></Button></td>
              </tr>
            ))
          }      
        </tbody>
      </Table>
      <GenericModal show={showModal} onHide={() => {setShowModal(false); setDeleteProd('');}}>
      {deleteProd !== '' ? 
          <div className="text-center">
            <h3>Deseas eliminar el Producto?</h3> 
            <Button variant="danger" className="m-3" onClick={()=> deletePDB(deleteProd)}>Eliminar</Button>
          </div>
        :
        <ProductForm {...proProd} saveProd={modalTitle === 'Agregar Producto' ? saveProduct : updateProduct} title={modalTitle}/>
      }
      </GenericModal>
    </Container>
  );
}

export default Productos;