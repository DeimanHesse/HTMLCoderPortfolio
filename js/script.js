        //переменные для меню
        let home = document.querySelector('#home');
        let about = document.querySelector('#about'); 
        let portfolio = document.querySelector('#portfolio');
        let resume = document.querySelector('#resume');
        let contact = document.querySelector('#contact');

//переменные всплывашки
        let home2 = document.querySelector('#home2');
        let about2 = document.querySelector('#about2'); 
        let portfolio2 = document.querySelector('#portfolio2');
        let resume2 = document.querySelector('#resume2');
        let contact2 = document.querySelector('#contact2');

        
        let animItems = document.querySelectorAll('._anim-items');


        let site = document.querySelector('.siteContent');
        let y2 = 0;

        ani();


//функции кнопочек
let btnUp = document.querySelector('.button-block__up');
let btnDown = document.querySelector('.button-block__down');

btnDown.onclick = function () {
    if (y2+100<=400) {
        if(y2==100) {
            y2 = y2+100;
            site.style.transform = 'translateY('+ (-100) + 'vh)';
            y1 = y1+50;
            left.style.transform = 'translateY('+(pf+ y1) +'%)';
            right.style.transform = 'translateY('+(-y1) +'%)';
        }
        
        else {
            if(y2==200) {
                y2 = y2+100;
                site.style.transform = 'translateY('+ (-200) + 'vh)';
            }
            else {
                if (y2==300) {
                    y2=y2+100;
                    site.style.transform = 'translateY('+ (-300) + 'vh)';
                }
                else {
                    y2=y2+100;
            site.style.transform = 'translateY('+ (-y2) + 'vh)';
                }
            
            }
        }
    
    }
    console.log('y2',y2);
    ani();
}

btnUp.onclick = function () {
    if (y2-100>=0) {
        if (y2 ==200) {
            y2=y2-100;
            site.style.transform = 'translateY('+ (-100) + 'vh)';
            y1 = y1-50;
            left.style.transform = 'translateY('+(pf+ y1) +'%)';
            right.style.transform = 'translateY('+(-y1) +'%)';
        }
        else {
            if (y2==400) {
                y2=y2-100;
                site.style.transform = 'translateY('+ (-200) + 'vh)';
                console.log(y2);
                }
            else {
                if (y2==300) {
                y2=y2-100;
                site.style.transform = 'translateY('+ (-100) + 'vh)';
                // y1 = y1-50;
                // left.style.transform = 'translateY('+(pf+ y1) +'%)';
                // right.style.transform = 'translateY('+(-y1) +'%)';
                console.log('вав',y2);
                }
                else {
                    y2=y2-100;
                    site.style.transform = 'translateY('+ (-y2) + 'vh)';
                    console.log('вав2',y2);
                }
                }
            }    
        }

}





//Функции перехода МЕНЮ

//home
home.onclick = function () {
    y2=0;
    site.style.transform = 'translateY('+ 0 + 'vh)';

    left.style.transform = 'translateY('+(-50) +'%)';
    right.style.transform = 'translateY('+0 +'%)';
    console.log(y2);
}

//about
about.onclick = function () {
    y2=100;
    site.style.transform = 'translateY('+ (-100) + 'vh)';

    left.style.transform = 'translateY('+(-50) +'%)';
    right.style.transform = 'translateY('+0 +'%)';
    console.log('y2',y2);
}
//resume
resume.onclick = function () {
    y2=200;
    y1 = y1+50;
    site.style.transform = 'translateY('+ (-100) + 'vh)';

    left.style.transform = 'translateY('+0 +'%)';
    right.style.transform = 'translateY('+(-50) +'%)';

    console.log('y2',y2);
    ani();
}

//portfolio
portfolio.onclick = function () {
    y2=300;
    
    site.style.transform = 'translateY('+ (-200) + 'vh)';

    y1 = 50;
    left.style.transform = 'translateY('+(pf+ y1) +'%)';
    right.style.transform = 'translateY('+(-y1) +'%)';

    console.log('y2',y2);
}

//contact
contact.onclick = function () {
    y2=400;
    site.style.transform = 'translateY('+ (-300) + 'vh)';
    console.log(y2);
    y1 = 50;
    left.style.transform = 'translateY('+(pf+ y1) +'%)';
    right.style.transform = 'translateY('+(-y1) +'%)';
    ani();
    
}


//функции для всплывашки
home2.onclick = function () {
    y2=0;
    site.style.transform = 'translateY('+ 0 + 'vh)';

    left.style.transform = 'translateY('+(-50) +'%)';
    right.style.transform = 'translateY('+0 +'%)';
    console.log(y2);
}

//about
about2.onclick = function () {
    y2=100;
    site.style.transform = 'translateY('+ (-100) + 'vh)';

    left.style.transform = 'translateY('+(-50) +'%)';
    right.style.transform = 'translateY('+0 +'%)';
    console.log('y2',y2);
}
//resume
resume2.onclick = function () {
    y2=200;
    y1 = y1+50;
    site.style.transform = 'translateY('+ (-100) + 'vh)';

    left.style.transform = 'translateY('+0 +'%)';
    right.style.transform = 'translateY('+(-50) +'%)';

    console.log('y2',y2);
    ani();
}

//portfolio
portfolio2.onclick = function () {
    y2=300;
    
    site.style.transform = 'translateY('+ (-200) + 'vh)';

    y1 = 50;
    left.style.transform = 'translateY('+(pf+ y1) +'%)';
    right.style.transform = 'translateY('+(-y1) +'%)';

    console.log('y2',y2);
}

