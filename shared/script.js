window.addEventListener('scroll', function() {
  const bg = document.getElementById('dynamic-bg');
  const navbar = document.querySelector('.navbar');
  
  let scrollY = window.scrollY;
  let blurAmount = Math.min(Math.max(scrollY / 80 + 2, 2), 15);

  bg.style.filter = `blur(${blurAmount}px) brightness(0.7)`;
  navbar.style.backdropFilter = `blur(${scrollY < 100 ? 5 : 15}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.marked) {
        const aboutText = document.getElementById("about-text");
        if (aboutText) {
            aboutText.innerHTML = marked.parse(aboutText.textContent);
        }
    }
});