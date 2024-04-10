document.addEventListener('DOMContentLoaded', function () {
  const search = document.querySelector('.search');
  const galleryForm = document.querySelector('.gallery-form');

  function showGalleryForm() {
    galleryForm.style.display = 'block';
  }

  function hideGalleryForm() {
    galleryForm.style.display = 'none';
  }

  search.addEventListener('click', function (event) {
    event.stopPropagation();
    showGalleryForm();
  });

  document.addEventListener('click', function (event) {
    const isClickInsideForm = galleryForm.contains(event.target);
    const isClickInsideSearch = search.contains(event.target);
    if (!isClickInsideForm && !isClickInsideSearch) {
      hideGalleryForm();
    }
  });
});
