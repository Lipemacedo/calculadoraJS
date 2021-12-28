const numeros = document.querySelector('#numeros')
const botoes = document.querySelectorAll('.botoes button')
const btn = document.querySelector('.calc')
const form = document.querySelector('form')
let zero = document.querySelector('.zero')
let um = document.querySelector('.um')
let dois = document.querySelector('.dois')
let tres = document.querySelector('.tres')
let quatro = document.querySelector('.quatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let sete =  document.querySelector('.sete')
let oito = document.querySelector('.oito')
let nove = document.querySelector('.nove')
let mais = document.querySelector('.mais')
let menos = document.querySelector('.menos')
let divisão = document.querySelector('.divisão')
let multiplicação = document.querySelector('.multiplicação')
let apagar = document.querySelector('.apagar')



 

    zero.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '0'
    })
    um.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '1'
    })
    dois.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '2'
    })
    
    
    tres.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '3'
    })
    
    quatro.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '4'
    })
    
    cinco.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '5'
    })
    
    seis.addEventListener('click',(e)=>{
        e.preventDefault()
      numeros.value += '6'
    })
    
    sete.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '7'
    })
    
    oito.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '8'
    })
    
    nove.addEventListener('click',(e)=>{
        e.preventDefault()
        numeros.value += '9'
    })
 
 

 

    mais.addEventListener('click',(e)=>{
    numeros.value += '+'
    e.preventDefault()
    })

    menos.addEventListener('click',(e)=>{
    e.preventDefault()
    numeros.value += '-'
    })

    divisão.addEventListener('click',(e)=>{
    numeros.value += '/'
    e.preventDefault()

    })

    multiplicação.addEventListener('click',(e)=>{
    numeros.value += '*'
    e.preventDefault()
    })

    apagar.addEventListener('click',(e)=>{
    numeros.value = ''
    e.preventDefault()
    })


    btn.addEventListener('click',(e)=>{
    const receba = eval(numeros.value)
    console.log(receba)
    numeros.value = receba
    e.preventDefault()
    })

    document.addEventListener('keypress',(tecla)=>{
    if(tecla.key === "Enter"){
         tecla.preventDefault()
        btn.click()
        }
    })
 
 



 
