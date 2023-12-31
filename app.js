const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");



const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -140px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        } else {
        entry.target.classList.remove('appear');
        }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});