import { FC, useEffect, useState } from "react";
import { Table, Container, Button, Row, Col } from 'react-bootstrap';
import axios from "axios";

import GenericModal from "../../components/genericModal";
import PaqueteForm from "../../components/admin/paqueteForm";

const Paquetes:FC = () => {
  const packDefault = {
    id: '',
    img: '/default.png',
    name: '',
    price: '',
    school: '',
    school_id: '',
    sch_description: '',
    deleted: 0
  }
  const [paquetes, setPaquetes] = useState<any[]>([]);
  const [colegios, setColegios] = useState<any[]>([]);
  const [products, setproducts] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [propPack, setProPack] = useState(packDefault);
  const [deletePack, setDeletePack] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/get-packages`)
    .then(({ data }) => {
      setPaquetes(data.data)
    })
  }, [reload]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/get-schools`)
    .then(({ data }) => {
      setColegios(data.data)
    })
  }, [false]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/get-products`)
    .then(({ data }) => {
      const pSelect = data.data.map((p:any, i:string)=>{
        return {value: p.id, label: p.name, price: p.price}
      })
      setproducts(pSelect)
    })
  }, [false]);

  const editPackage = (id:string) => {
    setProPack(paquetes.find(a=>a.id === id))
    setModalTitle('Editar Paquete') 
    setShowModal(true);
  }

  const addPackage = () => {
    setProPack({...packDefault, school_id: colegios[0].id})
    setModalTitle('Agregar Paquete');
    setShowModal(true);
  }

  const deletePackage = async (id:string) => {
    setDeletePack(id)
    setModalTitle('Eliminar Paquete') 
    setShowModal(true);    
  }

  const updatePackage = async (p:any, id:string, e:any = null, newProducts:any = null, img:any = null) => {
    if(e) e.preventDefault();

    if(img){
      const imgData = await saveImage(img);
      p.img = imgData.data.path;
    }

    await axios.put(`${import.meta.env.VITE_API}/update-package/${id}`, p)

    if(newProducts) {
      const saveProducts = {products: newProducts.map((pro:any)=>pro.value)}
      await axios.post(`${import.meta.env.VITE_API}/add-products-package/${id}`, saveProducts)
    }

    setDeletePack('')
    setReload(!reload)
    setShowModal(false)
  }

  const savePackage = async (p:any, id:string, e:any = null, newProducts:any = null, img:any = null) => {
    if(e) e.preventDefault();

    if(img){
      const imgData = await saveImage(img);
      p.img = imgData.data.path;
    }

    const {deleted, ...data} = p
    const paqId = await axios.post(`${import.meta.env.VITE_API}/create-package`, data)

    if(newProducts) {
      const saveProducts = {products: newProducts.map((pro:any)=>pro.value)}
      await axios.post(`${import.meta.env.VITE_API}/add-products-package/${paqId.data.data.insertId}`, saveProducts)
    }

    setReload(!reload)
    setShowModal(false)
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

  return (
    <Container className="text-center" fluid style={{marginTop:'50px'}}>
      <Row>
        <Col>
          <h3 className="mb-4">Administrar Paquetes</h3>
        </Col>
        <Col xs={3}>
          <Button className="" variant="primary" onClick={()=> addPackage()}>Agregar Paquete <i className="bi bi-plus-lg"></i></Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Colegio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            paquetes.map((p, i: number) => (
              <tr key={i} style={{verticalAlign: 'middle'}}>
                <td>{p.id}</td>
                <td><img src={p.img} style={{width:'80px'}} /></td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.school}</td>
                <td><Button variant="primary" onClick={()=> editPackage(p.id)}><i className="bi bi-pencil-square"></i></Button></td>
                <td><Button variant="danger" onClick={()=> deletePackage(p.id)}><i className="bi bi-trash"></i></Button></td>
              </tr>
            ))
          }      
        </tbody>
      </Table>
      <GenericModal show={showModal} onHide={() => {setShowModal(false); setDeletePack('');}}>
        {deletePack !== '' ? 
          <div className="text-center">
            <h3>Deseas eliminar el Paquete?</h3> 
            <Button variant="danger" className="m-3" onClick={()=> updatePackage({deleted:1}, deletePack)}>Eliminar</Button>
          </div>
        :
        <PaqueteForm {...propPack} savePack={modalTitle === 'Agregar Paquete' ? savePackage : updatePackage} title={modalTitle} colegios={colegios} products={products} />
        }
      </GenericModal>
    </Container>
  );
}

export default Paquetes;