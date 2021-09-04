gsap.from(".proyectos", {
    scrollTrigger: {
        trigger: ".proyectos",
        toggleActions: "restart pause reverse none"
    },
    x: 100,
    opacity: 0,
    ease: 'back', 
    duration: 0.6,
    delay: 1
});

gsap.from('#hola', {
    duration: 1.5,
    x: -100,
    opacity:0,
    ease: 'bounce',
    delay: 1
});


