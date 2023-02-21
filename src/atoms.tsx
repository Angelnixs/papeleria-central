import { atom } from 'recoil'

export const paquetesState = atom({
  key: 'paquetesState',
  default: [{
    id: 1,
    name: 'Paquete 1',
    desc: 'Paquete 1',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+1',
    productos: []
  }, {
    id: 2,
    name: 'Paquete 2',
    desc: 'Paquete 2',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+2',
    productos: []
  }, {
    id: 3,
    name: 'Paquete 3',
    desc: 'Paquete 3',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+3',
    productos: []
  }, {  
    id: 4,
    name: 'Paquete 4',
    desc: 'Paquete 4',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+4',
    productos: []
  }, {  
    id: 5,
    name: 'Paquete 5',
    desc: 'Paquete 5',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+5',
    productos: []
  }, {  
    id: 6,
    name: 'Paquete 6',
    desc: 'Paquete 6',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+6',
    productos: []
  }, {
    id: 7,
    name: 'Paquete 7',
    desc: 'Paquete 7',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+7',
    productos: []
  }, {
    id: 8,
    name: 'Paquete 8',
    desc: 'Paquete 8',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+8',
    productos: []
  }]
})

export const carritoState = atom({
  key: 'carritoState',
  default: [{
    id: 1,
    name: 'Paquete 1',
    desc: 'Paquete 1',
    price: 250,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+1',
    productos: [{
      id: 111,
      name: 'Producto 1',
      desc: 'Producto 1',
      price: 100,
      img: 'https://via.placeholder.com/600x600.png?text=Producto+1',
    }, {
      id: 222,
      name: 'Producto 2',
      desc: 'Producto 2',
      price: 150,
      img: 'https://via.placeholder.com/600x600.png?text=Producto+1',
    }]
  },{
    id: 3,
    name: 'Paquete 3',
    desc: 'Paquete 3',
    price: 100,
    img: 'https://via.placeholder.com/600x600.png?text=Paquete+3',
    productos: [{
      id: 111,
      name: 'Producto 1',
      desc: 'Producto 1',
      price: 100,
      img: 'https://via.placeholder.com/600x600.png?text=Producto+1',
    }]
  }]
})
