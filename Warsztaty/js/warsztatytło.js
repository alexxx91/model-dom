'use strict'

function ustawTlo() {
    /* document.getElementsByTagName('p')[0].style.background = 'red';
      document.getElementsByTagName('p')[1].style.background = 'yellow';*/

    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        if (i % 2 == 0) {
            document.getElementsByTagName('p')[i].style.background = 'red';
        } else {
            document.getElementsByTagName('p')[i].style.background = 'yellow';
        }
    }

    document.getElementById('clickme').value = 'Zeruj tło';

    document.getElementById('clickme').removeEventListener('click', ustawTlo);
    document.getElementById('clickme').addEventListener('click', zerujTlo);
}


//inne rozwiązanie

/*var pParzyste = document.querySelectorAll('p:nth-child(2n)');
pParzyste.forEach(function(paragraf){
    paragraf.style.background = 'red';
});

var pNieparzyste = document.querySelectorAll('p:nth-child(2n-1)');
pNieparzyste.forEach(function(paragraf){
    paragraf.style.background = 'yellow';
});
}*/

function zerujTlo() {
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.background = '';
    }
    document.getElementById('clickme').value = 'Ustaw tło';


    document.getElementById('clickme').removeEventListener('click', zerujTlo);
    document.getElementById('clickme').addEventListener('click', ustawTlo);
}
document.getElementById('clickme').addEventListener('click', ustawTlo);