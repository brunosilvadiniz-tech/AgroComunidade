function mudarAba(idAlvo) {
  // 1. Localiza e oculta todas as páginas
  const todasAbas = document.querySelectorAll('.aba-conteudo');
  todasAbas.forEach(aba => {
    aba.classList.remove('active');
  });

  // 2. Remove o destaque visual dos botões do menu
  const itensMenu = document.querySelectorAll('nav a');
  itensMenu.forEach(item => {
    item.classList.remove('active');
  });

  // 3. Exibe a página clicada e adiciona destaque ao link correspondente
  document.getElementById(idAlvo).classList.add('active');
  document.getElementById('menu-' + idAlvo).classList.add('active');

  // 4. Executa uma rolagem suave até o topo da tela
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * INTERATIVIDADE DE ENVIO DE FORMULÁRIO
 * Processa localmente o formulário de contato com respostas personalizadas.
 */
function enviarDados(event) {
  // Impede o comportamento padrão de atualização de página
  event.preventDefault(); 
  
  // Resgata os dados imputados pelo usuário
  const nomeCompleto = document.getElementById('nome').value;
  const emailFornecido = document.getElementById('email').value;

  // Limpa os dados preenchidos no formulário
  document.getElementById('meuFormulario').reset();
}
