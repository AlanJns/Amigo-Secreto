<h1 align="center">Amigo Secreto</h1>

<p align="center">
  <img src="assets/amigo-secreto.png" alt="Logo do Amigo Secreto" width="300">
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge" alt="Status do Projeto">
  <img src="https://img.shields.io/github/stars/seu-usuario/amigo-secreto?style=social" alt="GitHub Stars">
</p>

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Possíveis Problemas e Soluções](#possíveis-problemas-e-soluções)
- [Contribuidores e Desenvolvedores](#contribuidores-e-desenvolvedores)
- [Licença](#licença)

## Descrição do Projeto

O **Amigo Secreto** é uma aplicação web simples que tem como objetivo fortalecer habilidades em lógica de programação.  
A aplicação permite:
- **Adicionar nomes:** O usuário insere o nome dos amigos em um campo de texto e os adiciona a uma lista. Nomes duplicados são impedidos.
- **Sortear amigo:** A aplicação sorteia aleatoriamente um dos nomes e remove o nome sorteado da lista, evitando que ele seja sorteado novamente.
- **Alertas:** São exibidos alertas para informar o usuário, por exemplo, quando o campo estiver vazio, se houver tentativa de duplicação ou quando todos os nomes já tiverem sido sorteados.

## Funcionalidades

- **Adicionar Amigo:**  
  Valida se o campo de entrada não está vazio e impede a adição de nomes duplicados.

- **Listagem Dinâmica:**  
  Exibe a lista de amigos adicionados, atualizando a interface conforme os nomes são inseridos e removidos.

- **Sorteio e Remoção:**  
  Realiza o sorteio aleatório de um nome, remove o nome sorteado do array e atualiza a lista exibida.

- **Ocultar Lista:**  
  Após o sorteio, a lista de amigos é ocultada para dar destaque ao resultado.

- **Alerta Final:**  
  Quando todos os nomes forem sorteados, um alerta informa que não há mais nomes disponíveis.

## Demonstração
- **Adicionar Amigo:** ![image](https://github.com/user-attachments/assets/f10993a0-c413-4a16-bb7f-fef7e2d52864)

  Impede a adição de nomes duplicados ![image](https://github.com/user-attachments/assets/662f7564-4805-4898-ad65-283d99050cea)

- **Listagem Dinâmica:** ![image](https://github.com/user-attachments/assets/6874e79b-9add-4a54-8a9c-b9e702da3ee1)

- **Sorteio, Remoção e Oculta a Lista:** ![image](https://github.com/user-attachments/assets/919fde79-031e-4ba1-b6b9-e6b1711918e0)

- **Alerta Final:** ![image](https://github.com/user-attachments/assets/ac7a81e7-e83d-48da-8507-62044a945b21)


## Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização e layout.
- **JavaScript:** Lógica de adição, atualização e sorteio dos nomes.

## Instalação e Execução

1. **Clone o Repositório:**

   
bash
   git clone https://github.com/AlanJns/amigo-secreto.git

Navegue até a Pasta do Projeto:

bash
Copiar
Editar
cd amigo-secreto
Abra o Projeto:

Abra o arquivo index.html no seu navegador (Chrome, Firefox, Edge, etc.).
Observação: Este projeto não necessita de servidor local, pois é uma aplicação estática.

Estrutura do Projeto
bash
Copiar
Editar
amigo-secreto/
├── assets/
│   ├── amigo-secreto.png       # Imagem/logo do projeto
│   └── demo.gif                # (Opcional) Gif de demonstração da aplicação
├── index.html                  # Estrutura HTML principal
├── style.css                   # Estilos da aplicação
└── app.js                      # Lógica JavaScript do projeto

Possíveis Problemas e Soluções

Campo vazio ou nome duplicado:
Se o usuário tentar adicionar um nome vazio ou já existente, um alerta será exibido.

Sorteio sem nomes:
Ao tentar sortear com a lista vazia, um alerta informa que não há amigos para sortear.

Interface não atualizada:
Caso os nomes sorteados apareçam novamente, verifique se o arquivo app.js está corretamente vinculado ao index.html e se não há erros no console do navegador.

## Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este projeto está sob a licença [MIT](LICENSE). Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
