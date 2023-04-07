# Express and Prisma

### Step-step

1. Prepare the folder

```sh
mkdir 02-express-prisma
cd 02-express-prisma
```

2. Init `npm` for start the project.

```sh
npm init -y
```

3. Install the library

```sh
npm install express @prisma/client pino cors bcrypt jsonwebtoken
npm install prisma nodemon dotenv --save-dev
```

4. Create new file `index.js`

```sh
touch index.js
```

5. Copy this script into `index.js`

```js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "Hello Express" });
});

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});
```

6. Create schema.prisma

```sh
mkdir prisma && touch ./prisma/schema.prisma
```

7. Copy this file into `schema.prisma`

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:../db/dev.db"
}

generator client {
  provider = "prisma-client-js"
}
```

##### Note

9. Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the `node_modules/.prisma/client` directory and update the `migration`:

```sh
npx prisma generate
```

```sh
npx prisma migrate dev
```
