
function mudarPagina(idPagina) {
    // Seleciona todas as seções de página do site
    const secoes = document.querySelectorAll('.page-section');
    secoes.forEach(secao => {
        secao.classList.remove('active-page');
    });

    // Seleciona todos os links de navegação do menu
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Ativa a seção correspondente e destaca o botão no menu superior
    document.getElementById(idPagina).classList.add('active-page');
    document.getElementById('nav-' + idPagina).classList.add('active');
}

/**
 * 2. SIMULAÇÃO DE COMPRA NO COMÉRCIO SOCIAL
 * Executada ao clicar no botão de adicionar ao carrinho.
 * @param {string} nomeProduto - Nome do item agrícola selecionado
 */
function comprarProduto(nomeProduto) {
    alert(`🛒 Excelente escolha! O produto "${nomeProduto}" foi adicionado ao seu carrinho com sucesso.`);
}

/**
 * 3. PROCESSAMENTO DO FORMULÁRIO DE USUÁRIO
 * Captura os dados de cadastro de produtores ou compradores.
 */
function salvarUsuario(event) {
    // Evita que a página seja recarregada ao enviar o formulário
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    
    alert(`Sucesso! Perfil de ${tipo} (${nome}) foi cadastrado com sucesso na nossa comunidade agrícola.`);
    
    // Limpa os campos do formulário após o sucesso
    document.getElementById('formUsuario').reset();
}

/**
 * 4. PROCESSAMENTO DO FORMULÁRIO DE CONTATO
 * Envia a mensagem do usuário para a administração do projeto social.
 */
function enviarContato(event) {
    event.preventDefault();
    
    alert("Obrigado pela sua mensagem! Nossa equipe administrativa entrará em contato em até 24 horas.");
    
    document.getElementById('formContato').reset();
}

/**
 * 5. ASSISTENTE DE INTELIGÊNCIA ARTIFICIAL (CHATBOT)
 * Analisa as palavras-chave digitadas e gera respostas dinâmicas no chat.
 */
function perguntarIA() {
    const inputField = document.getElementById('iaInput');
    const pergunta = inputField.value.trim().toLowerCase();
    
    // Se o campo estiver vazio, não faz nada
    if (!pergunta) return;

    const chatBox = document.getElementById('chatIARespostas');