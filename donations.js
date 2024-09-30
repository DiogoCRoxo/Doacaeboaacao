
var radio = document.querySelector('.manual-btn')
var radio2 = document.querySelector('.manual-btn2')
var cont = 1

document.getElementById('radio1').checked = true
document.getElementById('radio2-1').checked = true

setInterval(() => {
    nextImg()
}, 5000)

function nextImg() {
    cont++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
    document.getElementById('radio2-'+cont).checked = true
}