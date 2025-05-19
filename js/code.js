/* Fixing mobile scroll
It's ideal to place this code at the very top of your JavaScript file,so it runs as early as possible when the page loads.
This script calculates the actual viewport height and sets it as a CSS variable (--vh).
It fixes the 100vh issue on mobile devices by excluding the browser UI (like the address bar).
The --vh variable is then used in CSS to apply the correct height.
This function runs on load and updates on window resize to keep the value accurate.
*/
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}
setVh();
window.addEventListener("resize", setVh);


