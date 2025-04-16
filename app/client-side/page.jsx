"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/app/_utils/auth-context";
import Card from "@/app/_components/card";
import RequestNew from "@/app/_components/client-side/request-new";
import ServiceStatus from "@/app/_components/client-side/service-status";
import PendingRequest from "@/app/_components/client-side/pending-request";
import ClientProfile from "@/app/_components/client-side/client-profile";
import PlusIcon from "@/app/_icons/PlusIcon";

export default function ClientSide() {
  const { customer, signOut } = useContext(AuthContext);
  const [me, setMe] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    setMe(customer?.[0]);
  }, [customer]);



  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-10 min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
        <ClientProfile me={me} signOut={signOut} />
        <section className="w-full flex justify-center items-center gap-4" aria-label="Service Selections">
          <Card width="w-40" height="h-40" title="Service Status" active={selectedTab === 0} onClick={ () => handleTabChange(0)}>
            <div className="flex justify-between items-center">
              <div>8 services</div>
            </div>
          </Card>
          <div className="flex flex-col justify-center items-center gap-4">
            <Card width="w-40" height="h-18" title="Request New" active={selectedTab === 1} onClick={() => handleTabChange(1)}>
              <PlusIcon color="var(--color-base-content)" width={18} height={18}/>
            </Card>
            <Card width="w-40" height="h-18" title="Pending Requests" active={selectedTab === 2} onClick={() => handleTabChange(2)}>
              <div className="flex justify-between items-center">
                <div>2</div>
              </div>
            </Card>
          </div>
        </section>
        <span className="bg-slate-300 w-[95%] h-0.5"></span>
        <section className="w-full relative" aria-label="Service Details">
          <ServiceStatus opacity={selectedTab === 0} />
          <RequestNew opacity={selectedTab === 1} />
          <PendingRequest opacity={selectedTab === 2} />
        </section>
      
    </div>
  );
}
