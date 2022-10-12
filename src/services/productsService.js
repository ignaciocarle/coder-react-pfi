import { db } from "../firebase/firebase";
import {
  doc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";

const productsCollection = collection(db, "products");
const categoriesCollection = collection(db, "categories");

export const getAllProducts = (category) => {
  const productsQuery = !category
    ? productsCollection
    : query(productsCollection, where("category", "==", category));

  return new Promise((res) => {
    getDocs(productsQuery)
      .then((data) => {
        const products = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        res(products);
        console.log("Productos obtenidos desde productsService");
      })
      .catch(() => {
        console.log("No se pudieron obtener los productos");
      });
  });
};

export const getItem = (id) => {
  const itemQuery = doc(productsCollection, id);

  return new Promise((res) => {
    getDoc(itemQuery)
      .then((item) => {
        res({ ...item.data(), id: item.id });
      })
      .catch(() => {
        console.log("No se pudieron obtener los productos");
      });
  });
};

export const getAllCategories = () => {
  return new Promise((res) => {
    getDocs(categoriesCollection)
      .then((data) => {
        const categories = data.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        res(categories);
      })
      .catch(() => {
        console.log("No se pudieron obtener las categorías");
      });
  });
};
