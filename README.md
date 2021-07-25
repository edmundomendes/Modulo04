<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
 Desafio 4-5: HTTP: PUT e DELETE
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

Nessa etapa você irá implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.

##### Requisitos:
### PUT

Crie uma rota para receber os dados do formulário de edição e propagar no arquivo json. Lembre de sobrescrever o método POST do form para PUT (utilize a lib method-override). Dentro do arquivo teachers.js, crie um método update para buscar e retornar o professor a partir do id fornecido na rota. Faça a busca pelo professor a partir do id e atualize no arquivo json os dados que foram alterados (utilize o constructor Number para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).
### DELETE

Crie um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo json. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib method-override). Dentro do arquivo teachers.js, crie um método delete e gere um array com todos os professores, exceto o que deve ser removido (filter). Por fim, redirecione para a página de listagem dos professores.
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