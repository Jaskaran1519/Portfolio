import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.body,
  shaderPoints: 15,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 300,
  sleepRadiusY: 150,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})

var hoverText = document.getElementById('hover-text');
var navbarLinks = document.querySelectorAll('#tags li , #navbar a');

navbarLinks.forEach(function(link) {
  link.addEventListener('mouseenter', function() {
      var text = link.getAttribute('data-text');
      hoverText.textContent = text;
      hoverText.style.opacity = 1;
  });

  link.addEventListener('mouseleave', function() {
      hoverText.style.opacity = 0;
      document.getElementById('navbar').style.backgroundColor = '';

  });
});



function generateBalls() {
  var gooeyAnimations = document.querySelector(".gooey-animations");

  for (var i = 0; i < Math.floor(window.innerWidth / 20); i++) {
    var ball = document.createElement("div");
    ball.classList.add("ball");
    gooeyAnimations.appendChild(ball);

    var colors = ['#e5e5e5', '#bc4749'];
    var leftPosition = Math.random() * (window.innerWidth - 100);
    var translateY = Math.random() * 10;

    ball.style.bottom = '0px';
    ball.style.left = leftPosition + 'px';
    ball.style.animationDelay = Math.random() * 5 + 's';
    ball.style.transform = 'translateY(' + translateY + 'px)';
    ball.style.backgroundColor = colors[i % 2];
  }
}

generateBalls();

window.addEventListener('resize', function (e) {
  var balls = document.querySelectorAll(".gooey-animations .ball");
  balls.forEach(function (ball) {
    ball.remove();
  });

  generateBalls();
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));