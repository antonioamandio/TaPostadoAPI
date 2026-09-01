# 📝 Tá Postado (Blog API)

A professional REST API for managing posts and comments, built with Node.js, Express, and PostgreSQL.

## 📖 About the Project

A study and practice project focused on developing a modern REST API, applying fundamental backend concepts and best practices used in real-world applications.

The project aims to explore and consolidate knowledge in:

- Layered architecture
- JWT authentication
- Web application security
- Relational modeling with PostgreSQL
- ORM with Prisma
- Professional development best practices

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- JavaScript (ES Modules)
- PostgreSQL
- Prisma ORM

### Security

- JWT (JSON Web Token)
- Bcrypt

## 🗄️ Database Modeling

### Users

| Field    | Type   |
| -------- | ------ |
| id       | UUID   |
| name     | String |
| email    | String |
| password | String |

### Posts

| Field     | Type   |
| --------- | ------ |
| id        | UUID   |
| title     | String |
| content   | Text   |
| author_id | UUID   |

### Comments

| Field     | Type |
| --------- | ---- |
| id        | UUID |
| content   | Text |
| post_id   | UUID |
| author_id | UUID |

## ⚙️ Installation

### 📋 Prerequisites

Before running the project, make sure you have installed:

- [Node.js 24 LTS or higher](https://nodejs.org/)
- [PostgreSQL 17 or higher](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [npm (installed with Node.js)](https://www.npmjs.com/)

Checking the installations:

```shell
node --version
npm --version
psql --version
git --version
```

### Clone the repository

```shell
git clone https://github.com/antonioamandio/TaPostado.git TaPostadoAPI

cd TaPostadoAPI
```

### Install dependencies

```shell
npm install
```

### Configure environment variables

Create a `.env` file:

```env
PORT=3333
URL=http://localhost
DATABASE_URL=postgres://[user]:[password]@[host]:5432/[database]
JWT_SECRET=your_secret_key
```

### Start the server

```bash
npm run dev
```

## 📈 Roadmap

### Phase 1

- Initial setup
- PostgreSQL
- Prisma ORM
- Migrations

### Phase 2

- User CRUD
- Post CRUD
- Comment CRUD
- Business rules

### Phase 3

- Permission control
- Authentication system
- JWT
- Bcrypt

### Phase 4

- Automated tests
- Validations
- Global error handling

## 📄 License

This project was developed for educational purposes and for studying modern backend development.
