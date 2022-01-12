document.querySelector('.top-cloud').animate([
  // keyframes
  { transform: 'translateX(-320px)' },
  { transform: 'translateX(320px)' }
], {
  // timing options
  duration: 15000,
  iterations: 1
});

document.querySelector('.bottom-cloud').animate([
  // keyframes
  { transform: 'translateX(-320px)' },
  { transform: 'translateX(320px)' }
], {
  // timing options
  duration: 15000,
  iterations: 1
});
