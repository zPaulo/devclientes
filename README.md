# devclientes

Projeto para gerenciamento de clientes, dividido em duas partes principais: **backend** e **frontend**.

## Estrutura do Projeto

```
devclientes/
├── backend/   # API, banco de dados, autenticação, etc.
├── frontend/  # Interface web para interação com o sistema
```

## Backend

- Node.js, Express, Prisma (ORM)
- Gerenciamento de clientes, autenticação, integração com banco de dados
- Arquivo `.env` para variáveis de ambiente (não versionado)
- Instale as dependências com:
  ```bash
  cd backend
  npm install
  ```
- Para rodar o backend:
  ```bash
  npm run dev
  ```

## Frontend

- Framework moderno (React, Vue ou outro)
- Interface amigável para cadastro, edição e visualização de clientes
- Instale as dependências com:
  ```bash
  cd frontend
  npm install
  ```
- Para rodar o frontend:
  ```bash
  npm start
  ```

## Como começar

1. Clone o repositório
2. Instale as dependências em cada pasta (`backend` e `frontend`)
3. Configure o arquivo `.env` no backend
4. Execute ambos os servidores

## Contribuição

Sinta-se livre para abrir issues e pull requests!

---

Feito com 💻 por Paulo Arruda