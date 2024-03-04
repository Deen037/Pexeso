export const findIndexByTime = (arr, time) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].timeInNumber > time) {
      return i + 1;
    }
  }
  return -1;
};

export function createNumberFrom(time) {
  let output1 = time.split(":");
  let output2 = "";
  output1.forEach((num) => (output2 = output2 + num));
  return Number(output2);
}

export function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.5 },
    tricks: 700,
  });
}

export function getRelativePath(url) {
  const startPos = url.indexOf("/source");
  return "." + url.slice(startPos);
}
