export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
    function animaScroll() {
        sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('active');
        else if (section.classList.contains('active')) {
          section.classList.remove('active');
        }
      });
    };
  
    animaScroll();
 
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();