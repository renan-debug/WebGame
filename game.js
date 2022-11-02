let mensagem = document.querySelector(".mensagem") ;
//var crow = document.getElementById("crow").addEventListener("mouseover", showMessage)
//document.getElementById("#crowleymini").addEventListener("mouseover", mostra);

function showMessage(){   
   mensagem.style.display = "block"; 
   
 }
function hideMessage(){
 mensagem.style.display = "none"; 
 //document.getElementById("haddit").innerHTML = "Had! A manifestação de Nuit.";
}

function mostra(){
    document.write("Had! A manifestação de Nuit");
    document.getElementById("divHi").style.display = "block";
}

function mostraMensagem(){
  document.getElementById("divHi").style.display = "block";

}