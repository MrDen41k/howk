let htmlList = document.getElementById('MathList')
let btnBtn = document.getElementById('btnBtn')
let inputInput = document.getElementById('inputInput')

let flag = true;

let htmlClick = () => { 
    let newBuy = inputInput.value
    if(newBuy.length != 0){
    if(flag){
        let backgroundBlock = "yellow"
    } else 
    { 
        let backgroundBlock = "green"
    }
    htmlList.innerHTML += `<li>${newBuy}</li>`
    inputInput.value = ""
    flag = !flag 
    } else {
        alert('2+2? напиши щось я ж не знаю що додавати туда......')
    }
}

btnBtn.onclick = htmlClick

document.getElementById('text').innerHtml = `<h1>Test Text</h1>`