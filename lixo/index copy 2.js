let indexPergunta = 0;
let contarPontos = 0;
const btnCheck = document.querySelector("button#ck")



// exibe a pergunta da posição do indexPergunta
function showQuestion() {
  const ques = ["Banana?", "Orange?", "Apple?", "Mango?"];
  let pQues = document.querySelector("p.ques") // elemento HTML Pergunta
  pQues.textContent = ques[indexPergunta] // texto que vai aparecer na tela é o index da lista
}

// checa a resposta da posição do indexPergunta
function check() {
  const resp = ["Banana", "Orange", "Apple", "Mango"];
  let inpResp = document.querySelector("input.resp")
  if (indexPergunta >= (resp.length - 2)) {
    console.log("o proximo clique sera fora do range")
  }
  if (inpResp.value == resp[indexPergunta]) {
    console.log("Acertou :)")
    inpResp.value = ""
  } else {
    console.log("outro")
    inpResp.value = ""
  }
  add1()
  showQuestion()
}

// adicona 1 ao index para ir para a proxima pergunta
function add1() {
  indexPergunta+=1;
  console.log(`Index: ${indexPergunta}`)
}




// CHAMAR FUNÇOCES INICIAIS
showQuestion()
btnCheck.addEventListener('click', check )
