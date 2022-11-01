import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ordersRef = collection(db, "orders");

export const newOrder = async (cart, totalAmount, buyer) => {
  const order = {
    dateTime: serverTimestamp(),
    buyer,
    items: cart,
    totalAmount,
    state: "placed",
  };

  const response = await addDoc(ordersRef, order);

  return new Promise((res) => {
    res(response.id);
  });
};
