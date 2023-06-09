# Programação Web2
# Jesus Sifontes

<h1>Passo 1</h1>
<br>
abra um terminal com o diretorio do arquivo digite os comandos
<ul>
<li>npm install</li>
<li>npm i -g yarn</li>
Abra outro terminal com o diretorio do arquivo e digite o comando 
<li>docker run -p 27017:27017 mongo</li>
Volte ao primeiro terminal e digite o comando
<li>yarn dev</li>
 </ul>
<h1>Passo 2</h1>
 Abra o Insomnia em seu computador e crie um novo espaço de trabalho ou utilize um existente.
<br>
 Clique em "Create" e selecione "New Request" para criar uma nova requisição.
<br>
Selecione o método POST na barra de seleção de método.
<br>
No campo de URL, insira
<br>
<strong>https://localhost:3000/categories</strong>
<br>
Na seção "Body", selecione o tipo de corpo "JSON".
<br>
No corpo da requisição, insira os campos necessários para criar uma nova categoria. Por exemplo:
<strong>{
  <br>
  "icon": "🍔",
  <br>
  "name": "comida"
  <br>
}</strong>
<br>
Clique no botão "Send" para enviar a requisição POST e criar uma nova categoria. Verifique a resposta para confirmar que a categoria foi criada com sucesso.
<br>
Clique novamente em "Create" e selecione "New Request" para criar uma nova requisição.
<br>
Selecione o método GET na barra de seleção de método.
<br>
 No campo de URL, insira
  <br>
<strong>https://localhost:3000/categories</strong>
<br>
Clique no botão "Send" para enviar a requisição GET e verifique se as categorias estão listadas corretamente. 
<h1>Passo 3</h1>
Clique novamente em "Create" e selecione "New Request" para criar uma nova requisição.
<br>
Selecione o método POST na barra de seleção de método.
<br>
No campo de URL, insira
<br>
<strong>https://localhost:3000/products</strong>
Na seção "Body", selecione o tipo de corpo Multipart Form
<br>
Clique no botão "Add Field" para adicionar os campos do Multipart um por um. Insira os seguintes campos:
<br>
<strong>
name: Insira o nome do produto
<br>
descrição: Insira a descrição do produto.
<br>
price: Insira o preço do produto
<br>
categoria: Insira o ID da categoria obtida anteriormente, que consta no get de categories.
<br>
imagem: Selecione o tipo de campo "Arquivo" e escolha o arquivo de imagem para enviar.
<br>
</strong>
Clique no botão "Send" para enviar a requisição POST. Verifique a resposta para confirmar que foi criado com sucesso.
<br>
Crie uma nova requisição GET como feito anteriormente.
<br>
No campo de URL, insira novamente a forma <strong>Multipast Form</strong>
<br>
<strong>https://localhost:300/products</strong>
<br>
Clique no botão "Send" para enviar a requisição GET e obter a lista de produtos
<h1>Passo 4</h1>
Retorne ao terminal com o diretorio do projeto e digite o comando <strong>npm multer</strong>
  

  
