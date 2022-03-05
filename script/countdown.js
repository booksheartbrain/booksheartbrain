
//COUNTDOWN 	|||
//				VVV

// Set the date we're counting down to
var countDownDate = new Date("Mar 25, 2022 16:30:00").getTime();

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
	document.getElementById("countdown").innerHTML = "Mancano " + days + " giorni, " + hours + " ore, e " + minutes + " minuti al prossimo gruppo di lettura<br>La data potrebbe variare";

	//document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(time);
		document.getElementById("countdown").innerHTML = "Il gruppo di lettura si sta svolgendo";
	}
}, 1000);
//document.getElementById("countdown").innerHTML = "La data per quest'incontro non è ancora stata stabilita";

// Thanks to w3schools!
//COUNTDOWN 	^^^
//				|||