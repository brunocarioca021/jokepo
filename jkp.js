const prompt = require('prompt-sync')();

function geralRodadas()
{
    var qtdrodadas = +prompt('Informe quantidade de rodadas: ');

    return qtdrodadas;
}

let vitoria = 0;
let derrota = 0;
let empate = 0;

function opcaoJogadas()
{
    let opcao = +prompt(
    `Selecione quais as  opçoẽs para jogada: 
        [1] Pedra, 
        [2] Papel,
        [3] Tesoura
        \n`);

    let cpu = Math.ceil(Math.random()* 3);
    console.log(`CPU escolheu ${cpu} `);

    if (opcao === cpu) 
    {
        console.log('Empatou');
        empate++;
    } 
    else if ((opcao - cpu == -2) || (opcao - cpu == 1)) 
    {
        console.log('Parabéns!! Você ganhou!!!');
        vitoria++;
    } 
    else 
    {
        console.log('A CPU ganhou!!!');
        derrota++;
    }
}

function rodadaFinal() 
{
    console.log(`Vitorias: ${vitoria}`);
    console.log(`Derrotas: ${derrota}`);
    console.log(`Empates:  ${empate}`);

    if(vitoria > derrota)
    {
        console.log('Parabéns você é o grande vencedor da partida');
    } 
    else if (vitoria < derrota) 
    {
        console.log('Infelizmente você perdeu para CPU!!! Tente novas Jogadas');
    }
    else if (vitoria === derrota) 
    {
        console.log('Opa!!! Empatou!!! Vamos para mais jogadas');
    }
}

function inicio() 
{
    total = geralRodadas()
    for (let i = 0; i < total; i++)
    {
        console.log(opcaoJogadas());
    }
    console.log(rodadaFinal());
}

inicio();

let fim = prompt('Deseja continuar no jogo? ');
console.log();

if (fim.toUpperCase()) 
{
    console.log('Seja Bem Vindo(a) ao Jokenpô ');
    inicio();
} 
else 
{
    console.log('Obrigador por participar do jogo.');
}
