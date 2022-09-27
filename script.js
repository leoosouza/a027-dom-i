const frutas = ["laranja", "limão", "uva"];

let primeiraFruta=document.getElementById('fruta-1')

primeiraFruta.innerHTML=frutas[0]

let segundaFruta=document.getElementById('fruta-2')

segundaFruta.innerHTML=frutas[1]

let terceiraFruta=document.getElementById('fruta-3')

terceiraFruta.innerHTML=frutas[2]

// let quartaFruta=document.getElementById('fruta-4')
// quartaFruta.innerHTML=''

let input=document.getElementById('nova-fruta')

function frutosa() {
    let colocando=document.getElementById('fruta-4').innerHTML=input.value
}