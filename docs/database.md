# Guide to install and run PostgreSQL

## Install PostgreSQL (on Linux)

```shell
sudo apt install postgresql
```

Note:

- If you are not using Linux, check https://www.postgresql.org/ to find instructions for your operating system
- If you prefer, and available, you can use a newer LTS version of PostgreSQL

## Access PostgreSQL with the default user

```shell
sudo -u postgres psql
```

## Create your own user for the API (recommended)

Do not use the **postgres** user in production.

```sql
CREATE USER usuario WITH PASSWORD 'senha';
```

## Grant the user permission to create databases

```sql
ALTER USER usuario CREATEDB;
```

## Create the database

```sql
CREATE DATABASE nome_do_banco_de_dados OWNER usuario;
```
