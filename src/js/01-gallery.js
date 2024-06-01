import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const fragment = document.createDocumentFragment();

galleryItems.forEach(({ preview, original, description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery-image');
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);
  fragment.appendChild(listItem);
});

gallery.appendChild(fragment);

new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 100,
  close: false,
  showCounter: false,
  animationSlide: false,
  fadeSpeed: 250,
});
