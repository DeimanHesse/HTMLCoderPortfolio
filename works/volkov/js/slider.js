let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                    
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('LightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}

if (document.querySelector('.banner-slider')) {
    let aboutSlider = new Swiper('.banner-slider__body', {
        
        observer: true,
        observeParents:true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 1800,
        loop: true,
        spaceBetween:30,
        pagination: {
            el: '.banner-slider__dotts',
            clickable: true,
        },

        // breakpoints: {
        //     320: {
        //         slidesPerView: 2,

        //     },
        //     480: {
        //         slidesPerView: 3,
        //     },
        //     992: {
        //         slidesPerView: 4,
        //     },
        // },

        navigation: {
            nextEl: '.banner-slider__arrowNext',
            prevEl: '.banner-slider__arrowPrev'

        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    
    });  


    
     //let aboutSliderImages = document.querySelectorAll('.about-slider__img');
    // let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
    
    // for (let index = 0; index < mainsliderImages.length; index++) {
    //     const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
    //     mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
       
    // }
    
    };

    
if (document.querySelector('.slider-posts')) {
    let aboutSlider = new Swiper('.slider-posts__body', {
        
        observer: true,
        observeParents:true,
        slidesPerView: 3,
        spaceBetween: 0,
        autoHeight: false,
        speed: 800,
        loop: true,
        spaceBetween:30,
        pagination: {
            el: '.slider-posts__dotts',
            clickable: true,
            // background: white,
        },

        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,

            },
            
            
        },

        navigation: {
            nextEl: '.slider-posts__arrowRight',
            prevEl: '.slider-posts__arrowLeft'

        },
        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    
    });  


    
     //let aboutSliderImages = document.querySelectorAll('.about-slider__img');
    // let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
    
    // for (let index = 0; index < mainsliderImages.length; index++) {
    //     const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
    //     mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
       
    // }
    
    
};

