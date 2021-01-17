# stunning-adventure (deslumbrante-aventura)

* basic api to use as example to run automated tests using postman - Software's tests UFS 2020.1

* Api simples para utilizar como exemplo nos testes automatizados utilizando o postman - Teste de Software UF 2020.1

# Arquitetura do Postman (Postman Architecture)

- Eco-Sistema para criação e utilização dos testes de endpoint no Postman
  ![postman_architecture](https://github.com/chicofariasneto/stunning-adventure/blob/main/src/assets/postman_architecture.png)

- Diferentes formas de executar os testes utilizando as coleções
  ![postman_architecture](https://github.com/chicofariasneto/stunning-adventure/blob/main/src/assets/postman_architecture2.png)
  
# Instalação do Postman/Configurações necessárias (How to install postman/Necessary setup)

- A instalação do postman é bem simples, basta realizar o download do arquivo e seguir os passos recomendados pelo instalador;
    - [64-bits](https://dl.pstmn.io/download/latest/win64) e [32-bits](https://dl.pstmn.io/download/latest/win32)
    
- Para utilizar o collection já criado por nós basta fazer o [download](https://github.com/chicofariasneto/stunning-adventure/blob/main/src/assets/API%20Adventurers%20-%20Software%20Test.postman_collection.json) da collection e importar essa collection no postman;

- Para executar a API localmente? necessário possuir o nodeJS instalado, basta fazer o clone deste projeto público;
  - executar no terminal ```yarn install```;
  - e executar no terminal o projeto com ```node src/index.js```;
  
# Exemplos Práticos de Uso (Practicals examples of use cases)

- Com a collection importada e a aplicação rodando basta executar a collection e verificar todos os testes já desenvolvidos;