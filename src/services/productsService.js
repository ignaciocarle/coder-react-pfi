import {
  doc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const productsRef = collection(db, "products");
const categoriesRef = collection(db, "categories");

export const getAllProducts = async (category) => {
  const productsQuery = !category
    ? productsRef
    : query(productsRef, where("category", "==", category));

  const response = await getDocs(productsQuery);
  const products = response.docs.map((product) => {
    return {
      ...product.data(),
      id: product.id,
    };
  });

  return new Promise((res) => {
    res(products);
  });
};

export const getItem = async (id) => {
  const itemQuery = doc(productsRef, id);

  const response = await getDoc(itemQuery);
  const product = { ...response.data(), id: response.id };

  return new Promise((res) => {
    res(product);
  });
};

export const getCategories = async () => {
  const response = await getDocs(categoriesRef);
  const categories = response.docs.map((category) => {
    return {
      ...category.data(),
      id: category.id,
    };
  });

  return new Promise((res) => {
    res(categories);
  });
};

export const checkStock = async (cart) => {
  const itemsIdList = cart.map((item) => item.id);
};
