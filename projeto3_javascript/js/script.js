
const campoNome = document.querySelector("#campo-nome");
const botaoGerar = document.querySelector("#btn-gerar");
const botaoTema = document.querySelector("#btn-tema");
const areaResultado = document.querySelector("#area-resultado");


function gerarOrientacao(event) {
  event.preventDefault();

  const nome = campoNome.value.trim();
  const radioMarcado = document.querySelector('input[name="tecnologia"]:checked');


  if (nome === "") {
    areaResultado.textContent = "Digite seu nome para receber a orientação!!";
    areaResultado.classList.add("campo__erro");
    return;
  }

  if (radioMarcado === null) {
    areaResultado.textContent = "Selecione uma tecnologia!!";
    areaResultado.classList.add("campo__erro");
    return;
  }

  const interesse = radioMarcado.value;
  let mensagem;

  switch (interesse) {
    case "html":
        mensagem = `Olá, ${nome}! Comece pela base: tags semânticas (header, main, footer), formulários com label associado, listas, links e imagens com texto alternativo. Uma boa estrutura deixa o CSS e o JavaScript muito mais fáceis.`;
        break;
    case "css":
        mensagem = `Olá, ${nome}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade.`;
        break;
    default:
        mensagem = `Olá, ${nome}! Foque em variáveis, condições, funções e eventos. Depois, treine selecionar elementos e alterar a página com textContent e classList. É assim que a página passa a reagir ao visitante.`;
        break;
  }

  areaResultado.classList.remove("campo__erro");
  areaResultado.textContent = mensagem;
}

function alterarTema() {
    document.documentElement.classList.toggle("escuro");
}    

botaoGerar.addEventListener("click", gerarOrientacao);
botaoTema.addEventListener("click", alterarTema);