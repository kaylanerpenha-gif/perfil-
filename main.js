// main.js — modal para ampliar imagens
(function(){
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-img');
  const caption = document.getElementById('img-modal-caption');
  const closeBtn = document.getElementById('img-modal-close');
  const overlay = document.querySelector('.img-modal__overlay');

  function open(src, title, alt){
    modalImg.src = src;
    modalImg.alt = alt || title || '';
    caption.textContent = title || '';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    modal.setAttribute('aria-hidden','true');
    modalImg.src = '';
    caption.textContent = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('img.clickable').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(img.src, img.dataset.title || img.alt, img.alt));
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
