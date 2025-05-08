"use client";
import OrderItem from "./order-item";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function OrderList({ date, orders }) {

    const [isToday, setIsToday] = useState(false);

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        if (date === formattedDate) {
            setIsToday(true);
        }
    }, []);

    return (
        <div className="w-1/5 h-full flex flex-col justify-between items-center gap-1 rounded-2xl bg-graypanel">
            <h1 className={clsx("badge badge-secondary", { "badge-dash": !isToday })}>{date}</h1>
            <ul className="list h-[95%] bg-white rounded-box shadow-md overflow-y-auto text-neutral">
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </ul>
        </div>
    )
}