const family = document.querySelector(".family");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const navlinks = document.querySelector(".navlinks");
const headline = document.querySelector(".headline");
const footer = document.querySelector("#footer");


const tl = new TimelineMax();

tl.fromTo(family,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
  .fromTo(family,1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut })
  .fromTo(slider,1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
  .fromTo(logo, 0.5, {opacity: 0, x:30 }, { opacity:1, x: 0 }, "-=0.5")
  .fromTo(navlinks, 0.5, {opacity: 0, x:30 }, { opacity:1, x: 0 }, "2")
  .fromTo(headline, 0.5, {opacity: 0, x:30 }, { opacity:1, x: 0 }, "-=1")
  .fromTo(footer, 0.5, {opacity: 0, x:30 }, { opacity:1, x: 0 }, "2");
