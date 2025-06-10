function Plus(){
    const num1 = parseFloat(document.getElementById('Num1').value);
    const num2 = parseFloat(document.getElementById('Num2').value);
    let res = num1 + num2;
    document.getElementById('res').textContent = res;
}

function Minus(){
    const num1 = parseFloat(document.getElementById('Num1').value);
    const num2 = parseFloat(document.getElementById('Num2').value);
    let res = num1 - num2;
    document.getElementById('res').textContent = res;
}

function Umnoj(){
    const num1 = parseFloat(document.getElementById('Num1').value);
    const num2 = parseFloat(document.getElementById('Num2').value);
    let res = num1 * num2;
    document.getElementById('res').textContent = res;
}

function Del(){
    const num1 = parseFloat(document.getElementById('Num1').value);
    const num2 = parseFloat(document.getElementById('Num2').value);
    let res;

    if(num2 !== 0){res = num1 / num2;}
    else{alert('учи матан');}
    
    document.getElementById('res').textContent = res;
}

function Udal(){
    document.getElementById('Num1').value='';
    document.getElementById('Num2').value='';
    document.getElementById('res').textContent='';
}

const plus = document.getElementById('plus').addEventListener('click', () => { Plus() });
const minus = document.getElementById('minus').addEventListener('click', () => { Minus() });
const umn = document.getElementById('umnoj').addEventListener('click', () => { Umnoj() });
const del = document.getElementById('del').addEventListener('click', () => { Del() });