// -------------------------
const offset = 100; // at least 100 px are a swipe
let xDown, yDown

window.addEventListener('touchstart', (e) => {
  const firstTouch = getTouch(e);

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
});

window.addEventListener('touchend', (e) => {
  if (!xDown || !yDown) {
    return;
  }

  const {
    clientX: xUp,
    clientY: yUp
  } = getTouch(e);
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  const xDiffAbs = Math.abs(xDown - xUp);
  const yDiffAbs = Math.abs(yDown - yUp);

  // at least <offset> are a swipe
  if (Math.max(xDiffAbs, yDiffAbs) < offset) {
    return;
  }

  if (xDiffAbs > yDiffAbs) {
    if (xDiff > 0) {
      console.log('left');
    } else {
      console.log('right');
    }
  } else {
    if (yDiff > 0) {
      console.log('up');
    } else {
      console.log('down');
    }
  }
});

function getTouch(e) {
  return e.changedTouches[0]
}
// -------------------------


