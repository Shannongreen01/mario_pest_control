let button = document.getElementById('button1');

button.onclick = function(event){
event.preventDefault()

let a = document.getElementById('input1').value;
let b = document.getElementById('input2').value;
let c = document.getElementById('input3').value;

let a1 = Number(a) * Number(2);
let b1 = Number(b) * Number(1);
let c1 = Number(c) * Number(5);
let total1 = document.createElement('h1');
let total = document.createElement('h1');
total1.textContent = "Your total today is: ";
total.textContent = a1 + b1 + c1 + "dollars";
document.getElementById('form1').appendChild(total1);
document.getElementById('form1').appendChild(total);
}

// Reset Button & Function

let button2 = document.createElement('button');
button2.textContent = "Reset Form";
button2.style.fontSize = "20px"
button2.style.marginBottom = "15px"
button2.style.background = "white";
document.getElementById('form1').appendChild(button2);

button2.onclick = function(){
    let resetForm = document.getElementById('form1');
    resetForm.reset();
}
