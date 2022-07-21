let indexPergunta = 0;
let score = 0;
const btnCheck = document.querySelector("button#ck")
const btnModificar = document.querySelector("button#mod")


const ques = ["What does HTML stand for?", "Choose the correct HTML element for the largest heading:", "What is the correct HTML for creating a hyperlink?", "How can you open a link in a new tab/browser window?", "What is the correct HTML for making a text input field?", "What is the correct HTML for making a drop-down list?","What is the correct HTML for making a text area?"  ];
const resp = ["Hyper Text Markup Language", "<h1>", '<a href="http://www.w3schools.com">W3Schools</a>', '<a href="url" target="_blank">', '<input type="text">',"<select>","<textarea>"  ];
const opts = [["Home Tool Markup Language", "Hyperlinks and Text Markup Language","Hyper Text Markup Language"], 
              [ "<h1>", "<h6>", "<head>" ],
              [ '<a href="http://www.w3schools.com">W3Schools</a>', '<a>http://www.w3schools.com</a>', '<a url="http://www.w3schools.com">W3Schools.com</a>' ],
              [ '<a href="url" target="new>', '<a href="url" target="_blank">', '<a> href="url" target="new"</a>' ],
              [ '<input type="textfield">', '<textinput type="text">', '<input type="text">' ],
              [ "<select>", '<input type="dropdown">', '<input type="list">' ],
              [ '<input type="textarea">', '<input type="textbox">', "<textarea>" ] ];




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
    inpResp.value = ""

  } else {
    inpResp.value = ""

  }   
  if ( (indexPergunta <= (resp.length -1 ))) { // mostrar proxima pergunta?
    addIndex()
    try {
      displayQuestion()
    }
    catch(err) {
      modificar()
    }
    
    if (indexPergunta == (resp.length - 1)) {   //indica que o proximo botao é de concluir
      // eu modifiquei o index dentro da função chekc antes de chegar nesse ponto do codigo
      btnCheck.textContent = "Finish"

  }  }


  



}

// adicona 1 ao index para ir para a proxima pergunta
function addIndex() {
  indexPergunta+=1;
}

//adiciona 1 ponto no placar
function addScore() {
  score+=1
}

// console.log(document.querySelector("input[name='answer']:checked").value)



// CHAMAR FUNÇOCES INICIAIS
displayQuestion()
btnCheck.addEventListener('click', check )



function modificar() {
  document.getElementById("ck").style.display = 'none';//remover da tela o botão id="ck"
  
  element = document.querySelector('form')
  let fscore = ((score/resp.length)*100).toFixed(2)
  element.innerHTML =   `<h2 class="quiz" style='color: blue; font-size: 70px; background-color: #f7b605; padding: 30px; border-radius: 10px; margin-top: 30px;'>You scored ${fscore}%.</h2>`
  element.style.textAling = 'center';
  document.getElementById("tryA").style.display = 'block';
}
const tryA = document.getElementById("tryA")

function reload() {
  location.reload();
}
tryA.addEventListener('click', reload )
