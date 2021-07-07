<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
 Desafio 4-3: Formulário e Rota de cadastro do Professor
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

Nessa etapa você deve criar um formulário de cadastro do professor e uma rota do tipo post que irá realizar as validações e salvar os dados enviados.
##### Requisitos:
- [x] Avatar url: campo do tipo url para cadastrar o caminho da imagem do professor;
- [x] Nome completo: campo do tipo text;
- [x] Data de nascimento: campo do tipo date;
- [x] Grau de escolaridade: campo do tipo select (documentação do select) que deve conter as opções Ensino Médio Completo, Ensino Superior Completo, Mestrado e Doutorado;
- [x] Tipo de aula: campo do tipo radio que deve conter as opções Presencial e À distância;
- [x] Área de atuação: campo do tipo text que deve conter as informações das matérias que o          professor pode lecionar.

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

# Para acessar  a página de criação do cadastro
http://localhost:3000/teachers/create

```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito por Edmundo Mendes | [linkedin](https://www.linkedin.com/in/edmundo-mendes/) - com a [Rocketseat](https://rocketseat.com.br) :rocket: | [Entre na comunidade da rocketseat!](https://discordapp.com/invite/gCRAFhc) :purple_heart: