<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
 Desafio 4-4: Apresentação, edição e formatação dos dados de um professor
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

## ✍ Desafio criar o formulário e rota de cadastro do professor

Nessa etapa você deve criar duas rotas: uma para apresentar os dados do professor (show) e outra para a edição dos dados cadastrados (edit). Além disso, realize a formatação dos dados cadastrados para a correta exibição no HTML

##### Requisitos:
### Show

Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo teachers.js, crie um método show para buscar e retornar o professor a partir do id fornecido na rota. Os seguintes dados precisam ser formatados:

- [x] Idade: Crie um arquivo utils.js que exporta uma função chamada age. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- [x] Grau de escolaridade: crie uma função graduation no arquivo utils.js. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: Ensino Médio Completo para o valor medio do select);
- [x] Acompanhamento: Utilize o método split da string para gerar um array com as matérias que o professor leciona;
- [x] Desde: Utilize o constructor Intl e seus métodos para gerar uma data no formato dia/mes/ano.
### Edição

Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo teachers.js, crie um método edit para buscar e retornar o professor a partir do id fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo fields.njk). Por fim, crie uma função chamada date no arquivo utils.js. Essa função deve retornar a data no formato yyyy-mm-dd para a correta exibição no input do tipo date no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método slice da string).
##### Rota:
Crie um arquivo teachers.js na raiz do seu projeto e faça a validação de todos os campos utilizando keys e o constructor Object. Além disso, utilize o método writeFile da lib fs para gerar um arquivo json que irá conter um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), faça o redirecionamento para a página de listagem de professores.
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