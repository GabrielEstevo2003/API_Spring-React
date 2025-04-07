📚 Como rodar o projeto Full Stack - Cadastro de Alunos
Este projeto é composto por duas partes: o Front-End feito em React e o Back-End desenvolvido com Spring Boot. O objetivo é criar uma aplicação completa para cadastro e listagem de alunos.

⚙️ Requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados na sua máquina:

Node.js e NPM (para rodar o front-end)

Java JDK 17+

Uma IDE para Java (como IntelliJ IDEA ou Spring Tool Suite)

Maven (ou usar via IDE)

Um banco de dados MongoDB (local ou na nuvem, como MongoDB Atlas)

🖥️ Rodando o Front-End (React)
Através do terminal faça o seguinte:

  •  Navegue até a pasta do front-end:
     cd frontEndCadastro/cadastroalunos

  •  Instale as dependências:
     npm install
     
  •  Inicie a aplicação:
     npm start
     
Assim o front-end estará disponível em http://localhost:3000.

🚀 Rodando o Back-End (Spring Boot)
  •  Abra o projeto em sua IDE Java.

  •  Certifique-se de que as dependências do pom.xml estão atualizadas (use Maven > Reload).

  •  Configure o banco de dados no application.properties com a URL do MongoDB.

  •  Rode a classe principal CadastroAlunoApplication.

A API estará disponível em http://localhost:8080.

🔗 Conexão entre Front e Back
Para que tudo funcione corretamente:

  •  O backend precisa estar rodando para receber as requisições.

  •  O frontend consome a API em http://localhost:8080.

  •  O MongoDB precisa estar ativo e corretamente configurado no backend.

