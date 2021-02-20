var input = document.querySelector('#input')
var submit = document.querySelector('#submit')
var button20 = document.querySelector('#button20')
var button30 = document.querySelector('#button30')
var output = document.querySelector('#output')


submit.addEventListener('click', () => {
    var outputValue = input.value
    output.innerText = outputValue
})


button20.addEventListener('click', () => {

    output.style.fontSize = '20px'
})

button30.addEventListener('click', () => {
    output.style.fontSize = '30px'
})

