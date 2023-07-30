// Pomicanje lijevo
function moveCarouselLeft() {
  const rowFirst = document.getElementById('row-first');
  const rowSecond = document.getElementById('row-second');

  rowFirst.style.transition = 'transform 0.5s ease';
  rowSecond.style.transition = 'transform 0.5s ease';

  rowFirst.insertBefore(rowFirst.lastElementChild, rowFirst.firstElementChild);

  // dodavanje prve slike na kraj reda
  rowSecond.appendChild(rowSecond.firstElementChild.cloneNode(true));
  rowSecond.removeChild(rowSecond.firstElementChild);
}

// pomicanje desno
function moveCarouselRight() {
  const rowFirst = document.getElementById('row-first');
  const rowSecond = document.getElementById('row-second');

  rowFirst.style.transition = 'transform 0.5s ease';
  rowSecond.style.transition = 'transform 0.5s ease';

  rowFirst.appendChild(rowFirst.firstElementChild.cloneNode(true));
  rowFirst.removeChild(rowFirst.firstElementChild);

  // dodavanje zadnje slike na početak
  rowSecond.insertBefore(rowSecond.lastElementChild, rowSecond.firstElementChild);
}

document.querySelector('.prev-btn').addEventListener('click', moveCarouselRight);
document.querySelector('.next-btn').addEventListener('click', moveCarouselLeft);