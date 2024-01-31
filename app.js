document.addEventListener("DOMContentLoaded", function () {
    animateText("text1", 1000);
    setTimeout(() => animateText("text2", 1), 3000);
    setTimeout(() => animateText("text3", 2), 5000);
    setTimeout(() => animateText("text4", 3), 7000);
  
 
    setTimeout(function () {
      document.querySelector(".loading-container").style.display = "none";
      document.querySelector(".content").style.display = "block";
    }, 9000);
  
    function animateText(textId, index) {
      const textElement = document.getElementById(textId);
      setTimeout(() => {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
      }, index * 500); 
    }
  });




var countDownDate = new Date("Feb 7, 2024 00:00:00").getTime();
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);


    if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<p>It's time for something amazing!</p>";
  }
}, 1000);


function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
