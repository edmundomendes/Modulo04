<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
  Desafio 4-7: Estruturando estudantes
</h2>
<br>  
<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

## :rocket: Sobre o desafio

Esse é o primeiro desafio de uma sequência que irá implementar o banco de dados na aplicação desenvolvida no módulo anterior.

Nessa etapa, você deve refatorar o código da sua aplicação e preparar o seu ambiente para trabalhar com banco de dados.

### Criando Banco de dados

Utilizando a ferramenta postbird, crie **através de queries** um banco de dados chamado **my_teacher** e uma tabela com o nome de **teachers** que possua os seguintes campos:

- id: INT e PRIMARY KEY;
- avatar_url: TEXT e NOT NULL;
- name: TEXT e NOT NULL;
- birth_date: TIMESTAMP e NOT NULL;
- education_level: TEXT e NOT NULL;
- class_type: TEXT e NOT NULL;
- subjects_taught: TEXT e NOT NULL;
- created_at: TIMESTAMP e NOT NULL.

_Dicas: Para criar a tabela a partir de uma query, basta selecionar o banco no postbird e na aba **Query** rodar o comando **CREATE TABLE** especificando o nome da tabela e em seguida as colunas, por exemplo:_

```sql
CREATE TABLE TEST(
   ID INT PRIMARY KEY,
   NAME TEXT NOT NULL
);
```

_Para mais informações, dê uma olhada nesse [link](https://www.postgresqltutorial.com/postgresql-create-table/)_

### Refatorando o Código

Após preparar o banco de dados, é preciso refatorar a sua aplicação para utilizá-lo. Você deve fazer as seguintes alterações:

- Utilizar a nova estrutura de pastas (src, app e lib);
- Corrija nos arquivos os caminhos relativos que precisar;
- Utilize nos arquivos da pasta `controllers` a nova forma de exportar.

### Configurando BD na aplicação

Por fim, instale a biblioteca `pg` e crie o arquivo de configuração do seu banco de dados (em uma pasta **config**) utilizando o `Pool`. Não esqueça de passar os dados necessários (**user, password, host, port e database**) na hora de instanciar (**new**) o Pool.


## :gear: Como usar
```bash
# Clone este repositório
$ git clone https://github.com/edmundomendes/Modulo04.git

# Va até o repositório
$ cd Modulo04

# Instale as dependências do projeto
$ npm install

# Instale as dependências do projeto de desenvolvimento
$ npm install browser-sync npm-run-all -D   

# Fazer o PUT funcionar no form do edit pois o HTML 5 só aceita os metódos POST E GET
$ npm install method-override

# Rode o servidor
$ npm start

# Acesse na web
http://localhost:3000

# Para acessar a página de criação do cadastro
http://localhost:3000/teachers/create

# Para acessar a página de amostra do cadastro
http://localhost:3000/teachers/:id

# Para acessar a página de edição do cadastro
http://localhost:3000/teachers/:id/edit
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito por Edmundo Mendes | [linkedin](https://www.linkedin.com/in/edmundo-mendes/) - com a [Rocketseat](https://rocketseat.com.br) :rocket: | [Entre na comunidade da rocketseat!](https://discordapp.com/invite/gCRAFhc) :purple_heart: