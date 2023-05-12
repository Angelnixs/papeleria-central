import { atom } from 'recoil'

export const sessionState = atom({
  key: 'sessionState',
  default: {
    address: null,
    email: null,
    exp: null,
    iat: null,
    id: null,
    name: null,
    number: null,
    type: null,
  }
})

export const paquetesState = atom({
  key: 'paquetesState',
  default: [{
    id: 1,
    name: 'Paquete 1',
    desc: 'Paquete 1',
    price: 100,
    img: '/default.png',
    productos: []
  }, {
    id: 2,
    name: 'Paquete 2',
    desc: 'Paquete 2',
    price: 100,
    img: '/default.png',
    productos: []
  }, {
    id: 3,
    name: 'Paquete 3',
    desc: 'Paquete 3',
    price: 100,
    img: '/default.png',
    productos: []
  }, {  
    id: 4,
    name: 'Paquete 4',
    desc: 'Paquete 4',
    price: 100,
    img: '/default.png',
    productos: []
  }, {  
    id: 5,
    name: 'Paquete 5',
    desc: 'Paquete 5',
    price: 100,
    img: '/default.png',
    productos: []
  }, {  
    id: 6,
    name: 'Paquete 6',
    desc: 'Paquete 6',
    price: 100,
    img: '/default.png',
    productos: []
  }, {
    id: 7,
    name: 'Paquete 7',
    desc: 'Paquete 7',
    price: 100,
    img: '/default.png',
    productos: []
  }, {
    id: 8,
    name: 'Paquete 8',
    desc: 'Paquete 8',
    price: 100,
    img: '/default.png',
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
    img: '/default.png',
    productos: [{
      id: 111,
      name: 'Producto 1',
      desc: 'Producto 1',
      price: 100,
      img: '/default.png',
    }, {
      id: 222,
      name: 'Producto 2',
      desc: 'Producto 2',
      price: 150,
      img: '/default.png',
    }]
  },{
    id: 3,
    name: 'Paquete 3',
    desc: 'Paquete 3',
    price: 100,
    img: '/default.png',
    productos: [{
      id: 111,
      name: 'Producto 1',
      desc: 'Producto 1',
      price: 100,
      img: '/default.png',
    }]
  }]
})
