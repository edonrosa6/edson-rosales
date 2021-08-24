document.onreadystatechange = function () {
    let state = document.readyState
    if (state === 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state === 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },5000);
    }
}


document.getElementById("button").addEventListener("click", scrollUp);

year = document.getElementById("year");
const date = new Date();
const years = date.getFullYear();
year.innerHTML = years;

function scrollUp() {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

var buttonUp = document.getElementById("button");


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

let ubicacionPrincipal = window.pageYOffset;

function effects() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';

    }
     else {
        document.getElementById('navbar').style.top = '-110px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

function test() {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 600) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 600) {
        buttonUp.style.transform = "scale(0)";
    }
}

window.addEventListener('scroll', effects);
window.addEventListener('scroll', test);