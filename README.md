🔗 [presentation link](https://docs.google.com/presentation/d/10I_NwrND6BuYxptn2pMnjj72_4Gp3Ke0FRrk0FB25Us/edit#slide=id.g119a3211a43_0_41)

# Get test USers

**_in Postman // [vscode] Thunder Client_**

you need it to get the test user data [JSON object]

- you need to have at least 2 (seller/buyer) [in users.json]

🙉 to access credentials, create a mercadopago app. GO to test credentials inside the app and choose test credentials. copy and save them

- post request send Link:

  https://api.mercadopago.com/users/test_user?access_token=OWNACCESSTOKEN

- --> "Headers" section, type..:

```headers
Content-Type: application/json
Authorization: Bearer PROD_ACCESS_TOKEN
```

- --> "Body" section, type...:
  and in raw format

```body
{"site_id":"MLA"}
```

# Config proyect

- run command

```bash
npx express-generator --view=none
```

- inside proyect folder run

```bash
npm i
```

> dependencies

```bash
npm i axios dotenv
```

- erase user from routes

# install mercadopago SDK

[steps here](mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro)

- change `PROD_ACCESS_TOKEN` for seller credentials

```idex.js
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});
```

# paste inside app.js

```js
const express = requiere("express");
const path = requiere("path");
const cookieParser = requiere("cookie-parser");
const logger = requiere("morgan");
const dotenv = requiere("dotenv");

const indexRouter = requiere("./routes/index");

const app = express();

dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
```

> create `.env` file and paste your own token

```
ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

> .gitignore

# add checkout button and redirect

```index.js

// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>

```

# Connection and Transaction

body-parse html content of form to the backend

below the require('mercadopago')

```
// middleware

app.use(bodyParser.urlencoded({ extended: false }))
```

- below the `mercadopago.preferences.create(preference) .then`

```js
console.log(response.body);
res.send("checkout");
```

> http://localhost:3000/checkout must see 'checkout'

# Redirect

- .then when preference is created, change `send` for `redirect` (comment it)
  with the `init_point` URL of production when asking to mercadopago backend item on sale

- change on //route the `get` for a `all` '/checkout'

- remove `method="POST"` from the fomr on the index.js

```js
res.redirect(response.body.init_point);
```

## :anchor: run next server

```bash
# terminal
npm run watch
```

> [nodemon] starting `node pages/mercadopago.js`
> Server on port 3000
> you should see preferences in `terminal`

## :anchor: run next app

```bash
# terminal
npm run dev
```
