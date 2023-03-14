/* 
    OBJETIVO -quando clicamos no botão, temos que mostrar a imagem de fundo correspondente

    ALGORITMO
        1. dar um jeito de pegar o elemento HTML dos botões

        2. dar um jeito de identificar o clique do usuário no botão
        
        3. desmarcar o botão selecioado anterior
        
        4. marcar o botão clicado como se estivesse selecionado
        
        5. esconder a imagem de fundo anterior
        
        6. fazer aparecer a imagem  de fundo correspodente ao botão clicado 

*/

//         1. dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const listaImagens= document.querySelectorAll('.imagem');

//         2. dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => { 
    
    botao.addEventListener('click', () => {

        //         3. desmarcar o botão selecioado anterior
        desativarBotaoSelecionado();

        //         4. marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //         5. esconder a imagem de fundo anterior
        esconderImagemAtiva();

        //         6. fazer aparecer a imagem  de fundo correspodente ao botão clicado 
        mostrarImagemDeFundo(indice);
    })
});
function mostrarImagemDeFundo(indice) {
    listaImagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

