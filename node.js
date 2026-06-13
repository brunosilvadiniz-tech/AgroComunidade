/**
 * NAVEGAÇÃO ENTRE ABAS INTERATIVAS (SPA)
 * Troca o conteúdo dinamicamente sem recarregar a visualização do CodePen.
 */
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

  // 3. Exibe a página clicada e adiciona destaque ao link correspondente (com checagem de segurança)
  const abaAlvo = document.getElementById(idAlvo);
  const menuAlvo = document.getElementById('menu-' + idAlvo);

  if (abaAlvo) {
    abaAlvo.classList.add('active');
  } else {
    console.error(Erro: A página com o ID "${idAlvo}" não foi encontrada no HTML.);
  }

  if (menuAlvo) {
    menuAlvo.classList.add('active');
  }

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
  
  // Resgata os elementos do HTML com segurança
  const campoNome = document.getElementById('nome');
  const campoEmail = document.getElementById('email');
  const formulario = document.getElementById('meuFormulario');

  // Verifica se os campos realmente existem antes de pegar o valor (.value)
  if (campoNome && campoEmail) {
    const nomeCompleto = campoNome.value;
    const emailFornecido = campoEmail.value;

    // Renderiza caixa de feedback customizada em tela
    alert(Obrigado pelo contato, ${nomeCompleto}!\nSeus dados foram validados com sucesso.\nUma resposta simulada foi direcionada para o e-mail: ${emailFornecido}.);
  }

  // Limpa os dados preenchidos no formulário se ele existir
  if (formulario) {
    formulario.reset();
  }
}
