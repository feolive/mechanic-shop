import LeftArrow from "@/app/_icons/LeftArrow";
import RightArrow from "@/app/_icons/RightArrow";
import Ellipsis from "@/app/_icons/Ellipsis";
import DateBox from "@/app/_components/client-side/date-box";
import { useState } from "react";


const dateList = [
    {
        day: "Mon",
        date: 17
    },
    {
        day: "Tue",
        date: 18
    },
    {
        day: "Wed",
        date: 19
    },
    {
        day: "Thu",
        date: 20
    },
    {
        day: "Fri",
        date: 21
    }
]

export default function RequestNew() {
  const [currDate, setCurrDate] = useState(20);

  const dateClick = (date) => {
    setCurrDate(date);
  };

  return (
    <>
      <section className="w-[90%] flex flex-col justify-center items-center gap-4" aria-label="Date Picker">
        <div className="w-full flex justify-between items-center">
          <div className="inline-flex justify-between items-center gap-2" aria-label="Month">
            <p className="text-base-content font-bold">March</p>
            <button className="w-10 h-10 btn btn-xs rounded-full"><Ellipsis color="" width={18} height={18}/></button>
          </div>
          <div className="inline-flex justify-between items-center gap-2" aria-label="Pagination">
            <button className="w-10 h-10 btn btn-xs rounded-full"><LeftArrow width={12} height={12}/></button>
            <button className="w-10 h-10 btn btn-xs rounded-full"><RightArrow width={12} height={12}/></button>
          </div>
        </div>
        <DateBox dateList={dateList} curr={currDate} onClick={dateClick} layout={{width: "w-12", height: "h-12", gap: "gap-6"}}/>
      </section>
      <section></section>
    </>
  );
}