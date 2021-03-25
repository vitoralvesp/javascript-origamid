export default function initAccordion() {
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


