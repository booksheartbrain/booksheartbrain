document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      	// Add a click event on each of them
      	$navbarBurgers.forEach( el => {
        	el.addEventListener('click', () => {
  
        	// Get the target from the "data-target" attribute
          	const target = el.dataset.target;
          	const $target = document.getElementById(target);
  
          	// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          	el.classList.toggle('is-active');
          	$target.classList.toggle('is-active');
  
        	});
      	});
    }
});

// ^ bulma

// ---------------------------------------------------------------------------------------------------------------------------


//COUNTDOWN 	|||
//				VVV

// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2021 16:30:00").getTime();

// Update the count down every 1 second
var time = setInterval(function() {
	
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// var seconds = Math.floor((distance % (1000 * 60)) / 1000);   //INUTILIZZATO

	// Display the result in the element with id="countdown"
	document.getElementById("countdown").innerHTML = "Mancano " + days + " giorni, " + hours + " ore, e " + minutes + " minuti al prossimo gruppo di lettura<br>DATA PROVVISORIA";

	//document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(time);
		document.getElementById("countdown").innerHTML = "Il gruppo di lettura si sta svolgendo";
	}
}, 1000);

// Thanks to w3schools!
//COUNTDOWN 	^^^
//				|||

// ---------------------------------------------------------------------------------------------------------------------------


//FOOTER 		|||
//				VVV

var footer = '<div class="content has-text-centered"><img src="/assets/undraw_book_lover_mkck.svg" alt="" class="vectorial-image is-centered"><p>Sito creato da <a href="https://github.com/GicoProgram" target="_blank">Giacomo R.</a></p></div>';

document.getElementById("footer").innerHTML = footer;