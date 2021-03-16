window.onload = () => {
  window.setBackground = (id) => {
    var classList = document.getElementById("wrapper").classList;
    for (var i = 1; i < classList.length; i++) {
      classList.remove(classList[i]);
    }
    classList.add(`type-${id}`)
  }

  window.sendEmail = (e) => {
    e.preventDefault();
  }
}
