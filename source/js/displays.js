function detectDevice() {
  const userAgent = navigator.userAgent;
  const phoneRotation = document.getElementById("phoneRotation");

  if (/Mobi|Android/i.test(userAgent)) {
    if (window.innerWidth < window.innerHeight) {
      phoneRotation.style.display = "flex";
      setTimeout(() => {
        phoneRotation.style.display = "none";
      }, 3000);
    }
  }
}

detectDevice();
