let navbar = document.querySelectorAll('#mynav');

window.onscroll = () => {
    if (window.scrollX > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};