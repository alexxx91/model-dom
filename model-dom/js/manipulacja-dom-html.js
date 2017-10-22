'use strict'

var mainHeader = document.getElementById('main-header'); //przypisujemy nagłówek strony do zmiennej

mainHeader.innerHTML = 'Treść nagłówka'; //dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej
link.href = 'http://akademia108.pl'; //nadpisuje atrybut href w linku

console.log(link.classList);

//link.className = 'nowa-klasa'; //nadpisuje nazwę klas w linku

link.className += ' nowa-klasa '; //dodaje klase w linku

mainHeader.style.color = 'red';