function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else if (!element.className.includes(className)) {
    element.className += " " + className;
  }
}

addClass(document.getElementById("more-leaderboard"), "hidden");
