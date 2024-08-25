$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".testimonial-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.removeClass("active").eq(index).addClass("active");
    $(".pagination li").removeClass("active").eq(index).addClass("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Initial slide
  showSlide(currentSlide);

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Manual pagination click
  $(".pagination li a").click(function () {
    currentSlide = $(this).parent().index();
    showSlide(currentSlide);
  });
});
