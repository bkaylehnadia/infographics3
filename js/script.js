
 // nadiabkayleh
 // durham college animation ad

function startNextMotionGraphic() {
    window.parent.postMessage("complete", '*');
}

window.onload = function() {

    // Create GSAP timelines
    let tl = gsap.timeline({
        onComplete: startNextMotionGraphic
    });

    // LOOP ADDED HERE
    let tl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    });

    let tl1 = gsap.timeline();


    // section1 animation
    tl2.from(".pics", {
        opacity: 0,
        duration: 2,
        delay: 1.5,
        ease: "power3.inOut"
    });

    tl2.to(".pics", {
        opacity: 1,
        ease: "power3.inOut"
    });

    tl2.from(".logo", {
        opacity: 0,
        scale: 0,
        ease: "power3.inOut"
    });

    tl2.to(".logo", {
        opacity: 1,
        scale: 1,
        ease: "power3.inOut"
    });

    tl2.from(".bar", {
        x: -900,
        ease: "power3.inOut"
    });

    tl2.from(".together", {
        y: -900,
        ease: "power3.inOut"
    });

    tl2.from(".study", {
        y: -900,
        ease: "power3.inOut"
    });


    // reverse animation
    tl2.to(".pics", {
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power3.inOut"
    });

    tl2.to(".logo", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power3.inOut"
    }, "-=1");

    tl2.to(".bar", {
        x: 900,
        duration: 1,
        ease: "power3.inOut"
    }, "-=1");

    tl2.to(".together", {
        y: -900,
        duration: 1,
        ease: "power3.inOut"
    }, "-=1");

    tl2.to(".study", {
        y: -900,
        duration: 1,
        ease: "power3.inOut"
    }, "-=1");


    // section 2 animation
    tl2.from(".studygirl", {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut"
    });

    tl2.to(".studygirl", {
        opacity: 1,
        ease: "power3.inOut"
    });

    tl2.from(".half", {
        opacity: 0,
        duration: 1.6,
        ease: "power3.inOut"
    });

    tl2.to(".half", {
        opacity: 1,
        ease: "power3.inOut"
    });

    tl2.from(".tri", {
        x: -380,
        ease: "power3.inOut"
    });

    tl2.from(".study2", {
        x: -380,
        duration: .5
    });

    tl2.from(".alone", {
        x: -380,
        duration: .5,
        ease: "power3.inOut"
    });


    // reverse animation
    tl2.to(".study2", {
        x: -300,
        ease: "power3.inOut",
        delay: 3,
        duration: 0.5
    });

    tl2.to(".alone", {
        x: -300,
        ease: "power3.inOut",
        duration: 0.5
    });

    tl2.to(".half", {
        opacity: 0,
        ease: "power3.inOut"
    });

    tl2.to(".tri", {
        x: -500,
        ease: "power3.inOut"
    });


    // book today screen
    tl2.from(".pic2", {
        x: -1000,
        duration: 1,
        ease: "power3.inOut"
    });

    tl2.from(".tri2", {
        x: -900,
        ease: "power3.inOut"
    });

    tl2.from(".book", {
        x: -900,
        duration: .2
    });

    tl2.from(".today", {
        x: -900,
        duration: .2,
        ease: "power3.inOut"
    });


    // volume up and down
    tl2.from(".vol1", {
        opacity: 0,
        duration: .1,
        ease: "power3.inOut"
    });

    tl2.to(".vol1", {
        opacity: 1,
        duration: .1,
        ease: "power3.inOut"
    });

    tl2.from(".vol3", {
        opacity: 0,
        duration: .2,
        ease: "power3.inOut"
    });

    tl2.to(".vol3", {
        opacity: 1,
        duration: .2,
        ease: "power3.inOut"
    });

    tl2.from(".vol2", {
        opacity: 0,
        duration: .2,
        ease: "power3.inOut"
    });

    tl2.to(".vol2", {
        opacity: 1,
        duration: .2,
        ease: "power3.inOut"
    });

    tl2.to(".vol3", {
        opacity: 0,
        duration: .2
    });

    tl2.to(".vol2", {
        ease: "power3.inOut",
        opacity: 0,
        duration: .2
    });


    // wifi up
    tl2.from(".wifi1", {
        ease: "power3.inOut",
        opacity: 0,
        duration: .1
    });

    tl2.to(".wifi1", {
        ease: "power3.inOut",
        opacity: 1,
        duration: .1
    });

    tl2.from(".wifi2", {
        opacity: 0,
        ease: "power3.inOut",
        duration: .1
    });

    tl2.to(".wifi2", {
        opacity: 1,
        ease: "power3.inOut",
        duration: .1
    });

    tl2.from(".wifi3", {
        opacity: 0,
        duration: .1,
        ease: "power3.inOut"
    });

    tl2.to(".wifi3", {
        opacity: 1,
        duration: .1,
        ease: "power3.inOut"
    });

    tl2.to(".wifi2", {
        opacity: 0,
        duration: .1,
        ease: "power3.inOut"
    });

    tl2.to(".wifi2", {
        opacity: 0,
        duration: .2,
        ease: "power3.inOut",
        delay: 2
    });


    // final screen
    tl2.from(".new", {
        opacity: 0
    });

    tl2.to(".new", {
        opacity: 1
    });

    tl2.from(".logodc", {
        opacity: 0
    });

    tl2.to(".logodc", {
        opacity: 1
    });

    tl2.from(".success", {
        opacity: 0
    });

    tl2.to(".success", {
        opacity: 1,
        delay: 2
    });


    // reverse
    tl2.to(".logodc", {
        opacity: 0,
        duration: 1
    });

    tl2.to(".success", {
        opacity: 0,
        duration: 1
    }, "-=1");

};
