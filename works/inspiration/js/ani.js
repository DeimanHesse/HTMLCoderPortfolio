const cards = document.querySelectorAll('.card');

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
    
}

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 8 + 'deg) rotateY(' + 
    (event.offsetX-halfHeight) / 10 + 'deg)';
}
function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    
    cardItem.style.transform = 'rotate(0)';
}

//========================================


// Действия с внутренними элементами, при наведении на внешний

// Внешний элемент
let galleryItems = document.querySelectorAll('.item-gallery');

// Внутренние элементы
let hoverTitle = document.querySelectorAll ('.item-gallery__title');
let hoverSubtitles = document.querySelectorAll ('.item-gallery__subtitle');
let hoverTitles = document.querySelectorAll ('.item-gallery__titles');




for (let index = 0; index < galleryItems.length; index++) {  //цикл для внешнего элемента с его индексом
    const galleryItem = galleryItems[index];
    galleryItem.addEventListener('mouseover', hoverItem);
    galleryItem.addEventListener('mouseout', hoverItem);
    

    function hoverItem () {   //функция внутри цикла с внутренними элементами 
    
        hoverTitles[index].classList.toggle('hover-titles');
        hoverTitle[index].classList.toggle('hover-title');
        hoverSubtitles[index].classList.toggle('hover-subtitle');
    }
}

    




//=================STATISTICS========================
let statisticsItems = document.querySelectorAll('.item-statistics');
let itemIcons = document.querySelectorAll('.item-statistics__icon');

for (let index = 0; index < statisticsItems.length; index++) {  //цикл для внешнего элемента с его индексом
    const statisticsItem = statisticsItems[index];
    statisticsItem.addEventListener('mouseover', hoverItemStat);
    statisticsItem.addEventListener('mouseout', hoverItemStat);
    

    function hoverItemStat () {   //функция внутри цикла с внутренними элементами 
    
        itemIcons[index].classList.toggle('swing');
        
    }
}