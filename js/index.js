document.getElementById("button").addEventListener("click", scrollUp);

year = document.getElementById("year");
const date = new Date();
const years = date.getFullYear();
year.innerHTML = years;

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }

}

var buttonUp = document.getElementById("button");

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 600) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 600) {
        buttonUp.style.transform = "scale(0)";
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

