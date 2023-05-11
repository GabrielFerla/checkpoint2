
function quiz(){

    respostas = []

    respostas[0] = prompt("De qual região vem esse vinho?")
    respostas[1] = prompt("Qual uva esse vinho é feito?")
    respostas[2] = prompt("Que tipo de vinho ele é?")

    //remove class dnone from id respostaQuiz
    document.getElementById("respostaQuizTitulo").classList.remove("dontShow")
    document.getElementById("respostaQuizTituloRemover").classList.add("dontShow")

    //add respostas usando for each

    respostas.forEach(function(resposta, index){
        document.getElementById("respostaQuiz").innerHTML += index + " - " + resposta + "<br>"
    })

    document.getElementById("respostaQuiz").classList.remove("dontShow")

}