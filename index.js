let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let value = ['😊', '😨', '🥰', '😂', '😎', '😣', '😡']

function getRandomValue() {
    return value[parseInt(Math.random() * 7)]
}


setInterval(() => {
    value1.getRandomValue()
    value2.getRandomValue()
    value3.getRandomValue()

}, 300)