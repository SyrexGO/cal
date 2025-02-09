const resultElement = document.getElementById ('result')
const num1 = document.getElementById ('input1')
const num2 = document.getElementById ('input2')
const operat = document.getElementById ('plus')
const operat2 = document.getElementById ('minus')
const operat3 = document.getElementById ('umnoj')
const operat4 = document.getElementById ('razdel')
const submitBot = document.getElementById('submit')
let rov = '+'
operat.onclick = function() {
    rov = '+'
}
operat2.onclick = function() {
    rov = '-'
}
operat3.onclick = function() {
    rov = '*'
}
operat4.onclick = function() {
    rov = '/'
}
function prints(result) {
    if(result<0){
        resultElement.style.color ='red'
    }
    else if (result>=0){
        resultElement.style.color ='green'
    }
    resultElement.textContent = result
}
function oper(in1,in2,znak) {
    const nam1 = Number(in1.value)
    const nam2 = Number(in2.value)
    if (znak == '+'){
        return nam1+nam2
        }
    else if (znak == '-'){
       return nam1-nam2
        }
    else if (znak == '*'){
       return nam1*nam2
        }
    else if (znak == '/'){
      return  nam1/nam2
        }
        
}
submitBot.onclick = function() {
        const result = oper(num1,num2,rov)
        prints(result)
    }
    
