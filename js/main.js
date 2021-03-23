window.onload = () => {
  window.setBackground = (id) => {
    let classList = document.getElementById("wrapper").classList;
    for (let i = 1; i < classList.length; i++) {
      classList.remove(classList[i]);
    }
    classList.add(`type-${id}-before`);
    classList.add(`type-${id}-after`);
    setTimeout(() => {
      for (let i = 1; i < classList.length; i++) {
        if (classList[i].includes('-before')) classList.remove(classList[i]);
      }
    }, 400)
  }
  
  // создаём новый тег 'link' для iFrame и заполняем его 'href', 'rel' и 'type' 
  let iframeLink = document.createElement('link');
  iframeLink.href = './css/frameForm.css'; // css файл для iFrame 
  iframeLink.rel = 'stylesheet';
  iframeLink.type = 'text/css';

  // создаём новый тег 'link' для iFrame и заполняем его 'href', 'rel' и 'type' 
  let googleFontIframe = document.createElement('link');
  googleFontIframe.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'; // css файл для iFrame 
  googleFontIframe.rel = 'stylesheet';
  let cssFrameInterval = setInterval(() => {
    if (frames[0]) {
      let iframe = document.querySelector('iframe');
      iframe.style.width = "100%";
      iframe.style.height = "auto";
      // вставляем в [0] - индекс iframe 
      frames[0].document.head.appendChild(iframeLink);
      frames[0].document.head.appendChild(googleFontIframe);
      frames[0].document.getElementById("email-5c0b1dde-46c2-4867-9746-66c669b916e9").attributes.placeholder.value = "Email";
      resize();
      clearInterval(cssFrameInterval)
    } else {
      document.getElementById("mainInput").style.display = "flex";
    }
  }, 100)

  window.addEventListener('resize', resize);
  resize();

  function resize() {
    if (window.innerWidth > 1280) {
      if (frames[0]) {
        frames[0].document.querySelector("form").classList.remove("phone");
        frames[0].document.querySelector("form").classList.remove("tablet");
        frames[0].document.querySelector("form").classList.add("desktop");
      }
    } else if (window.innerWidth < 1281 && window.innerWidth > 768) {
      if (frames[0]) {
        frames[0].document.querySelector("form").classList.remove("desktop");
        frames[0].document.querySelector("form").classList.remove("phone");
        frames[0].document.querySelector("form").classList.add("tablet");
      }
    } else if (window.innerWidth < 769) {
      if (frames[0]) {
        frames[0].document.querySelector("form").classList.remove("desktop");
        frames[0].document.querySelector("form").classList.remove("tablet");
        frames[0].document.querySelector("form").classList.add("phone");
      }
    }
  }
}
