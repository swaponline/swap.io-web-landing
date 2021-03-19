window.onload = () => {
  window.setBackground = (id) => {
    var classList = document.getElementById("wrapper").classList;
    for (var i = 1; i < classList.length; i++) {
      classList.remove(classList[i]);
    }
    classList.add(`type-${id}-before`);
    classList.add(`type-${id}-after`);
    setTimeout(() => {
      for (var i = 1; i < classList.length; i++) {
        if (classList[i].includes('-before')) classList.remove(classList[i]);
      }
    }, 400)
  }

  window.sendEmail = (e) => {
    e.preventDefault();
  }
  // resize();
  // window.addEventListener('resize', resize)

  // function resize() {
  //   const vw = window.innerWidth * 0.01
  //   document.documentElement.style.setProperty('--vw', `${vw}`)
  // }
}
