//COUNTDOWN 	|||
//				VVV

var svolg = "Il gruppo di lettura si sta svolgendo";
var agg = "Il countdown deve essere aggiornato. Se è passato troppo tempo, contatta l'amministratore del sito aprendo un'issue su github oppure manda una mail all'indirizzo presente su github"

// Data del prossimo incontro
var countDownDate = new Date("Jul 29, 2022 16:30:00").getTime();

// Aggiorna il countdown mostrato ogni 10 secondi
var time = setInterval(function() {
	
	// Data di oggi
	var now = new Date().getTime();

	// Distanza tra le date
	var distance = countDownDate - now;

	// Calcoli per sapere giorni, ore e minuti mancanti
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	// var seconds = Math.floor((distance % (1000 * 60)) / 1000);   //INUTILIZZATO

	var testo = "Mancano " + days + " giorni, " + hours + " ore, e " + minutes +  " minuti al prossimo gruppo di lettura<br>"

	// Mostra su index e partecipa due testi diversi
	if(document.URL.includes("index")) {
		document.getElementById("countdown").innerHTML = testo + "La data potrebbe variare, se vuoi partecipare ed essere sicuro della data e dell'ora, contattaci in uno dei modi scritti in <a href=\"/pages/partecipa.html\">Partecipa</a>";
	} else if (document.URL.includes("partecipa")) {
		document.getElementById("countdown-part").innerHTML = "Mancano " + days + " giorni, " + hours + " ore, e " + minutes + " minuti al prossimo gruppo di lettura<br>La data potrebbe variare, se vuoi partecipare ed essere sicuro della data e dell'ora, contattaci in uno dei modi scritti qui. Ci troviamo l'ultimo venerdì del mese, solitamente alle 4:30";
	}
	
	// Parte di codice eseguita se distance<0 (seconda parte se sono passate più di tre ore dall'inizio dell'incontro)
	if (distance < 0) {
		if(distance < -10800000) {
			if(document.URL.includes("index")) {
				document.getElementById("countdown").innerHTML = agg;
			} else if (document.URL.includes("partecipa")) {
				document.getElementById("countdown-part").innerHTML = agg;
			}
		} else {
			if(document.URL.includes("index")) {
				document.getElementById("countdown").innerHTML = svolg;
			} else if (document.URL.includes("partecipa")) {
				document.getElementById("countdown-part").innerHTML = svolg;
			}
		}
		clearInterval(time);
	}
}, 1000);
//document.getElementById("countdown").innerHTML = "La data per quest'incontro non è ancora stata stabilita";

// Thanks to w3schools!
//COUNTDOWN 	^^^
//				|||