let basicScrollTop = function () {
  // The button
  let btnTop = document.querySelector("#goTop");
  // Reveal the button
  let btnReveal = function () {
    let position = document.querySelector("#position");
    position.innerHTML = window.scrollY + "px";
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };
  // Smooth scroll top
  // Thanks to => http://stackoverflow.com/a/22610562
  let TopscrollTo = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 30);
        TopscrollTo();
      }, 5);
    }
  };
  // Listeners
  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};
basicScrollTop();
