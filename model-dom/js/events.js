'use strict'
var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('Kliknięto w link!');
    
}

secondLink.onclick = alarm;


var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm); //staramy się tego sposobu używać

thirdLink.removeEventListener('click', alarm); //usuwa komunikat

function klikHeader() {
    console.log('Kliknąłeś w header');
}

document.getElementsByTagName('header')
[0].addEventListener('click', klikHeader);

/*function klikH1(e) {
    console.log('Kliknałeś w h1');
}*/

document.getElementsByTagName('h1')[0].addEventListener('click', function(e) {
     e.stopPropagation();                                                 
    console.log('Kliknałeś w h1');
});