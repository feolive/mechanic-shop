
import clsx from "clsx";

export default function PendingRequest({opacity}) {
  return (
    <div className={clsx("w-full h-40 bg-base-100 absolute top-0 left-[50%] -translate-x-1/2 rounded-2xl shadow-md transition-opacity duration-350 ease-linear", opacity?"opacity-100":"opacity-0 -z-10")}>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-info mt-8">2 pending requests</h1>
      </div>
    </div>
  );
}