
//PASSO 1 - PRECISAMOS CRIAR UMA VARIAVEL PARA TRABALHAR COM OS ITENS DA LISTA
const imagensDoCartao = document.querySelectorAll('.pokedev');

//PASSO 2 - IDENTIFICAR O EVENTO DE CLIQUE NA LISTA DE ITENS
imagensDoCartao.forEach((pokemon) => {
    pokemon.addEventListener('click', () => {

        //PASSO 3- REMOVER A CLASSE ABERTO DO CARTÃO QUE ESTÁ ABERTO
        const pokeZinho = document.querySelector('.aberto');
        pokeZinho.classList.remove('aberto');

        //PASSO 4 - AO CLICAR EM UM ITEM DA LISTA PEGAR O ID PARA SABER QUAL CARTÃO ABRIR
        const cartaPokeOpen = pokemon.attributes.id.value;
        const idDoCartaoClicado = 'cartao-' + cartaPokeOpen;
        const cartaoParaAbrir = document.getElementById(idDoCartaoClicado);
        cartaoParaAbrir.classList.add('aberto');

        //PASSO 5 - REMOVER A CLASSE ATIVO QUE ESTÁ NO CARTÃO ANTERIOR
        const cartaoAtivo = document.querySelector('.ativo');
        cartaoAtivo.classList.remove('ativo');

        //Passo 6 -adicionar a classe ativo no item clicado da lista
        const pokemonSelecionado = document.getElementById(cartaPokeOpen);
        pokemonSelecionado.classList.add('ativo');
    });
});