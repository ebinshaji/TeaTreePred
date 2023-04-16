window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 800) {
      header.classList.add('solid');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var typed2 = new Typed('.text', {
      strings: ['Detecting Tea Leaves Disease with Machine Learning:\n A Smart Solution for Healthy Tea Production', 'Tea production is a vital industry in many countries,\n but diseases can significantly impact crop yields and quality.\n Traditional disease detection methods are often\n time-consuming and require manual inspection,\n making them inefficient for large-scale production.','Our tea leaves disease detection system uses machine learning algorithms to\n quickly and accurately detect disease symptoms in tea leaves,\n allowing farmers to identify and treat problems early.\n By analyzing leaf images with high precision, our system helps\n ensure healthy and high-quality tea production, reducing losses and increasing yields.','Try our tea leaves disease detection\n system today and experience the benefits of smart, data-driven tea farming.'],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      loop: true
    });
  });
  