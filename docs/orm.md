# Prisma ORM installation guide

## Install Prisma

```shell
npm install prisma --save-dev
```

## Initialize Prisma using PostgreSQL

```shell
npx prisma init --datasource-provider postgresql
```

## Configure the .env file

```.env
DATABASE_URL=postgres://user:password@host:5432/db
```

## Install the Prisma client (with the PostgreSQL driver)

```shell
npm install @prisma/client
npm install @prisma/adapter-pg
```

## Configure the schema.prisma file in the prisma/ folder

```prisma
//prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  //output   = "../src/generated/prisma" // Uncomment if you want to specify the output.
}

datasource db {
  provider = "postgresql"
}

model User {
  id       String @id @default(uuid())
  name     String
  email    String @unique
  password String

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  posts    Post[]
  comments Comment[]

  @@map("users")
}

model Post {
  id      String @id @default(uuid())
  title   String
  content String

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  authorId String @map("author_id")
  author   User   @relation(fields: [authorId], references: [id], onDelete: Cascade)

  comments Comment[]

  @@map("posts")
}

model Comment {
  id      String @id @default(uuid())
  content String

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  authorId String @map("author_id")
  postId   String @map("post_id")

  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)
  post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)

  @@map("comments")
}
```

## Configure the database connection object

```js
// src/config/database.js
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export { prisma }
```
