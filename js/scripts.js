/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Slideshow1-----------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// slideshow2---------------------------------------------------------------
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}

// Random Quotes Generator -------------------------------
var quotes = [
  "“Positive thinking helps you frame your mindset and change your life.”",
  "“Life is what happens to us while we are making other plans” ― Allen Saunders",
  "“Life is not about finding yourself. Life is about creating yourself” ― George Bernard Shaw",
  "“Doubt kills more dreams than failure ever will” — Suzy Kassem",
  "“Whether you think you can or think you can't, you are right” — Henry Ford",
  "“The happiness of your life depends on the quality of your thoughts” — Marcus Aurelius",
  "“Keep your face always toward the sunshine, and shadows will fall behind you” — Walt Whitman",
  "“Folks are usually about as happy as they make up their minds to be.” — Abraham Lincoln",
  "“It is during our darkest moments that we must focus to see the light.” — Aristotle",
  "“You learn more from failure than from success. Do not let it stop you. Failure builds character.” — Unknown",
  "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
  "“It is no use going back to yesterday because I was a different person then.” — Alice, Alice In Wonderland",
  "“All our dreams can come true if we have the courage to pursue them.” — Walt Disney",
  "“Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.”- Brian Tracy",
  "“Everything you have ever wanted is on the other side of fear.” — George Addair",
  "“What you lack in talent can be made up with desire, hustle and giving 110% all the time.” — Don Zimmer",
  "“Perfection is not attainable, but if we chase perfection we can catch excellence.” — Vince Lombardi",
  "“May your choices reflect your hopes, not your fears.” — Nelson Mandela",
  "“Remember always that you have not only the right to be an individual; you have an obligation to be one. You cannot make any useful contribution in life unless you do this.” — Eleanor Roosevelt",
  "“Act as if what you do makes a difference. It does.” — William James",
  "“Doing the best at this moment puts you in the best place for the next moment.” ― Oprah Winfrey",
  "“Our greatest glory is not in never failing, but in rising up every time we fail.” ― Ralph Waldo Emerson",
  "“Life is like riding a bicycle. To keep your balance, you must keep moving.” ― Albert Einstein",
  "“Anyone who has never made a mistake has never tried anything new.” ― Albert Einstein",
  "“Courage is more exhilarating than fear and in the long run it is easier. We do not have to become heroes overnight. Just one step at a time, meeting each thing that comes up, seeing it is not as dreadful as it appeared, discovering we have the strength to stare it down.” ― Eleanor Roosevelt",
  "“My best friend is the one who brings out the best in me.” — Henry Ford",
  "“It is not happiness that brings us gratitude. It is gratitude that brings us happiness.”",
  "“A man who holds steadfast to the truth will be a lighthouse to his friends when they are lost at sea.”",
  "“When tempted to fight fire with fire, remember that the Fire Department usually uses water.” — Unknown",
  "“Always remember that you are unique — just like everybody else.” — Unknown",
  "“Do not worry about the world coming to an end today. It is already tomorrow in Australia.” — Charles Schulz",
  "“I am so clever that sometimes I do not understand a single word of what I am saying.” — Oscar Wilde",
  "“Nothing is impossible, the word itself says “I’m possible!”” — Audrey Hepburn",
  "“I have said, Ye are gods; and all of you are children of the most High.” — Psalms 82:6",
  "“He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city.” — Proverbs 16:32",
  "“For all the law is fulfilled in one word, even in this; Thou shalt love thy neighbour as thyself.” — Galatians 5:14"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
