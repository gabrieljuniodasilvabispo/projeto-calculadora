const num = [...document.querySelectorAll(".num")]
const tecla_operacao = [...document.querySelectorAll(".simbolo")]
const display = document.querySelector("#display")

num.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const valor = evt.target.innerHTML
        display.innerHTML += valor
    })
})

tecla_operacao.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const simbolo = evt.target.innerHTML
        display.innerHTML += simbolo
    })
})