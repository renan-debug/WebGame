let mensagem = document.querySelector(".mensagem") ;
let crow = document.getElementById("2");
let crow3 = document.getElementById("3");



function showMessage(){   
   //mensagem.style.display = "block";
   mensagem.innerHTML ="Had! A manifestação de Nuit.";
   mensagem.style.visibility ="visible";
   
 }
function hideMessage(){
 //mensagem.style.display = "none";
   mensagem.style.visibility ="hidden";
}

function mostra(){   
  //crow.style.display = "block"; 
   mensagem.innerHTML ="O desvelar da companhia do céu.";
   mensagem.style.visibility ="visible";
  
}
function apaga(){
//crow.style.display = "none"; 
mensagem.style.visibility ="hidden";

}

function mostra3(){   
  //crow3.style.display = "block"; 
   mensagem.innerHTML ="Todo Homem e toda mulher é uma estrela";
   mensagem.style.visibility ="visible";
  
}
function apaga3(){
//crow3.style.display = "none"; 
   mensagem.style.visibility ="hidden";
}


//contador da maçã
var cont = 0;
let disp = document.getElementById("cont_maca");

function conta(){
   cont++;
   disp.innerHTML = cont;

}