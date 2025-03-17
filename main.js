const form = document.getElementById('formulary');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Feliz"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"/>Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado"/>Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite nota mínima:'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputnomeAtividade = document.getElementById('nome_atividade');
    const inputnotaAtividade = document.getElementById('nota_atividade');

    if (atividades.includes(inputnomeAtividade.value)){
        alert(`A atividade ${inputnomeAtividade.value} já foi inserida!`);
    } else {
        atividades.push(inputnomeAtividade.value);
        notas.push(parseFloat(inputnotaAtividade.value));

    atividades.push(inputnomeAtividade.value);
    notas.push(parseFloat(inputnotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputnomeAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputnomeAtividade.value = '';
    inputnotaAtividade.value = '';
}}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media_final_aluno').innerHTML = mediaFinal;

    document.getElementById('media_final_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}