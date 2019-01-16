  function revealExtra(extraName) {
    var x = document.getElementById(extraName);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }