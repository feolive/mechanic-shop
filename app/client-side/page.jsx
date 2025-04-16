"use client";

import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "@/app/_utils/auth-context";
import Card from "@/app/_components/card";
import RequestNew from "@/app/_components/client-side/request-new";
import tryCatch from "@/app/_utils/try-catch";
import { CartContext } from "@/app/_utils/cart-context";
import ModalDialog from "@/app/_components/modal-dialog";
import ClientProfile from "@/app/_components/client-side/client-profile";

export default function ClientSide() {
  const { customer, signOut } = useContext(AuthContext);
  const [rotateItem, setRotateItem] = useState("rotate-y-0");
  const [rotateCart, setRotateCart] = useState("rotate-y-180");
  const [isCart, setIsCart] = useState(false);
  const [me, setMe] = useState(null);
  const [isOrderDetails, setIsOrderDetails] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currOrder, setCurrOrder] = useState({});
  const { clearCart, refreshOrders, setRefreshOrders } =
    useContext(CartContext);
  const modalRef = useRef(null);

  const flipCard = () => {
    if (isCart) {
      setRotateCart("rotate-y-180");
      setRotateItem("rotate-y-0");
      setIsCart(false);
    } else {
      setRotateCart("rotate-y-0");
      setRotateItem("-rotate-y-180");
      setIsCart(true);
    }
  };

  const orderDetails = ({ orderId, cost }) => {
    setIsOrderDetails(true);
    setCurrOrder({ orderId, cost });
  };

  const clearTheCart = async () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    setMe(customer?.[0]);
  }, [customer]);

  /**
   * Fetch customer orders
   */
  useEffect(() => {
    async function fetchOrders() {
      const [data, error] = await tryCatch(
        async () => await fetch(`/api/client-side/order/${me?.id}`)
      );
      if (error) {
        console.error(error);
        return;
      }
      if (!data) {
        return;
      }
      const orderData = await data.json();
      setOrders(orderData);
    }
    if (!me) {
      return;
    }
    fetchOrders();
    setRefreshOrders(false);
  }, [me?.id, refreshOrders]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
        <ClientProfile me={me} signOut={signOut} />
        <section className="w-full flex justify-center items-center gap-4" aria-label="Service Selections">
          <Card width="w-40" height="h-40" title="Service Status">
            <div className="flex justify-between items-center">
              <div>8 services</div>
            </div>
          </Card>
          <div className="flex flex-col justify-center items-center gap-4">
            <Card width="w-40" height="h-18" title="Request New">
              <button className="btn btn-primary btn-outline btn-xs rounded-full">
                +
              </button>
            </Card>
            <Card width="w-40" height="h-18" title="Card 3">
              <div className="flex justify-between items-center">
                <div>Pending Requests</div>
              </div>
            </Card>
          </div>
        </section>
        <span className="bg-slate-300 w-[95%] h-0.5"></span>
        <section className="w-full flex flex-col justify-center items-center gap-4" aria-label="Service Details">
          <RequestNew />
        </section>
      
      <ModalDialog
        refName={modalRef}
        title="Clear Cart"
        description="Are you sure you want to clear your cart?"
        onConfirm={clearCart}
      />
    </div>
  );
}
