"use client";


export default function Card({children, rotate}) {
  return (
    <div className={`card w-full h-3/4 bg-base-100 absolute bottom-24 rounded-2xl shadow-sm backface-hidden transform-3d transition-transform duration-1200 ${rotate} neon-card`}>
      <div className="card-body w-full h-full z-10 bg-base-100 rounded-xl">
        {children}
      </div>
    </div>
  );
}