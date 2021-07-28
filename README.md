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

Nessa etapa você deve reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.

### Estrutura

Reaproveite o código obedecendo os seguintes padrões:

- Crie um arquivo `students.js` com a mesma estrutura que o `teachers.js`. Insira ambos os arquivos dentro uma pasta `controllers`;
- Crie um array `students` vazio dentro do arquivo `json`;
- Crie uma pasta `students` com a mesma estrutura de views que os professores;
- Crie as rotas dos estudantes seguindo a mesma estrutura dos professores.
### Menu Ativo

Crie um arquivo `scripts.js` e implemente a lógica do menu ativo utilizando o `location` e o `includes` da string. Além disso, implemente um botão de cadastro nas páginas de listagem de professores e estudantes.

### Formulário

Faça os ajustes de professores para estudantes no formulário de criação. Além disso, remova os campos:

- Grau de escolaridade;
- Tipo de aula;
- Acompanhamento;
- Desde.

e adicione os campos:

- Email: campo do tipo `email`;
- Ano escolar: campo do tipo `select` com todas as opções de anos escolares entre 5º ano do ensino fundamental e 3º ano do ensino médio;
- Carga horária semanal: campo do tipo `number` que indica a quantidade de horas de aulas particulares que o aluno irá ter por semana.

### Apresentação

Faça os ajustes de professores para estudantes no método `post` do arquivo `students.js`. Além disso, implemente a nova estratégia de `id` (evitar repetição).

### Edição

Faça os ajustes de professores para estudantes na página de edição dos dados de um estudante. Implemente o campo `Aniverśario` onde é apresentado o dia e o mês do aniversário do estudante. Além disso, altere tanto no `edit.njk` dos professores quanto no dos alunos a `url` da seção de avatar. Utilize o campo `avatar_url` cadastrado em vez da api do unsplash.

### Remoção

Crie um arquivo `confirm.njk` e importe ele no seu arquivo `edit.njk`. Esse arquivo deve ser responsável por escutar o evento (`addEventListener`) de submit do form de remoção e solicitar pela confirmação do usuário (`confirm`). Caso o usuário cancele a remoção, deve-se cancelar o form (método `preventDefault`).

### Listagem

Faça os ajustes de professores para estudantes na página de listagem dos dados de um estudante. Remova a coluna de `Acompanhamento` e adicione as de `Email` e `Ano escolar`.

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