let indexPergunta = 0;
let contarPontos = 0;
console.log(indexPergunta)
let button = document.querySelector("button")
// function checkAnswer () {
//   let teste = document.querySelector("input")
//   if (teste.value ==10) {
//     console.log("carai!")
//     teste.value = ""
//     counti()
//   }
// }

// function counti() {
//   let counter = document.querySelector("div") // 0
//   let opa = Number(counter.innerText) + 1 // 0
//   counter.textContent = opa // 1
// }


// Mostrar elemento na tela

function showQuestion() {
  const ques = ["Banana?", "Orange?", "Apple?", "Mango?"];
  // const resp = ["Banana", "Orange", "Apple", "Mango"];
  let pQues = document.querySelector("p.ques") // elemento HTML Pergunta
  // let iRes = document.querySelector("input.ques") // elemento ]HTML Resposta
  pQues.textContent = ques[indexPergunta] // texto que vai aparecer na tela é o index da lista
}

const btnCheck = document.querySelector("button#ck")
// console.log(btnCheck)
function check() {
  const resp = ["Banana", "Orange", "Apple", "Mango"];
  let inpResp = document.querySelector("input.resp")
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

function add1() {
  indexPergunta+=1;
  console.log(`Index: ${indexPergunta}`)
}
showQuestion()
// button.addEventListener('click', checkAnswer )
btnCheck.addEventListener('click', check )
