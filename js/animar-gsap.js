gsap.registerPlugin(ScrollTrigger)
gsap.from('#hola', {
    duration: .8,
    x: -100,
    opacity:0,
    ease: 'slow'
});


const titles = gsap.utils.toArray('.slideTextLeft')

titles.forEach((text, i) => {

    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
        },
        x: -100,
        opacity: 0,
        ease: 'slow', 
        duration: .3
    });
});




