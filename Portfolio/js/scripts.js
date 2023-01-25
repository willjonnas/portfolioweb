function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "End of sales in: " + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    }

window.onload = function () {
        var duration = 60 * 10; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer

        slide1();  // <-- inicializa o slide automatico
    };

function slide1(){
    var image = document.getElementById("img-slide");
    image.src="assets/img/intro.jpg";
    setTimeout("slide2()", 3000)
    }
    
function slide2(){
    var image = document.getElementById("img-slide");
    image.src="assets/img/intro2.jpg";
    setTimeout("slide3()", 3000)
    }
    
function slide3(){
    var image = document.getElementById("img-slide");
    image.src="assets/img/intro3.png";
    setTimeout("slide1()", 3000)
    }

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var span = document.getElementById('datenow');
let today = new Date();
while( span.firstChild ) {
    span.removeChild( span.firstChild );
}
span.appendChild( document.createTextNode( today.toLocaleDateString("en-US", options)) );
