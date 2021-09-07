gsap.registerPlugin(ScrollTrigger)
gsap.from('#hola', {
    duration: 1.5,
    x: -100,
    opacity:0,
    ease: 'bounce',
    delay: .5
});


const titles = gsap.utils.toArray('.slideTextLeft')

titles.forEach((text, i) => {

    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            toggleActions: "restart pause restart"
        },
        x: -100,
        opacity: 0,
        ease: 'back', 
        duration: 0.6,
        delay: 0.5
    });
});


    gsap.from('.image-animation', {
        duration: 0.3,
        y: -200,
        opacity: 0,
        delay: 1,
        stagger: 0.5,
        ease: 'back'
    });


