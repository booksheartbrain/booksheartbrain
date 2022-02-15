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




//FOOTER 		|||
//				VVV

var footer = '<div class="content has-text-centered"><img src="/assets/undraw_book_lover_mkck.svg" alt="" class="vectorial-image is-centered"><p>Sito creato da <a href="https://github.com/GicoProgram" target="_blank">Giacomo R.</a> nell\'organizzazione <a href="https://github.com/booksheartbrain" target="_blank">Books, Heart and Brain</a> </p></div>';

document.getElementById("footer").innerHTML = footer;




//HEADER

var header = '<header class="py-3"><nav class="navbar" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="my-logo" href="/index.html"><img alt="logo del gruppo" src="/assets/booksheartandbrain.webp" width="100" height="100"></a><a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div class="navbar-menu" id="navMenu"><div class="navbar-end"><a href="/index.html" class="navbar-item"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home</a><a href="/pages/partecipa.html" class="navbar-item"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;Partecipa</a><a href="/pages/eventi/eventi.html" class="navbar-item"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;Eventi</a><a href="/pages/ciaksilegge.html" class="navbar-item"><i class="fa fa-film" aria-hidden="true"></i>&nbsp;Ciak si legge</a><div class="navbar-item has-dropdown is-hoverable" tabindex="0"><a class="navbar-link"><i class="fa fa-book" aria-hidden="true"></i>&nbsp;Libri</a><div class="navbar-dropdown is-right"><a class="navbar-item" href="/pages/libri/letti.html" tabindex="0"><i class="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Il quaderno dei suggerimenti</a><a class="navbar-item" href="/pages/libri/consigli.html" tabindex="0"><i class="fa fa-certificate" aria-hidden="true"></i>&nbsp;Libri con bollino</a></div></div></div></div></nav></header>';
document.getElementById("header").innerHTML = header;
