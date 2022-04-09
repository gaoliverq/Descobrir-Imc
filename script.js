
function calcular(){
    var nomeVar = document.getElementById('nome')
    var pesoVar = document.getElementById('peso')
    var alturaVar = document.getElementById('altura')
    var resp = pesoVar.value / (alturaVar.value * alturaVar.value)
    var res = document.querySelector('.res')
    
    res.innerHTML =`Olá <strong>${nomeVar.value}</strong> o seu IMC é de <strong><u>${resp}</u></strong>`  
}

