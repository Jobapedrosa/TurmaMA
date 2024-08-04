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
                texto: "Reportar a situação a um responsável.",
                afirmacao: "afirmação 1"
            },
            {
                texto:  "Tenta inibir o ato enquanto está ocorrendo.",
                afirmacao: "afirmação 2"
            }    
           
        ]
    },
    {
        enunciado: "As fontes renováveis de energia desempenham um papel crucial na transição para um futuro sustentável. Quanto às fontes de energia renováveis, o que você acha sobre a exploração de novas formas menos poluentes, que automaticamente agridem menos o meio ambiente?",
        alternativas: [
            {
                texto: "Concordo, pois os recursos do nosso planeta são finitos, e precisamos explorar formas menos agressivas.",
                afirmacao: "afirmação 1"
            },
            {
                texto:  "Discordo, pois os altos custos do processo acaba  inviabilizando o mesmo.",
                afirmacao: "afirmação 2"
            }   
            
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            {
                texto: "Pratico sempre que possível, pois acredito que dessa forma terei um bom condicionamento físico e uma melhor qualidade de vida.",
                afirmacao: "afirmação 1"
            },
            {
                texto:  "Acredito que a prática de um esporte está ligada apenas ao lazer, e prefiro utilizar o meu tempo estudando  e assistindo séries.",
                afirmacao: "afirmação 2"
            }             
           
        ]
    }  
];
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativas);

    }

}


mostraPergunta();