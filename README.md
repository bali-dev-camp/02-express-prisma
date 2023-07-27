# Express and Prisma

1. Prepare the project

```sh
git clone https://github.com/bali-dev-camp/02-express-prisma.git
```

2. Install the library

```sh
npm install
```

3. Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the `node_modules/.prisma/client` directory and update the `migration`:

```sh
npx prisma generate
```

```sh
npx prisma migrate dev
```
