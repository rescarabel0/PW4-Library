# LYBRARY

## PROGRAMAÇÃO WEB IV

São três entidades no contexto de uma livraria: _Autor, Livro e Usuário_ (Cliente).

Sempre ao iniciar a aplicação, o banco de dados será recriado automaticamente.

---

Para iniciar a aplicação, primeiro instale as dependências do _Node_:

```sh
    npm install
```

e então:

```sh
    npm start
```

</br>
</br>

## REQUISIÇÕES **GET**:

- [/author](https://localhost:5050/author)

> BUSCA TODOS OS AUTORES

Resposta:

```json
[
  {
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2,
    "name": "Jane Doe"
  }
]
```

---

- [/book](https://localhost:5050/book)

> BUSCA TODOS OS LIVROS

Resposta:

```json
[
  {
    "id": 1,
    "title": "Harry Potter e a Predra Filosofal",
    "date": "23-11-2001"
  },
  {
    "id": 2,
    "name": "O Senhor dos Anéis: A Sociedade do Anel",
    "date": "29-07-1954"
  }
]
```

---

- [/author/:id](https://localhost:5050/author/:id)

> BUSCA AUTOR PELO ID

Resposta:

```json
{
  "id": 1,
  "name": "John Doe"
}
```

---

- [/book/:id](https://localhost:5050/book/:id)

> BUSCA LIVRO PELO ID

Resposta:

```json
{
  "id": 2,
  "name": "O Senhor dos Anéis: A Sociedade do Anel",
  "date": "29-07-1954"
}
```

---

</br>
</br>

## REQUISIÇÕES **POST**:

- [/user](https://localhost:5050/user)

> SALVAR NOVO USUÁRIO</br>

Requisição:

```json
{
  "login": "login",
  "password": "password"
}
```

---

- [/author](https://localhost:5050/author)

> SALVAR NOVO AUTOR

Requisição:

```json
{
  "name": "John Doe"
}
```

---

- [/book](https://localhost:5050/book)

> SALVAR NOVO LIVRO

Requisição:

```json
{
  "title": "title",
  "date": "01-01-2001",
  "author": "John Doe"
}
```

---

</br>
</br>

## REQUISIÇÕES **PUT**:

- [/book/:id](https://localhost:5050/book/:id)

> EDITA LIVRO POR ID

Requisição:

```json
{
  "title": "novo título",
  "date": "02-01-2001"
}
```

---

- [/author/:id](https://localhost:5050/author/:id)

> EDITA AUTOR POR ID

Requisição:

```json
{
  "name": "novo nome"
}
```

---

</br>
</br>

## REQUISIÇÕES **DELETE**:

- [/book/:id](https://localhost:5050/book/:id)

> EXCLUI LIVRO POR ID

---

- [/author/:id](https://localhost:5050/autor/:id)

> EXCLUI AUTOR POR ID
