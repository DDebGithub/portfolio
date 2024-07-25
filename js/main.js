(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});
})(jQuery);

 // Current Working Hours Counter Script Start

function startTicker() {
  var tickerElement = document.getElementById("timer");
  var startDate = new Date("March 15, 2022 00:00:00");
  setInterval(function() {
    var currentTime = new Date();
    var duration = calculateDuration(startDate, currentTime);
    tickerElement.textContent = formatDuration(duration)
    //workTicker.textContext = workedTime + duration ;
  }, 1000); // Update every second
}

function calculateDuration(startDate, endDate) {
  var timeDiff = endDate.getTime() - startDate.getTime();
  var totalSeconds = Math.floor(timeDiff / 1000);

  var years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
  totalSeconds -= years * (365 * 24 * 60 * 60);

  var months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  totalSeconds -= months * (30 * 24 * 60 * 60);

  var days = Math.floor(totalSeconds / (24 * 60 * 60));
  totalSeconds -= days * (24 * 60 * 60);

  var hours = Math.floor(totalSeconds / (60 * 60));
  totalSeconds -= hours * (60 * 60);

  var minutes = Math.floor(totalSeconds / 60);
  totalSeconds -= minutes * 60;

  return {
    years: years,
    months: months,
    days: days,
    //hours: hours,
    //minutes: minutes,
    //seconds: totalSeconds
  };
}

function formatDuration(duration) {
  var formatted = "";

  if (duration.years > 0) {
    formatted += duration.years + " years ";
  }
  if (duration.months > 0) {
    formatted += duration.months + " months ";
  }
  if (duration.days > 0) {
    formatted += duration.days + " days ";
  }
  if (duration.hours > 0) {
    formatted += duration.hours + " hours  ";
  }
  if (duration.minutes > 0) {
    formatted += duration.minutes + " minutes ";
  }
  if (duration.seconds > 0) {
    formatted += duration.seconds + "s";
  }

  return formatted;
  
}

// Start the ticker
startTicker();
// Current Working Hours Counter Script End


// Working Hours Clocked Script Start
window.addEventListener('DOMContentLoaded', (event) => {
    // Constants for calculations
    const hoursPerDay = 24;
    const daysPerYear = 365.25; // Taking into account leap years
    const daysPerMonth = 30.44; // Average month length

    // Get the current time
    const currentTime = new Date();

    // Initial work start date
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 6); // Subtract 6 years
    startDate.setMonth(startDate.getMonth() - 5); // Subtract 5 months

    // Initialize total hours worked with the initial value or retrieve from localStorage
    let initialHoursWorked = 56208;
    let totalHoursWorked = parseInt(localStorage.getItem('totalHoursWorked')) || initialHoursWorked;
    let lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        lastVisit = new Date(lastVisit);
        // Calculate hours passed since last visit
        const hoursSinceLastVisit = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60));
        totalHoursWorked += hoursSinceLastVisit;
    }

    // Store the current visit time in localStorage
    localStorage.setItem('lastVisit', currentTime);

    // Get the HTML elements to display the timer
    const timerElement = document.getElementById('hoursWorked');
    const yearElement = document.getElementById('yearsWorked');

    function updateWorkHours() {
        // Calculate total days and years worked
        const totalDays = totalHoursWorked / hoursPerDay;
        const years = Math.floor(totalDays / daysPerYear);

        // Format the total hours with commas
        const formattedHours = totalHoursWorked.toLocaleString('en-US');

        // Update the timer element with the formatted total hours and years
        timerElement.textContent = formattedHours;
        yearElement.textContent = years;

        // Store the updated total hours in localStorage
        localStorage.setItem('totalHoursWorked', totalHoursWorked);
    }

    // Initial update
    updateWorkHours();

    // Update the total hours worked every hour
    setInterval(() => {
        totalHoursWorked++;
        updateWorkHours();
    }, 3600000); // 3600000 milliseconds = 1 hour
});
// Working Hours Clocked Script End

// Contact Form Github Request Starts

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('https://api.github.com/repos/DDebGithub/portfolio/dispatches', {
            method: 'POST',
            headers: {
                'Authorization': 'token CONTACT_FORM_TOKEN',
                'Accept': 'application/vnd.github.+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_type: 'form_submission',
                client_payload: formData,
            }),
        });

       if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            const result = await response.json();
            console.log('Error:', result);
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.log('Catch Error:', error);
        alert('Error: ' + error.message);
    }
});
// Contact Form Github Request Ends
