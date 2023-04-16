window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add('solid');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  });
  