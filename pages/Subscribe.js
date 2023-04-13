// pages/Subscribe.js
import React from "react";
import MercadoPagoButton from "../components/MercadoPagoButton";

const Subscribe = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-[300px] py-6 mx-auto mt-6">
      <div className="flex flex-col sm:flex-row gap-x-3 gap-y-6 justify-between">
        {/* semanal plan  */}
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-3xl">Medi Semanal || Plan</h3>
          <MercadoPagoButton preapprovalPlanId="2c938084877015bc0187758342cb029d" />
        </div>
        {/* superior plan */}
        <div className="flex flex-col gap-4 mt-6 sm:mt-0 items-center">
          <h3 className="text-3xl">Superior || Plan</h3>
          <MercadoPagoButton preapprovalPlanId="2c9380848774cf5e018775a33f280034" />
        </div>
      </div>
    </main>
  );
};

export default Subscribe;