//contact
contact2.onclick = function () {
    y2=400;
    site.style.transform = 'translateY('+ (-300) + 'vh)';
    console.log(y2);
    y1 = 50;
    left.style.transform = 'translateY('+(pf+ y1) +'%)';
    right.style.transform = 'translateY('+(-y1) +'%)';
    ani();
}












//АНИМАЦИЯ  ПРОПИСАТ АНИМАЦИЮ ПОД КАЖДЫЙ Y2 - Т.Е. ДЛЯ КАЖДОГО ЛОКА
//функция анимации при появлении, привязанная к позиционированию
     function ani () {
         if (y2 == 200) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                animItem.classList.add('_active'); 
            }

            console.log (y2);
            }
        else {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                animItem.classList.remove('_active'); 
            }
        }  
    }    
    //  function aniContact () {
    //      if (y2 == 400) {
    //         for (let index = 0; index < animItems.length; index++) {
    //             const animItem = animItems[index];
    //             animItem.classList.add('_active'); 
    //         }

    //         console.log (y2);
    //         }
    //     else {
    //         for (let index = 0; index < animItems.length; index++) {
    //             const animItem = animItems[index];
    //             animItem.classList.remove('_active'); 
    //         }
    //     }  
    // }    


    
//ПОПАПЫ    
let portfolioItem = document.querySelector('.portfolio');
let popup = document.querySelectorAll('.popup-link');
let closeArea = document.querySelectorAll('.popup__area');
let closeArea2 = document.querySelectorAll('.popup__close');

function popupOpen() {
for (let index = 0; index < popup.length; index++) {
    let popupItem = popup[index];
    
     popupItem.onclick = function () {
        portfolioItem.classList.add('.active1');
        console.log('block');
     }   
    }
    
}
popupOpen();

function popupClose() {
for (let index = 0; index < closeArea.length; index++) {
    let closeAreaItem = closeArea[index];
    
    closeAreaItem.onclick = function () {
        portfolioItem.classList.remove('.active1');
        console.log('unblock');
     }   
    }
    
}
popupClose();

function popupClose2() {
for (let index = 0; index < closeArea2.length; index++) {
    let closeArea2Item = closeArea2[index];
    
    closeArea2Item.onclick = function () {
        portfolioItem.classList.remove('.active1');
        console.log('unblock');
     }   
    }
    
}
popupClose2();


// popup.onclick = function () {
//     for (let index = 0; index < popup.length; index++) {
//         const popupItem = popup[index];
//         popupItem[index].onclick = function () {
//             portfolioItem.classList.add('.active1');
//             console.log('block');
//         }
//     }
    
// };

//функция закрытия попапа
closeArea.onclick = function () {
    portfolioItem.classList.remove('.active1');
    console.log('unlock');
}
closeArea2.onclick = function () {
    portfolioItem.classList.remove('.active1');
    console.log('unlock');
}



let wrapper = document.querySelector ('.wrapper');
wrapper.addEventListener ('wheel',throttle(scrollDown, 1000) );

//функция скролла мышкой
function scrollDown (event) {
    
    
   if (portfolioItem.classList.contains('.active1')) {  //если у портфолио айтема ест такой класс, то ничего не делаем, если нет, разрешаем скролл
        let a = 15;
        console.log (a);
    }

    else {
        if (event.deltaY > 0) {
             
            if (y2+100<=400) {
                if (y2 == 100) {
                    y2 = y2+100;
                    site.style.transform = 'translateY('+ (-100) + 'vh)';
                    
                    
                }
                else { 
                    if (y2 == 200) {
                        y2 = y2+100;
                        site.style.transform = 'translateY('+ (-200) + 'vh)';
                        
                    }
                    else {
                        if (y2 == 300) {
                            y2 = y2+100;
                            site.style.transform = 'translateY('+ (-300) + 'vh)';
                           
                        }
                        else {
                        y2 = y2+100;
                        site.style.transform = 'translateY('+ (-y2) + 'vh)';
                        
                        }
                    }
                    
                }
            }
            
        }
        else {
            if (y2-100 >= 0) {
                if (y2 == 400) {
                    y2 = y2-100;
                    site.style.transform = 'translateY('+ (-200) + 'vh)';

                   
                }
                else {
                    if (y2 ==300) {
                        y2 = 200;
                        site.style.transform = 'translateY('+ (-100) + 'vh)';
                      
                    }
                    else {
                        y2 = y2-100;
                        site.style.transform = 'translateY('+ (-y2) + 'vh)';
                    }
                    
                }
        }
            else {
                
            }
        }

     ani();
     
        console.log('Движение страницы y2',y2)
        
        
    }
    
    
};





//функция звдержки скролла
function throttle (func,ms) {
    let isThrottled = false;
    let saveArgs;
    let savedThis;
    
    
    function wrapper() {

        if(isThrottled) {
            saveArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function(){
            isThrottled = false;
        }, ms);
    }
    return wrapper;
}




//переменные для функционирования маленького блока
let pf = - 50;
let y1 = 0;
let left = document.querySelector('.block-left');
let right = document.querySelector('.block-right');

//функция скролла для маленького блока
document.querySelector('.container').onwheel = function (event) {

    if (event.deltaY > 0) {
        if (y1+50<=50) {
            y1 = y1+50;
        }
        console.log('Игрик сверху',y1)
    }


    else {
        if (y1-50 >= 0) {
            y1 = y1-50;
        }
        console.log('Игрик снизу',y1)
    }
    
    
    left.style.transform = 'translateY('+(pf+ y1) +'%)';
    right.style.transform = 'translateY('+(-y1) +'%)';
    
}

