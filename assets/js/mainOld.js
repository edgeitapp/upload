/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-1', {duration: 2, y: -100})

let tl1 = gsap.timeline()
    tl1.from('.home__img-2', {duration: 1, x:-400, y:-50, rotation: 32, scale: .5})
    .to('.home__img-2', {duration: 1, rotation: 15, scale: 1.2})
    .to('.home__img-2', {duration: 1, rotation: 0, scale: 1})

let tl2 = gsap.timeline()
    tl2.from('.home__img-3', {duration: 1, x:50, y:-50, rotation: 30})
    .to('.home__img-3', {duration: 5, rotation: 360})

gsap.from('.home__img-4', {duration: 5, y: -100, scale: 1.3})
gsap.from('.home__img-5', {duration: 3, y: 100})