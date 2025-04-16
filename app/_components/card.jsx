"use client";
import clsx from "clsx";


export default function Card({children, width="w-40", height="h-40", title, active, onClick }) {
  return (
    <div className={clsx(`card ${width} ${height} relative rounded-2xl shadow-md cursor-pointer`, active ? "bg-primary text-base-300":"bg-base-100 text-base-content")} onClick={onClick}>
      <div className="card-body w-full h-full z-10 p-2">
        <div className="card-title text-xs">{title}</div>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}