# API de Loja de Acessórios 💍

Projeto desenvolvido para a disciplina de Gerência de configuração da **Universidade Federal do Ceará (UFC - Campus Quixadá)**.

Trata-se de uma API RESTful para gerenciamento de um catálogo de acessórios (joias), permitindo o cadastro, listagem e remoção de itens. O projeto utiliza **Docker** para orquestração de containers e segue princípios de **DDD (Domain-Driven Design)**.

## 🚀 Tecnologias Utilizadas

- **Node.js** & **TypeScript**: Linguagem e runtime.
- **Express**: Framework web.
- **PostgreSQL**: Banco de dados relacional.
- **Docker** & **Docker Compose**: Containerização e orquestração do ambiente.
- **PG (node-postgres)**: Driver de conexão com o banco.

## 📂 Estrutura do Projeto (DDD)

O código foi organizado separando as regras de negócio da infraestrutura:

- **`src/domain`**: Contém a entidade `Acessorio` e a interface do repositório. Aqui residem as regras de negócio (ex: validação de preço, tipos de materiais permitidos).
- **`src/infra`**: Contém a implementação do servidor `Express` e a conexão com o banco de dados (`database.ts`).

## 🛠️ Como Rodar o Projeto

Pré-requisito: Ter o **Docker** e o **Docker Compose** instalados.

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/NOME-DO-REPO.git](https://github.com/SEU-USUARIO/NOME-DO-REPO.git)
   cd NOME-DO-REPO
