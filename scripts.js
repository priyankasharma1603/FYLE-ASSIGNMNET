$(document).ready(function() {
  // Pop-up form functionality
  $('#contact-us-button').click(function() {
      $('#contact-popup').fadeIn();
  });
  $('#contact-popup').click(function(e) {
      if (e.target == this) {
          $(this).fadeOut();
      }
  });

  // Form submission to Getform.io
  $('#contact-form').submit(function(e) {
      e.preventDefault();
         
    var formData = {
      
  };
      $.ajax({
          url: 'https://getform.io/f/azylwqlb',
          method: 'POST',
          data: $(this).serialize(),
          success: function(response) {
              alert('Form submitted successfully!');
              $('#contact-popup').fadeOut();
          },
          error: function(error) {
              alert('There was an error submitting the form.');
          }
      });
  });

  // Dynamic image change
  $('.project-item').click(function() {
      var imageSrc = $(this).data('image');
      $('#project-image').attr('src', imageSrc);
  });

  // Slider functionality
  let currentSlide = 0;
  const slides = $('#slider img');
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.each((i, slide) => {
          $(slide).css('transform', `translateX(${100 * (i - index)}%)`);
      });
  }

  setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
      $('.dot').removeClass('active');
      $(`.dot[data-slide=${currentSlide}]`).addClass('active');
  }, 3000);

  showSlide(currentSlide);

  $('.dot').click(function() {
      currentSlide = $(this).data('slide');
      showSlide(currentSlide);
      $('.dot').removeClass('active');
      $(this).addClass('active');
  });
});
$(document).ready(function(){
  // Initialize carousel
  $('#servicesCarousel').carousel({
      interval: 3000
  });

  // Hover effect on images
  $('.carousel-item img').addClass('hover-effect');

  // 'Read More' button click
  $(".read-more-btn").click(function(){
      window.open('https://fylehq.com', '_blank');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          dots[currentIndex].classList.remove('active');
          dot.classList.add('active');
          currentIndex = index;
          // Logic to change the visible service item goes here.
      });
  });
});


// Example: Adding an animation class to stat cards on hover
document.querySelectorAll('.stat-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});


function changeImage(imagePath) {
  document.getElementById('project-image').src = imagePath;
}
