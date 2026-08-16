# 📝 Tá Postado (Blog API)

Uma API REST profissional para gerenciamento de posts e comentários, desenvolvida com Node.js, Express e PostgreSQL.

## 📖 Sobre o Projeto

Um projeto de estudo e prática focado no desenvolvimento de uma API REST moderna, aplicando conceitos fundamentais de backend e boas práticas utilizadas em aplicações reais.

O desenvolvimento do projeto tem como objetivo explorar e consolidar conhecimentos em:

- Arquitetura em camadas
- Autenticação JWT
- Segurança de aplicações web
- Modelagem relacional com PostgreSQL
- ORM com Prisma
- Boas práticas de desenvolvimento profissional

## 🛠️ Stack Tecnológica

### Backend

- Node.js
- Express.js
- JavaScript (ES Modules)
- PostgreSQL
- Prisma ORM

### Segurança

- JWT (JSON Web Token)
- Bcrypt

## 🗄️ Modelagem do Banco de Dados

### Users

| Campo    | Tipo   |
| -------- | ------ |
| id       | UUID   |
| name     | String |
| email    | String |
| password | String |

### Posts

| Campo     | Tipo   |
| --------- | ------ |
| id        | UUID   |
| title     | String |
| content   | Text   |
| author_id | UUID   |

### Comments

| Campo     | Tipo |
| --------- | ---- |
| id        | UUID |
| content   | Text |
| post_id   | UUID |
| author_id | UUID |

## ⚙️ Instalação

### 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js 24 LTS ou superior](https://nodejs.org/)
- [PostgreSQL 17 ou superior](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [npm (instalado juntamente com o Node.js)](https://www.npmjs.com/)

Verificando as instalações:

```shell
node --version
npm --version
psql --version
git --version
```

### Clonar o repositório

```shell
git clone https://github.com/antonioamandio/TaPostado.git TaPostadoAPI

cd TaPostadoAPI
```

### Instalar dependências

```shell
npm install
```

### Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
PORT=3333
URL=http://localhost
DATABASE_URL=postgres://[user]:[password]@[host]:5432/[database]
JWT_SECRET=your_secret_key
```

### Iniciar o servidor

```bash
npm run dev
```

## 📈 Roadmap

### Fase 1

- Configuração inicial
- PostgreSQL
- Prisma ORM
- Migrations

### Fase 2

- CRUD de Usuários
- CRUD de Posts
- CRUD de Comentários
- Regra de negócios

### Fase 3

- Controle de permissões
- Sistema de autenticação
- JWT
- Bcrypt

### Fase 4

- Testes automatizados
- Validações
- Tratamento global de erros

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de estudo de backend moderno.
