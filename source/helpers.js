export const findIndexByTime = (arr, time) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].timeInNumber > time) {
      return i + 1;
    }
  }
  return -1;
};
