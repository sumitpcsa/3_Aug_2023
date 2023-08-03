function getSurprise() {
  document.getElementById("outer").classList.toggle("hide");
  music.play();

}

function goBack() {
  document.getElementById('outer').className = 'outer'
  music.pause();
}

function whatsapp() {
  window.location.href = "http://wa.me/919582004427";
}

function call() {
  window.location.href = "tel:+917428843215";
}

const music = document.getElementById("myAudio");

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}