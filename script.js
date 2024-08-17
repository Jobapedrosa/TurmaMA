const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você presencia uma ação de cyberbullying. O que você faz sobre?",

        alternativas: [
            {
                texto:"Reportar a situação a um responsável.",
                afirmacao: "Você é contra o Bullying porém prefere não se envolver diretamente delegando essa responsabilidade a uma autoridade que você julga competente."
            },
            {
                texto: "Tenta inibir o ato enquanto está ocorrendo.",
                afirmacao:"Você é o tipo de pessoa que não se cala diante da injustiça e faz de tudo o que está ao seu alcance para preservar um ambiente saudável e sem discriminações."

            }   
           
        ]
    },
    {
        enunciado: "As fontes renováveis de energia desempenham um papel crucial na transição para um futuro sustentável. Quanto às fontes de energia renováveis, o que você acha sobre a exploração de novas formas menos poluentes, que automaticamente agridem menos o meio ambiente?",
        alternativas: [
            {
                texto: "Concordo, pois os recursos do nosso planeta são finitos, e precisamos explorar formas menos agressivas.",
                afirmacao: "Você é um cidadão comprometido com a manutenção e bem  do nosso planeta no longo prazo."
            },
            {
                texto:  "Discordo, pois os altos custos do processo acaba  inviabilizando o mesmo.",
                afirmacao: "Você é uma pessoa que se preocupa com a questão econômica, prezando o valor  dinheiro."
            }   
            
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto: "Pratico sempre que possível, pois acredito que dessa forma terei um bom condicionamento físico e uma melhor qualidade de vida.",
                afirmacao: "Você é uma pessoa que procura cuidar bem do seu corpo praticando exercícios regularmente."
            },
            {
                texto:  "Acredito que a prática de um esporte está ligada apenas ao lazer, e prefiro utilizar o meu tempo estudando  e assistindo séries.",
                afirmacao: "Você é uma pessoa que prefere ter o seu tempo de lazer voltado a atividades culturais."
            }             
           
        ]
    }  
];
    
    
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta(); 