import React from "react";

const StandardPlan = () => {
  return (
    <div className="text-center">
      <a
        mp-mode="dftl"
        href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084876ab8e901876b352b56000f"
        name="MP-payButton"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Suscribirme
      </a>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
           (function() {
              function $MPC_load() {
                 window.$MPC_loaded !== true && (function() {
                 var s = document.createElement("script");
                 s.type = "text/javascript";
                 s.async = true;
                 s.src = document.location.protocol + "//secure.mlstatic.com/mptools/render.js";
                 var x = document.getElementsByTagName('script')[0];
                 x.parentNode.insertBefore(s, x);
                 window.$MPC_loaded = true;
              })();
           }
           window.$MPC_loaded !== true ? (window.attachEvent ? window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;
           `,
        }}
      />
    </div>
  );
};

export default StandardPlan;
