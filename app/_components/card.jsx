"use client";
import clsx from "clsx";


export default function Card({children, width="w-40", height="h-40", title }) {
  return (
    <div className={`card ${width} ${height} bg-base-100 relative rounded-2xl shadow-md`}>
      <div className="card-body w-full h-full z-10 p-2">
        <div className="card-title text-xs">{title}</div>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}