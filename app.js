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
  this.imageName = getElement('image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.containter.addEventListener('click', function (e) {
    if (e.target.classList.contains('img')) {
      this.openModal(e.target, this.list);
    }
  }.bind(this));
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modal.classList.add('open');
}

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));