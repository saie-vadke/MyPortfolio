
const toggle = document.getElementById('toggle');

function myfunction(){

    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'styles.css') {
        theme.setAttribute('href', 'darksheet.css');
    } else {
        theme.setAttribute('href', 'styles.css');
    }

    
}



   





var preloader = document.getElementById('loading');
function loaded(){
    preloader.style.display = 'none';
}

