window.addEventListener('load', ()=>{
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visuals = document.querySelector('.visual');
  const color = [
    "#60d394",
    "#d36060",
    "#c063d3",
    "#d3d160",
    "#7797a1",
    "#283128"
  ];

  //lets focus on the sound here.
  pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();
      
      //ffnction decalaration of the bubble.
      createBubble(index);
    });
  });


  //playing with the visuals.
  //create a function that takes bubbles.
const createBubble = index =>{
  const bubble = document.createElement('div');
  visuals.appendChild(bubble);
  bubble.style.background = color[index];
  bubble.style.animation = 'jump 1s ease';
  bubble.addEventListener('animationend', function(){
    visuals.removeChild(this);
  });
};
});