document.addEventListener("DOMContentLoaded", async () => {

  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out"
    }
  });

  await tl.from([
    `header,

    #hero .logo,
    #hero .hero_claim,
    section, 
    footer`
  ], {
    y: -30,
    opacity: 0,
    scale: 0.95,
    stagger: {
        each: 0.15,
        from: "start"
    }
  });
  document.dispatchEvent(new Event("gsap_end"));
});