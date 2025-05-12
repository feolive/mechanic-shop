"use client";
import OrderPanel from "@/app/_components/staff/order-panel";

const option = {
  title: "",
  YAxis: { name: "", unit: "", step: 5, min: 0, max: 100 },
  XAxis: { name: "", unit: "", step: 5, min: 1, max: 31 },
  palette: {
      red: "#FF0000",
      blue: "#0000FF",
      green: "#00FF00",
      yellow: "#FFFF00",
      orange: "#FFA500",
      pink: "#FF00FF",
      purple: "#800080",
      brown: "#A52A2A",
      gray: "#808080",
      black: "#000000",
      white: "#FFFFFF",
  }
}

export default function Appointment() {

  // TODO: REPLACE ALL THE CODE BELOW WITH YOUR OWN CODE
  // THE COMMENTED CODE IS A SIMPLE REQUEST TO THE API THAT LOCATES IN THE app/api/management/game-card/route.ts

  // const [customer, setCustomer] = useState({});


  // useEffect(() => {
  //   async function handleSubmit() {
  //     const res = await fetch('/api/management/customer');
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   handleSubmit();
  // }, []);

  return (
    <main className="w-full h-full flex flex-col justify-start items-center gap-2">
      {/* upper part */}
      <div className="w-full h-1/5 flex justify-between items-center gap-2 text-neutral">
        <section className="w-1/3 h-full bg-primary-content rounded-2xl">
          <p>Message</p>
        </section>
        <section className="w-1/3 h-full bg-primary-content rounded-2xl">
          <p>Trend</p>
        </section>
        <section className="w-1/3 h-full bg-black text-white rounded-2xl p-2">
          <div className="w-full h-full relative flex flex-col justify-end items-center rounded-2xl bg-graypanel text-white">
            <h1 className="absolute left-2 top-2 text-sm sm:text-md font-bold text-white">Task Console</h1>
          </div>
        </section>
      </div>
      {/* lower part */}
      <div className="w-full h-4/5 flex justify-between items-center gap-2 text-neutral">
        <div className="w-1/6 h-full relative flex flex-col justify-start items-center gap-2 bg-black text-white rounded-2xl p-2">
          <div className="w-full h-full relative flex flex-col justify-end items-center rounded-2xl bg-graypanel text-white">
            <h1 className="absolute left-2 top-2 text-sm sm:text-md font-bold text-white">Pending Orders</h1>
          </div>
        </div>
        <section className="w-5/6 h-full bg-black text-white rounded-2xl p-2">
          <OrderPanel />
        </section>
      </div>
    </main>
  );
}