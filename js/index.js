document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("grid-item-header");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.parentNode.classList.toggle("active");
    });
  }
});