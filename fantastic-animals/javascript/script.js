function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');
    
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            });
        
            tabContent[index].classList.add('active');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function() {
                activeTab(index);
            });
        });
    }
};

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const classActive = 'active';
    if(accordionList.length) {
        accordionList.classList.add(classActive);
        accordionList.nextElementSibling.classList.add('active');
        
        function activeAccordion() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        };
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
};

initAccordion();

function initScroll() {
    const internLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: start,
        });
        
        /* Alternative Form
        const top = section.offsetTop();
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
        */
    }
    
    internLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

initScroll();


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('active');
          else 
            section.classList.remove('active');
        });
      };
  
      animaScroll();
  
      window.addEventListener('scroll', animaScroll);
    }
  }
  initAnimacaoScroll();