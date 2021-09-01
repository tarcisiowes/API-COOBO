# API-
# Desafio Técnico Spendfy - 2021 - COOBO: API REST

## Back-end

### API

Esta API REST tem a capacidade de:

- Cadastrar, Editar, Listar e Excluir dados cadastrados em um banco de dados PostgreSQL.
  
  **Importante:Rest API criada com o intuito de continuar no processo seletivo para a vaga de Desenvolvedor na empresa COOBO.!**

Para utilizar esta API, instalar com Npm Install ou Yarn as seguintes bibliotecas:
    "cors";
    "express";
    "knex"; 
    "pg"; 
    "nodemon"; 
Podendo iniciala com npm run dev.

**Importante:Rest API criada com node.js na versão 14.17.5 !**

### Banco de dados
*** Querys disponiveis no arquivo "Schema.sql" !**
# tabela ("Documents")

| Coluna     | Tipo         | NOT NULL? | PK? | REFERENCES | DEFAULT   |
| --------   | --------     | --------- | --- | ---------- | -------   |
| id         | serial       | Sim       | Sim |            |           |
| kbSize     | numeric      | Não       |     |            |           |
| name       | text         | Sim       |     |            |           |
| content    | text         | Sim       |     |            |           |
| createdAt  | text         | Sim       |     |            |           |
| deleteAt   | text         | Não       |     |            |           |
| deleted    | boolean      | Não       |     |            | false     |

  *** Os campos "Id", "kbSize", "createdAt", "deleteAt", "deleted" são preenchidos automaticamente!**

  ## Endpoints

  #### `POST` `/cadastrarContatos`
 Endpoint que permite cadastrar um novo dado. Recebe os dados através de objeto JSON no corpo da requisição, no formato do exemplo abaixo.

  ```json=
{
	"name":"NomeDoArquivo",
	"content":"Dados do arquivo convertidos e salvos no banco em base64"
}
```

-Ambos campos são obrigatórios;

  #### `GET` `/documents`
Endpoint que permite fazer a listagem de todos os dados registrados, não deverá receber conteúdo no corpo da requisição.

  #### `GET` `/documents/:id`
Endpoint que permite buscar um registro pelo id:

 #### `DELETE` `/documents/:id`
Endpoint para excluir um registro existente. Não deverá receber conteúdo no corpo da requisição, mas deverá receber o ID do registro através de parâmetro de rota (params). Através do ID o registro será buscado no banco de dados e excluído apenas logicamente. A data do delete será registrada no banco de dados.

****Foi vista a necessidade da mudança do metodo neste endPoint de exclusão, devido a remoção ser feita apenas logicamente, então metodo PATCH é utilizado no lugar do metodo DELETE**


  #### `GET` `/weekday-after`
Endpoint para com objetivo de retornar na API qual dia da semana será daqui a uma "quantidade" de dias, inciando a contagem em um dia da semana "escolhido". Não deverá receber conteúdo no corpo da requisição, mas deverá receber o o dia escolhido como "startday" e a quantidade de dias como "amountofdays" através de parâmetro de rota (params) no formato do exemplo abaixo. 

  ```
http://localhost:3000/weekday-after?startday=domingo&amountofdays=1

A resposta será "segunda"

```

