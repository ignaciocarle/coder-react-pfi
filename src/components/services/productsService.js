const mockData = [
  {
    id: 1,
    title: "Cuaderno de Comunicaciones Secundario",
    description: "Cuadernos de comunicados de 56 páginas",
    price: 130,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 2,
    title: "Cuaderno de Comunicaciones Primario",
    description: "Cuadernos de comunicados de 48 páginas",
    price: 118,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 3,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 4,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
  {
    id: 5,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    pictureUrl: "https://puntoescolar.com/wp-content/uploads/2020/10/foto1.jpg",
  },
];

export const getAllProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(mockData);
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(mockData.find((product) => product.id === id));
    }, 2000);
  });
};