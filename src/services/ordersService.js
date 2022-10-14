/*
crear funcion para generar la compra con addDoc
  que reciba {
    serverTimestamp,
    buyer: {name, hpone, email },
    items: [{...product}],
    monto
  }
  y que devuelva el id de compra

  agregar verificación de stock y actualización si tiene éxito con updateDoc(doc(bd, collection, id), {campo: nuevoValor})
*/
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ordersRef = collection(db, "orders");

const buyerTest = {
  name: "pepe",
  phone: "123456",
  email: "123456@dfasd.com",
};

export const newOrder = async (cart, totalAmount /*, buyer*/) => {
  //checkstock

  const order = {
    dateTime: serverTimestamp(),
    buyer: buyerTest,
    items: cart,
    totalAmount,
  };

  const response = await addDoc(ordersRef, order);

  return new Promise((res) => {
    res(response.id);
  });
};
