const prompt = require('prompt-sync')({sigint:true});
const nomeJogador = prompt("Vamos jogar um jogo? Me diga seu nome: ");
let resposta;
let pontuacao = 0;

function validaResposta(respostaInput, respostaCerta, mensagem){
    if (respostaInput.toLowerCase() === respostaCerta){
        console.log("Você acertou, parabéns!");
        pontuacao++;
    }else{
        console.log(mensagem);
    }
}

function resultado(){
    console.log(`Sua pontuacao final é: ${pontuacao}`)

}

function theGame(nomeJogador) {

    resposta = prompt(`Bem vindo ao 'The Game', ${nomeJogador}, aqui você pode testar seus conhecimentos sobre os filmes clássicos de terror dos anos 2000. Pronto?`);
      
    while (resposta != 'nao' && resposta != '0'){

            resposta = prompt("Escolha um filme. 1-'O Chamado' 2-'Jogos Mortais' 3-'O grito' 0-Sair ");

            switch (resposta){
  
            case "1":
                resposta = prompt ("O Chamado é um remake de um filme de terror chamado 'Ringu'. Verdadeiro ou Falso? ");
                validaResposta(resposta, "verdadeiro", "Baam! Você Errou. O filme 'o chamado' é baseado no filme japonês chamado 'Ringu' ");
                break;
            case "2":
                resposta = prompt ("O vilão principal de 'Jogos Mortais' é conhecido como Jigsaw, mas seu nome verdadeiro é John Kramer. Verdadeiro ou Falso? ");
                validaResposta(resposta, "verdadeiro", "Baam! Você Errou. John Kramer é o nome verdadeiro do Jigsaw" );
                break;
            case "3":
                resposta = prompt ("O Grito é um filme original dos Estados Unidos, produzido, escrito e criado lá. Verdadeiro ou Falso? ");
                validaResposta(resposta, "falso", "Baam! Você Errou. O filme 'O Grito' é baseado no filme japonês 'Ju-on: The Grudge', \n que é parte de uma série de filmes de terror japoneses dirigidos por Takashi Shimizu, \n que também dirigiu a versão americana." )
                break;
        }
    }
if(resposta == 0){
    resultado();
}else{
    console.log("FuenFuen, Você saiu! Não vou jogar com você hoje.")
}

}

theGame(nomeJogador)