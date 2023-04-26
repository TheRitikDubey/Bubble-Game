
let circle = document.getElementById('circle');
let f1= document.querySelectorAll(".flex1");

let f2= document.querySelectorAll(".flex2");

let f3= document.querySelectorAll(".flex3");

let f4= document.querySelectorAll(".flex4");
function ResetAll(){
    f1[0].style.justifyContent = 'space-between';
    
    f2[0].style.justifyContent = 'space-between';
    
    f3[0].style.justifyContent = 'space-between';
    
    f4[0].style.justifyContent = 'space-between';

    //Reseting colors
    document.getElementById('circle1').style.backgroundColor = 'rgba(255, 0, 0, 0.351)'
    document.getElementById('circle2').style.backgroundColor = 'rgba(172, 255, 47, 0.368)'
    document.getElementById('circle3').style.backgroundColor = 'rgba(0, 0, 255, 0.278)'
    document.getElementById('circle4').style.backgroundColor = 'rgba(255, 166, 0, 0.301)'
}
function HitArrow1() {
    f1[0].style.justifyContent = 'flex-start';
    
    f1[0].style. transition= 'flex-basis 500ms ease-in-out' ;
    document.getElementById('circle1').style.backgroundColor = 'red'
}

function HitArrow2() {
    f2[0].style.justifyContent = 'flex-start';
    
    document.getElementById('circle2').style.backgroundColor = 'green'
}

function HitArrow3() {
    f3[0].style.justifyContent = 'flex-start';
    
    document.getElementById('circle3').style.backgroundColor = 'blue'
}

function HitArrow4() {
    f4[0].style.justifyContent = 'flex-start';
    
    document.getElementById('circle4').style.backgroundColor = 'yellow'
}
document.getElementById('circle1').addEventListener('click',HitArrow1);

document.getElementById('circle2').addEventListener('click',HitArrow2);

document.getElementById('circle3').addEventListener('click',HitArrow3);

document.getElementById('circle4').addEventListener('click',HitArrow4);
