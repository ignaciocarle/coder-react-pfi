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

export const getCategories = async () => {
  let categories = [];

  try {
    const responseData = await getDocs(categoriesRef);
    categories = responseData.docs.map((category) => {
      return {
        ...category.data(),
        id: category.id,
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    return new Promise((res) => {
      res(categories);
    });
  }
};

export const getAllProducts = async (category) => {
  const productsQuery = !category
    ? productsRef
    : query(productsRef, where("category", "==", category));
  let productsList = [];

  try {
    const responseData = await getDocs(productsQuery);
    productsList = responseData.docs.map((product) => {
      return {
        ...product.data(),
        id: product.id,
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    return new Promise((res) => {
      res(productsList);
    });
  }
};

export const getItem = async (id) => {
  const itemQuery = doc(productsRef, id);
  let product = {};

  try {
    const responseData = (await getDoc(itemQuery)).data();
    if (responseData) {
      product = { ...responseData, id };
    } else {
      throw new Error(`Can't retrieve product "${id}" from database`);
    }
  } catch (err) {
    product = { notFound: true };
    console.error(err);
  } finally {
    return new Promise((res) => {
      res(product);
    });
  }
};
