/*
const mockData = [
  {
    id: 1,
    title: "Cuaderno de Comunicaciones Secundario",
    description: "Cuadernos de comunicados de 56 páginas",
    price: 130,
    image: "",
  },
  {
    id: 2,
    title: "Cuaderno de Comunicaciones Primario",
    description: "Cuadernos de comunicados de 48 páginas",
    price: 118,
    image: "",
  },
  {
    id: 3,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    image: "",
  },
  {
    id: 4,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    image: "",
  },
  {
    id: 5,
    title: "Cuaderno de Comunicaciones Inicial",
    description: "Cuadernos de comunicados de 36 páginas",
    price: 96,
    image: "",
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
*/

const PATH = "https://fakestoreapi.com";

export const getAllProducts = (category) => {
  const URL = PATH + `/products${category ? "/category/" + category : ""}`;
  return fetch(URL).then((res) => res.json());
};

export const getItem = (id) => {
  const URL = PATH + `/products/${id}`;
  return fetch(URL).then((res) => res.json());
};

export const getAllCategories = () => {
  const URL = PATH + `/products/categories`;
  return fetch(URL).then((res) => res.json());
};
