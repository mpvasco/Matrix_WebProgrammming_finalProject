let indexPergunta = 0;
let score = 0;
const btnCheck = document.querySelector("button#ck")
const btnModificar = document.querySelector("button#mod")


const ques = ["Banana?", "Orange?", "Apple?", "Mango?"];
const resp = ["Banana", "Orange", "Apple", "Mango"];
const opts = [["Banana", "no", "nops"], ["no", "Orange", "nops"],[ "Apple", "nops", "no"], ["nops", "Mango", "no"]];



// exibe a pergunta da posição do indexPergunta
function displayQuestion() {
  let pQues = document.querySelector("p.ques") // elemento HTML Pergunta
  pQues.textContent = ques[indexPergunta] // texto que vai aparecer na tela é o index da lista

  let iopt1 = document.querySelector("input[id='o0']")
  let iopt2 = document.querySelector("input[id='o1']")
  let iopt3 = document.querySelector("input[id='o2']")

  iopt1.setAttribute('value', opts[indexPergunta][0]  ) // update value
  iopt2.setAttribute('value', opts[indexPergunta][1]  ) // update value
  iopt3.setAttribute('value', opts[indexPergunta][2]  ) // update value

  let lopt1 = document.querySelector("label[id='o0']")
  let lopt2 = document.querySelector("label[id='o1']")
  let lopt3 = document.querySelector("label[id='o2']")
    
  lopt1.textContent = opts[indexPergunta][0]
  lopt2.textContent = opts[indexPergunta][1]
  lopt3.textContent = opts[indexPergunta][2]

  let qcount = document.querySelector("h3")
  let legend = `Question ${indexPergunta +1} of ${resp.length}.`
  qcount.textContent = legend
}

// checa a resposta da posição do indexPergunta
function check() {
  let inpResp = document.querySelector("input[name='answer']:checked")
  
  if (inpResp.value == resp[indexPergunta]) { //verifica acerto
    addScore()          // pontos so se acertar
    console.log("ACERTOU")
    inpResp.value = ""

  } else {
    console.log("ERROU")
    inpResp.value = ""

  }   
  if ( (indexPergunta <= (resp.length -1 ))) { // mostrar proxima pergunta?
    console.log("mostrar proxima pergunta? SIM")
    addIndex()
    try {
      displayQuestion()
    }
    catch(err) {
      modificar()
    }
    
    if (indexPergunta == (resp.length - 2)) {   //indica que o proximo botao é de concluir
      console.log("mudar o texto do botão para 'concluir' ")
  }  }


  

  console.log("indexPergunta:", indexPergunta)
  console.log("resp.length:",resp.length)
  console.log("score:",score)

}

// adicona 1 ao index para ir para a proxima pergunta
function addIndex() {
  indexPergunta+=1;
  console.log(`Index depois de add: ${indexPergunta}`)
}

//adiciona 1 ponto no placar
function addScore() {
  console.log("antes de add pontos:", score )
  score+=1
  console.log("depois de add pontos:", score )

}

// console.log(document.querySelector("input[name='answer']:checked").value)



// CHAMAR FUNÇOCES INICIAIS
displayQuestion()
btnCheck.addEventListener('click', check )



function modificar() {
  //remover da tela o botão id="ck"
  document.getElementById("ck").style.display = 'none';
  element = document.querySelector('form')
  console.log(`(${score}/${resp.length})*100).toFixed(2)`)
  let fscore = ((score/resp.length)*100).toFixed(2)
  element.innerHTML =   `<span style='color: blue; font-size: 100px'>You got ${fscore}%</span>`
  document.getElementById("tryA").style.display = 'block';
}
const tryA = document.getElementById("tryA")

function reload() {
  location.reload();
}
tryA.addEventListener('click', reload )
