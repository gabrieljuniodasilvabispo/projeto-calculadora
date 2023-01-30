const TeclasNum = [...document.querySelectorAll(".num")]
const tecla_operacao = [...document.querySelectorAll(".simbolo")]
const tecla_res = document.querySelector("#t_igual")
const limpar = document.querySelector("#t_limpar")
const display = document.querySelector("#display")
const t_cpy = document.querySelector("#t_cpy")

let sinal = false
let decimal = false

TeclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        const valor = evt.target.innerHTML
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == ""){
                    display.innerHTML += "0."
                } else {
                    display.innerHTML += "."
                }
            }
        } else {
            display.innerHTML += valor
        }
    })
})

tecla_operacao.map((el)=>{
    el.addEventListener("click",(evt)=>{
        decimal = false
        if(!sinal){
            sinal = true
            const simbolo = evt.target.innerHTML
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else {
                display.innerHTML += simbolo
            }
        }
    })
})

limpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML = " "
})

tecla_res.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false

    const resultado = eval(display.innerHTML.toString())
    display.innerHTML = resultado
})

t_cpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})