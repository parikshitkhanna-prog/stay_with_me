document.addEventListener("DOMContentLoaded", function () {
    // Simulate text loading one after the other
    animateText("text1", 1000);
    setTimeout(() => animateText("text2", 1), 3000);
    setTimeout(() => animateText("text3", 2), 5000);
  
    // Simulate content loading (replace this with your actual content loading logic)
    setTimeout(function () {
      document.querySelector(".loading-container").style.display = "none";
      document.querySelector(".content").style.display = "block";
    }, 7000); // Adjust the time based on your content loading time
  
    function animateText(textId, index) {
      const textElement = document.getElementById(textId);
      setTimeout(() => {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
      }, index * 500); // Adjust the delay between text elements
    }
  });



  // Set the date we're counting down to
var countDownDate = new Date("Feb 7, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);

  // If the countdown is over, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<p>It's time for something amazing!</p>";
  }
}, 1000);

// Format time to add leading zeros
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
