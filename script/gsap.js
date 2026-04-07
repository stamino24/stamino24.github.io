document.addEventListener("DOMContentLoaded", () => {

  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out"
    }
  });

  tl.from([
    "header",

    "#hero .logo",
    "#hero .hero-claim",

    "#about h2",
    "#about .about-cards .col img",
    "#about .about-cards .card",

    "#services h2",
    "#services .service-cards .col",

    "#knowledges h2",
    "#knowledges .knowledges-cards"
  ], {
    y: -30,
    opacity: 0,
    scale: 0.95,
    stagger: {
        each: 0.07,
        from: "start"
    }
  });

});