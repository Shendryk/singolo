document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('#main>section');
    const links = document.querySelectorAll('#header-menu a');
    

    
    sections.forEach((el) => {
        // debugger;
        el.getAttribute('id');

        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
           links.forEach((a) => {
               a.classList.remove('selected');
               if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('selected');
                   
               }
               
           })  
           
        }
        
    });

}