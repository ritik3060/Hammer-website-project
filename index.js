  const slides = document.querySelector('.slides1');
  const slideCount = document.querySelectorAll('.slide1').length;
  const dotsContainer = document.querySelector('.dots1');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  });

  // Auto-slide every 4s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }, 4000);

const buyBtn = document.getElementById("buyNowBtn");

buyBtn.addEventListener("click", () => {
  buyBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    buyBtn.style.transform = "scale(1)";
  }, 200);

  alert("Redirecting to checkout page...");
});
gsap.to("#top",{
  backgroundColor:"#121826",
  height:"200px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#top",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1,
  }


})



