document.getElementById("enviar").addEventListener("click", validaform)

function validaform (){
    if(document.getElementById("nome").value !="" && document.getElementById("email").value !=""){
        alert("Você vai receber um email com as novidades!")
    }else{
        alert("Minha fia, preencha tudo vai")
    }
}