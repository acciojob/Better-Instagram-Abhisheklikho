const images = document.querySelectorAll('.image');

let currentDrag;

function dragStart() {
  currentDrag = this;
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop() {
  this.classList.remove('hovered');
  const temp = this.innerHTML;
  this.innerHTML = currentDrag.innerHTML;
  currentDrag.innerHTML = temp;
}

function dragOver(e) {
  e.preventDefault();
}

images.forEach((image) => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', dragDrop);
  image.addEventListener('dragover', dragOver);
});
