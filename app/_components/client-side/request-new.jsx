import LeftArrow from "@/app/_icons/LeftArrow";
import RightArrow from "@/app/_icons/RightArrow";
import DownArrow from "@/app/_icons/DownArrow";
import DateBox from "@/app/_components/client-side/date-box";
import { useState } from "react";
import Card from "@/app/_components/card";
import clsx from "clsx";

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

export default function RequestNew({opacity}) {
  const [currDate, setCurrDate] = useState(20);

  const dateClick = (date) => {
    setCurrDate(date);
  };

  return (
    <div className={clsx("w-full flex flex-col justify-center items-center gap-4 transition-opacity duration-350 ease-linear absolute top-0 left-[50%] -translate-x-1/2", opacity ? "opacity-100" : "opacity-0 -z-10")}>
      <section className="w-[90%] flex flex-col justify-center items-center gap-2" aria-label="Date Picker">
        <div className="w-full flex justify-between items-center">
          <div className="inline-flex justify-between items-center gap-1" aria-label="Month">
            <p className="font-bold badge badge-outline badge-primary rounded-2xl">March <DownArrow color="var(--color-primary)" width={12} height={12}/></p>
          </div>
          <div className="inline-flex justify-between items-center gap-1" aria-label="Pagination">
            <button className="w-10 h-10 btn btn-xs rounded-full"><LeftArrow color="var(--color-base-content)" width={12} height={12}/></button>
            <button className="w-10 h-10 btn btn-xs rounded-full"><RightArrow color="var(--color-base-content)" width={12} height={12}/></button>
          </div>
        </div>
        <DateBox dateList={dateList} curr={currDate} onClick={dateClick} layout={{width: "w-12", height: "h-12", gap: "gap-6"}}/>
      </section>
      <p className="text-base-content font-bold text-sm self-start ml-4">Services</p>
      <section className="w-[90%] flex justify-center items-start gap-1" aria-label="Service Selections">
        <div className="w-[50%] flex flex-col justify-start items-center gap-1">
            <Card width="w-40" height="h-20" title="Car Wash"></Card>
            <Card width="w-40" height="h-20" title="Tune"></Card>
            <Card width="w-40" height="h-20" title="Inspection"></Card>
        </div>
        <div className="w-[50%] flex flex-col justify-start items-center gap-1">
            <Card width="w-40" height="h-20" title="Oil Change"></Card>
            <Card width="w-40" height="h-40" title="Time and Material"></Card>
        </div>
      </section>
    </div>
  );
}