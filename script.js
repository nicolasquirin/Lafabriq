const media = document.querySelectorAll('media');
const logo = document.querySelector('logo');
const medias = document.querySelectorAll('.bulle');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(media, 1, {top: -30, opacity: 0, ease: "power2.out"}, 0.3)
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -700, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
});