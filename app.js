function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check your "${selection}" selector`
  );
}

function Gallery(element) {
  this.containter = element;
  this.list = [...element.querySelectorAll('.img')];
  
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.containter.addEventListener('click', function (e) {
    console.log(this);
    this.openModal();
  }.bind(this));
}

Gallery.prototype.openModal = function () {
  console.log('open modal');
  this.modal.classList.add('open');
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));