$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['Software Engineer', 'Problem Solver'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['Software Engineer', 'Problem Solver'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });
});

let contactForm = document.querySelector('.contact form');
let submitButton = document.querySelector('.contact .button-area button');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const object = Object.fromEntries(formData);
  const jsonData = JSON.stringify(object);
  submitButton.innerHTML = 'Sending...';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: jsonData,
  })
    .then(async (response) => {
      if (response.status == 200) {
        submitButton.innerHTML = 'Success';
        submitButton.classList.add('success');
        contactForm.reset();
        setTimeout(() => {
          submitButton.classList.remove('success');
          submitButton.innerHTML = 'Send message';
        }, 3000);
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch((error) => {
      console.log(error);
      submitButton.innerHTML = 'Error';
      submitButton.classList.add('error');
      setTimeout(() => {
        submitButton.classList.remove('error');
        submitButton.innerHTML = 'Send message';
      }, 3000);
    });
});
