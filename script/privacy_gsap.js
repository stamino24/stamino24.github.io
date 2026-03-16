document.addEventListener("DOMContentLoaded", () => {

  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.out"
    }
  });

  const arcticles = document.querySelectorAll("article");
  tl.from([
    "header",
    arcticles  
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