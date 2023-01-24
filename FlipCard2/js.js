const flipBox = document.getElementById('flip-box');
flipBox.addEventListener('click', function() {
  flipBox.querySelector('.flip-box-inner').classList.toggle('flipped');
});