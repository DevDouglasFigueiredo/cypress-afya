#language: pt

Como um usuario do google
Quero ser capaz de realizar uma pesquisa
Para encontrar o que estou buscando e acessar rapidamente o conteúdo desejado.

Cenário: Realizar pesquisa no google e acessar o conteudo no site Wikipedia
    Dado que o usuário acessa a página do Google
    E digita "Quality Assurance" no campo de pesquisa
    Quando o usuário pressiona Enter
    Então ele deve visualizar os resultados da pesquisa
    E clicar no link do site da Wikipedia
