import React from "react";

function PremiumPlan() {
  return (
    <div>
      <a
        mp-mode="dftl"
        href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084876ab8e901876b36cfdd0011"
        name="MP-payButton"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded blue-ar-l-rn-none"
      >
        Suscribirme
      </a>
      <script type="text/javascript">
        {`(function() {
          function $MPC_load() {
            window.$MPC_loaded !== true &&
              (function() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src =
                  document.location.protocol +
                  '//secure.mlstatic.com/mptools/render.js';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
                window.$MPC_loaded = true;
              })();
          }
          window.$MPC_loaded !== true
            ? window.attachEvent
              ? window.attachEvent('onload', $MPC_load)
              : window.addEventListener('load', $MPC_load, false)
            : null;
        })();`}
      </script>
    </div>
  );
}

export default PremiumPlan;
