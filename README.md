# API de Catálogo de Receitas

Uma API RESTful para gerenciamento de receitas culinárias, desenvolvida com **NestJS**, **TypeScript** e princípios de **Clean Architecture**.

## 🎯 Objetivo

Este projeto foi desenvolvido como parte de um teste prático para demonstrar conhecimentos em:

- Clean Architecture + DDD (Domain Driven Design)
- Separação de camadas (Use Cases, Repositories, Presenters)
- Desenvolvimento de APIs com NestJS
- TypeScript e boas práticas de código

## 📡 API Endpoints

### Criar Receita

```http
POST /recipes
Content-Type: application/json

{
  "title": "Bolo de Cenoura",
  "description": "Delicioso bolo de cenoura com cobertura de chocolate",
  "ingredients": ["cenoura", "açúcar", "farinha", "ovos"]
}
```

### Listar Receitas

```http
GET /recipes
```

### Buscar Receita por ID

```http
GET /recipes/{id}
```

## 🌐 Deploy e Testes Online

### Link de Produção

🔗 **https://api-catalogo-de-receitas.onrender.com**

> ⚠️ **Nota**: A aplicação está hospedada no Render (plano gratuito), que pode entrar em "sleep mode" após alguns minutos de inatividade. O primeiro acesso pode demorar alguns segundos para "acordar" o serviço.

### Documentação Swagger

📚 **https://api-catalogo-de-receitas.onrender.com/docs**

A documentação interativa permite testar todos os endpoints diretamente no navegador.

## 🛠️ Executando Localmente

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd api-catalogo-receitas
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run start:dev
```

5. **Acesse a aplicação**

- API: `http://localhost:3000`
- Documentação: `http://localhost:3000/docs`

## 🧪 Testes

Execute os testes unitários:

```bash
npm run test
```

Execute os testes com cobertura:

```bash
npm run test:cov
```

Execute os testes em modo watch:

```bash
npm run test:watch
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **NestJS** - Framework para Node.js
- **TypeScript** - Superset tipado do JavaScript
- **Swagger** - Documentação da API
- **Jest** - Framework de testes
- **UUID** - Geração de IDs únicos
