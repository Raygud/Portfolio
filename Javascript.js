var a = 0;
var b = 0;
var c = 0;
var d = 0;
var txt1 = 'Rúni Gudmundarson'; /* The text */
var txt2 = 'Age: 26'; /* The text */
var txt3 = 'Location: Aalborg, Denmark'; /* The text */
var txt4 = 'Language: English, Danish & Faroese'; /* The text */

var speed = 100; /* The speed/duration of the effect in milliseconds */

function TypeWriterName() {
  if (a < txt1.length) {
    document.getElementById("Name").innerHTML += txt1.charAt(a);
    a++;
    setTimeout(TypeWriterName, speed);
  }
}
function TypeWriterAge() {
    if (b < txt2.length) {
      document.getElementById("Age").innerHTML += txt2.charAt(b);
      b++;
      setTimeout(TypeWriterAge, speed);
    }
  }
  function TypeWriterLocation() {
    if (c < txt3.length) {
      document.getElementById("Location").innerHTML += txt3.charAt(c);
      c++;
      setTimeout(TypeWriterLocation, speed);
    }
  }
  function TypeWriterLanguage() {
    if (d < txt4.length) {
      document.getElementById("Languages").innerHTML += txt4.charAt(d);
      d++;
      setTimeout(TypeWriterLanguage, speed);
    }
  }


function About() {
setTimeout(function(){ document.getElementById("Line1").style.width = "35vw" }, 500);
setTimeout(function(){ document.getElementById("Line2").style.height = "10vw" }, 1000);
setTimeout(function(){ document.getElementById("Line3").style.width = "25vw" }, 1440);
setTimeout(function(){ document.getElementById("Line4").style.width = "2vw" }, 1900);

setTimeout(function(){ TypeWriterName()}, 2300);
setTimeout(function(){ document.getElementById("Line5").style.width = "1.3vw" }, 3800);
setTimeout(function(){ TypeWriterAge()}, 4300);
setTimeout(function(){ document.getElementById("Line6").style.width = "1vw" }, 5300);
setTimeout(function(){ TypeWriterLocation()}, 5800);
setTimeout(function(){ document.getElementById("Line7").style.width = "1vw" }, 8800);
setTimeout(function(){ TypeWriterLanguage()}, 9000);





}

function AboutOut() {
  setTimeout(function(){ document.getElementById("Line4").style.width = "0vw" }, 300);
  setTimeout(function(){ document.getElementById("Line5").style.height = "0vw" }, 600);
  setTimeout(function(){ document.getElementById("Line6").style.width = "0vw" }, 900);
  setTimeout(function(){ document.getElementById("Line7").style.width = "0vw" }, 1200);
    setTimeout(function(){ document.getElementById("Line3").style.width = "0vw" }, 2000);
    setTimeout(function(){ document.getElementById("Line2").style.height = "0vw" }, 2500);
    setTimeout(function(){ document.getElementById("Line1").style.width = "0vw" }, 3000);
    }
    