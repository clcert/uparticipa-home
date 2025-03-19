if (document.readyState !== 'loading') {
  console.log('document is already ready, just execute code here');
  const cardToggles = document.getElementsByClassName('card-toggle');
  for (let i = 0; i < cardToggles.length; i++) {
    cardToggles[i].addEventListener('click', e => {
      e.currentTarget.parentElement.parentElement.childNodes[1].classList.toggle('is-hidden');
    });
  }
} else {
  document.addEventListener('DOMContentLoaded', function () {
    console.log('document was not ready, place code here');
    const cardToggles = document.getElementsByClassName('card-toggle');
    for (let i = 0; i < cardToggles.length; i++) {
      cardToggles[i].addEventListener('click', e => {
        e.currentTarget.parentElement.parentElement.childNodes[1].classList.toggle('is-hidden');
      });
    }
  });
}