(readme ainda não está completo, estará completo e com todas informações assim que eu concluir o serviço)

FALTA:
- Otimizar o README.txt para ter todas as informações e ensinando de forma simples à editar os textos
- Entregar o projeto completo

=========================================

INSTRUÇÕES PARA UTILIZAÇÃO DO SITE

==========================================
ESCALA DAS IMAGENS:

- Ícone = 256x256
- Logo = 128x128
- Carrossel = 1920x1080
- Serviços e outras imagens = tanto faz

==========================================
ALTERAÇÃO DA LOGO:

- Mude o arquivo localizado em "/static/img/logo.png" para a nova logo, utilizando o mesmo nome de arquivo.
Você também vai precisar de um arquivo ".ico" da sua Logo:
  - você pode converter o seu ".png" para um arquivo ".ico" válido neste site:
    - https://convertico.com/
Quando tiver seu arquivo ".ico" Mude o arquivo "/static/img/favicon.ico" para a nova logo, utilizando o mesmo nome de arquivo.

==========================================
PERSONALIZAÇÃO DE TEXTOS/IMAGENS:

  - Você precisa abrir o arquivo "<nome>.json" e se você perceber, nesse arquivo existem diversas palavras dentro de aspas, cada palavra é uma configuração, como por exemplo "sobre" (no arquivo "messages.json") é a configuração da página "/sobre" e assim por diante.
  - EM HIPÓTESE ALGUMA ALTERE QUALQUER COISA NO ARQUIVO "package.json"
  - EM HIPÓTESE ALGUMA REMOVA CHAVES ( {} ), COCHETES ( [] ) OU ASPAS ( "" ) NESSE ARQUIVO, ELE É UM ARQUIVO DE CONFIGURAÇÃO DO SITE!!!
  
  PARA PERSONALIZAR IMAGENS:
    - Altere na configuração de imagem que você quer alterar o parâmetro "url", você vai perceber que ele parece com o caminhon que eu escrevo para você achar as imagens (ex. "/static/img/logo.png"), altere somente o nome da imagem, como no exemplo "logo.png" (e extensão dela se for necessário)

  PARA PERSONALIZAR TEXTOS:
    - Altere na configuração de texto que você quer alterar o conteúdo dele, simplesmente isso, alterando o texto dele ele irá ser alterado no site.

  PARA ALTERAR O NÚMERO DE TELEFONE:
    - Edite o campo "number" no arquivo "config.json"

==========================================
PERSONALIZAÇÃO DE IMAGENS GERAIS:

CARROSSEL:
- Mude os arquivos "/static/img/carousel/carousel-image-<numero>.jpg" para sua imagem desejada, utilizando o mesmo nome de arquivo ou alterando a url da imagem no arquivo "messages.json".

IMAGENS DE SERVIÇOS:
- Mude os arquivos "/static/img/services/nome-do-serviço.jpg" para a sua imagem desejada, utilizando o mesmo nome no arquivo ou alterando a url da imagem no arquivo "services.json".

IMAGENS DE OUTRAS PÁGINAS:
- Mude os arquivos "/static/img/services/nome" para sua imagem desejada, utilizando o mesmo nome no arquivo ou alterando a url da imagem no arquivo "messages.json".

