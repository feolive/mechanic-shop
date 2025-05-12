"use client";
import { useState } from "react";
import OrderList from "./order-list";

export default function OrderPanel() {
    const [data, setData] = useState([]);
    
    return (
        <div className="w-full h-full relative flex flex-col justify-end items-center rounded-2xl bg-graypanel text-white">
            <h1 className="absolute left-2 top-2 text-sm sm:text-md font-bold text-white">Order Panel</h1>
            <div className="w-full h-5/6 flex justify-between items-center gap-1">
                <OrderList date="2025-05-03" orders={[]} />
                <OrderList date="2025-05-19" orders={[]} />
                <OrderList date="2025-05-20" orders={[]} />
                <OrderList date="2025-05-21" orders={[]} />
                <OrderList date="2025-05-22" orders={[]} />
            </div>
        </div>
    )
}