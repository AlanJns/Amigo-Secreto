//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista exibida
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nome = inputAmigo.value.trim();

  // Validação: verifica se o campo está vazio
  if (nome === '') {
    alert("Por favor, insira um nome.");
    return;
  }

  // Verifica se o nome já foi adicionado
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  // Atualiza o array com o novo nome
  amigos.push(nome);

  // Limpa o campo de entrada
  inputAmigo.value = '';

  // Atualiza a lista de amigos exibida na tela
  atualizarLista();
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
  // Seleciona o elemento da lista de amigos
  const listaAmigos = document.getElementById('listaAmigos');

   // Exibe a lista (caso ela tenha sido ocultada no sorteio anterior)
   listaAmigos.style.display = 'block';

  // Limpa a lista existente para evitar duplicação
  listaAmigos.innerHTML = '';

  // Percorre o array e adiciona cada amigo como um <li>
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

// Função para sortear aleatoriamente um amigo do array
function sortearAmigo() {
    // Verifica se há pelo menos um amigo na lista
    if (amigos.length === 0) {
      alert("Não há mais nomes a serem sorteados.");
      return;
    }
  
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Remove o amigo sorteado do array para que não seja sorteado novamente
    amigos.splice(indiceAleatorio, 1);
  
    // Atualiza a lista de amigos exibida na tela
    atualizarLista();
  
    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
  
    // Oculta a lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
  
    // Verifica se após a remoção não há mais nomes para sortear
    if (amigos.length === 0) {
      alert("Todos os amigos já foram sorteados.");
    }
  }
