# 🏠 Abrigo Conecta - API Backend

## 📌 Ideia do Projeto

O **Abrigo Conecta** é uma API desenvolvida para auxiliar na organização e gestão de abrigos em situações de emergência, como enchentes.  
A aplicação permite cadastrar, visualizar, atualizar e remover informações sobre abrigos disponíveis, facilitando o controle de vagas e o acesso a dados importantes.

---

## ⚠️ Problema Escolhido

Durante situações de desastre, como enchentes, há uma grande dificuldade em:

- Centralizar informações sobre abrigos disponíveis  
- Saber quantas vagas ainda existem em cada local  
- Atualizar rapidamente o status dos abrigos  
- Garantir que as informações estejam acessíveis de forma simples  

Isso pode causar desorganização e dificultar o atendimento às pessoas afetadas.

---

## 💡 Solução Proposta

A solução foi criar uma **API RESTful** que permite:

- 📥 Cadastrar novos abrigos  
- 📋 Listar todos os abrigos cadastrados  
- 🔍 Buscar um abrigo específico por ID  
- ✏️ Atualizar informações como vagas disponíveis e status  
- 🗑️ Remover abrigos do sistema  

Com isso, é possível manter um controle simples, rápido e eficiente dos abrigos disponíveis.

---

## 🏗️ Estrutura da Solução

### 🔧 Tecnologias Utilizadas

- Node.js  
- Express  
- SQLite  
- Postman (para testes da API)

---

## 📂 Estrutura do Projeto

```
BACKEND/
│
├── node_modules/
├── database.db
├── database.js
├── server.js
├── package.json
└── package-lock.json
```

---

## 🔗 Endpoints da API

| Método | Rota                    | Descrição                              |
|--------|-------------------------|----------------------------------------|
| GET    | /infoAbrigos           | Lista todos os abrigos                 |
| GET    | /infoAbrigos/:id       | Retorna um abrigo específico           |
| POST   | /infoAbrigos           | Cadastra um novo abrigo                |
| PUT    | /infoAbrigos/:id       | Atualiza vagas e status de um abrigo   |
| DELETE | /infoAbrigos/:id       | Remove um abrigo                       |

---

## 📥 Exemplo de Requisição (POST)

```json
{
  "nome_local": "Abrigo Escola Central",
  "endereco": "Rua Exemplo, 123",
  "capacidade_total": 200,
  "vagas_disponiveis": 150,
  "status": "Disponível",
  "telefone": "(51) 99999-0000"
}
```

---

## 📤 Exemplo de Resposta (GET)

```json
{
  "id": 1,
  "nome_local": "Abrigo Escola Central",
  "endereco": "Rua Exemplo, 123",
  "capacidade_total": 200,
  "vagas_disponiveis": 150,
  "status": "Disponível",
  "telefone": "(51) 99999-0000"
}
```

---

## 🚀 Como Executar o Projeto

1. Instalar dependências:
```
npm install
```

2. Rodar o servidor:
```
node server.js
```

ou

```
nodemon server.js
```

3. Acessar no navegador:
```
http://localhost:3000
```

---

## 🧪 Testes

As rotas foram testadas utilizando o Postman, garantindo o funcionamento completo do CRUD:

- Criação de dados  
- Leitura (lista e individual)  
- Atualização  
- Exclusão  

---

## 📌 Considerações Finais

Este projeto demonstra a construção de uma API completa com operações CRUD, integração com banco de dados e organização de rotas, sendo uma base sólida para aplicações reais e evolução para projetos maiores.
