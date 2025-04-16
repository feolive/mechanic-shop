import { useState } from "react";
import clsx from "clsx";


export default function DateBox({ dateList, curr, onClick, layout={width: "w-12", height: "h-12", gap: "gap-3"} }) {
    const [selected, setSelected] = useState(curr);

    const handleClick = (date) => {
      setSelected(date);
      onClick(date);
    };
  
    return (
      <div className={`flex justify-center items-center ${layout.gap}`}>
        {dateList.map((item) => (
            <label key={item.date} className={clsx(`${layout.width} ${layout.height} text-sm bg-base-100 rounded-xl flex flex-col justify-center items-center cursor-pointer transition-colors duration-300 ease-linear`, selected===item.date ? "text-base-300 bg-primary" : "text-slate-500")} 
            onClick={() => handleClick(item.date)}>
              <input
                type="radio"
                className="appearance-none"
                name="datebox"
                checked={selected===item.date}
                value={item.date}
                onChange={()=>{}}
              />
              <span className="font-bold">{item.day}</span>
              <span>{item.date}</span>
            </label>
        ))}
      </div>
    )
  }
