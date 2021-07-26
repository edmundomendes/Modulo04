<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
  Desafio 4-6: Listagem de professores
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

Nessa etapa você deve listar todos os professores salvos no arquivo `json` e apresentá-los em formato de tabela.

##### Listagem

Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo `json`.
### Tabela

Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize `Nome completo`, `Acompanhamento` e `Ação` como cabeçalhos.

### Estilização

[x] A tabela deve ocupar todo o espaçamento do cartão;

[x] Os cabeçalhos e os valores devem estar centralizados;

[x] A imagem deve ser apresentada antes do nome. Deve ter formato circular e tamanho de 40px;

[x] O campo `Acompanhamento` deve apresentar as matérias lecionadas de forma separada (array, assim como na página de apresentação de dados de um professor).
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