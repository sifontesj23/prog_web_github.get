# prog_web_github.get
Repositorio criado para iniciar os estudos de Git e GitHub - IFPR - Cascavel.
rogramação Web2
Fernanda Rodrigues da Rosa
Passo 1

abra um terminal com o diretório do arquivo digite os comandos
npm instalar
npm i -g fio
Abra outro terminal com o diretório do arquivo e digite o comando
docker run -p 27017:27017 mongo
Volte ao primeiro terminal e digite o comando
desenvolvedor de fios
Passo 2
Abra o Insomnia em seu computador e crie um novo espaço de trabalho ou utilize um existente.
Clique em "Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método POST na barra de seleção de método.
No campo de URL, insira
https://localhost:3000/categories
Na seção "Body", selecione o tipo de corpo "JSON".
No corpo da requisição, insira os campos necessários para criar uma nova categoria. Por exemplo: {
"icon": "🍔",
"name": "comida"
}
Clique no botão "Send" para enviar a requisição POST e criar uma nova categoria. Verifique a resposta para confirmar que a categoria foi criada com sucesso. Clique novamente em "
Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método GET na barra de seleção de método.
No campo de URL, insira
https://localhost:3000/categories
Clique no botão "Send" para enviar a requisição GET e verifique se as categorias estão listadas corretamente.
Passo 3
Clique novamente em "Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método POST na barra de seleção de método.
No campo de URL, insira
https://localhost:3000/products Na seção "Body", selecione o tipo de corpo Multipart Form
Clique no botão "Add Field" para adicionar os campos do Multipart um por um. Insira os seguintes campos:
name: Insira o nome do produto
descrição: Insira a descrição do produto.
price: Insira o preço do produto
categoria: Insira o ID da categoria tratada anteriormente, que consta no get de categorias.
imagem: Selecione o tipo de campo "Arquivo" e escolha o arquivo de imagem para enviar.
Clique no botão "Send" para enviar a requisição POST. Verifique a resposta para confirmar que foi criado com sucesso.
Crie uma nova requisição GET como feito anteriormente.
No campo de URL, insira novamente a forma Multipast Form
https://localhost:300/products
Clique no botão "Send" para enviar a requisição GET e obter a lista de produtos
Passo 4
Retorne ao terminal com o diretório do projeto e digite o comando npm multer
