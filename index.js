
/*var app = new Vue({
  el: '#uno',
  data: {
    tema: 'Sasso',
    giorno: 'domenica 3',
    titolo: 'The Stone',
    autore: 'Guido Sgardoli'
  }
})
var app = new Vue({
  el: '#due',
  data: {
    tema: 'Sasso',
    giorno: 'domenica 3',
    titolo: 'The Stone',
    autore: 'Guido Sgardoli'
  }
})
var app = new Vue({
  el: '#tre',
  data: {
    tema: 'Sasso',
    giorno: 'domenica 3',
    titolo: 'The Stone',
    autore: 'Guido Sgardoli'
  }
})*/


window.vueApp = new Vue({
  el: '#listalibri',
  data: {
    temi: [
      'Insetti',
      'Giardino',
      'Sasso'
    ],
    giorni: [
      'Pride and Prejudice',
      'Brave New World',
      '1984'
    ]
  }
});






/*window.vueApp = new Vue({
  el: '#vue-app',
  data: {
    movies: [
      'Back to the Future',
      'Matrix',
      'Indipendence Day'
    ],
    books: [
      'Pride and Prejudice',
      'Brave New World',
      '1984'
    ]
  }
});*/