/* Home page background video (hero_video).
   Only this small script is needed: HTML and CSS cannot pause a video.
   - Plays muted and inline, and only once it is actually running does it appear.
   - Respects "reduce motion": the video never starts and the still image shows.
   - If the file is missing or cannot play, the still image (img_01) stays.
   - Shows a Pause / Play button while the video is available. */
(function () {
  var video = document.querySelector("[data-hero-video]");
  if (!video) return;
  var button = document.querySelector("[data-hero-video-toggle]");
  var label = button ? button.querySelector("[data-label]") : null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var gone = false;
  function giveUp() {
    gone = true;
    if (video.parentNode) video.parentNode.removeChild(video);
    if (button) button.hidden = true;
  }

  var sources = video.querySelectorAll("source");
  if (sources.length) sources[sources.length - 1].addEventListener("error", giveUp);
  video.addEventListener("error", giveUp);

  if (reduceMotion) { giveUp(); return; }

  function setState(paused) {
    if (!button || gone) return;
    button.setAttribute("aria-pressed", paused ? "true" : "false");
    button.classList.toggle("is-paused", paused);
    if (label) label.textContent = paused ? "Play background video" : "Pause background video";
  }

  video.muted = true;
  video.addEventListener("playing", function () {
    video.classList.add("is-playing");
    if (button) button.hidden = false;
    setState(false);
  });
  video.addEventListener("pause", function () { setState(true); });

  var attempt = video.play();
  if (attempt && attempt.catch) attempt.catch(function () { /* autoplay blocked: keep the still image */ });

  if (button) {
    button.addEventListener("click", function () {
      if (video.paused) { video.play(); } else { video.pause(); }
    });
  }
})();
