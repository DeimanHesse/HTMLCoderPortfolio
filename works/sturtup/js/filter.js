const filterBox = document.querySelectorAll('.box');

document.querySelector('.examples-works__menu').addEventListener('click', (event)=> {
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        setTimeout(1000);
        elem.classList.remove('hide2');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all') {
            elem.classList.add('hide');
            elem.classList.remove('hide2');
        }
    })
});



