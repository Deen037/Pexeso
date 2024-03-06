function detectDevice() {
  const userAgent = navigator.userAgent;

  if (/Mobi|Android/i.test(userAgent)) {
    if (window.innerWidth < window.innerHeight) {
      return "nekeceej";
    }
  } else {
    return "desktop alebo nefunguje";
  }
}

console.log(detectDevice());
