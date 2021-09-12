let basicScrollTop = function () {
  let btnTop = document.querySelector("#goTop");

  let btnReveal = function () {
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };

  let TopscrollTo = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 30);
        TopscrollTo();
      }, 5);
    }
  };

  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};
basicScrollTop();
