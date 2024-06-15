
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


const reviewsList = document.querySelector(".swiper-wrapper")

function getReviews() {
    const url = "https://portfolio-js.b.goit.study/api/reviews"   
    
     return fetch(url).then(res => {
         if (!res.ok) {
             throw new Error(res.statusText);  
         }
         return res.json();
     });
};

const results = getReviews();
console.log(results);
results.then((data) => {
    console.log(data);
    const markup = reviewsMarkup(data);
    reviewsList.innerHTML = markup;
}).catch((error) => {
    console.log(error);
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
    modules: [Navigation],
  direction: 'horizontal',
    slidesPerView: 1,
    keyboard: {
        enabled: true
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

document.addEventListener('keydown', (event) => {
    console.log('e', event)
    event.preventDefault();
    if (event.code === 'ArrowRight') {
      swiper.slideNext(300);
    } else if (event.code === 'ArrowLeft') {
        swiper.slidePrev(300)
    }
})

function reviewsMarkup(arrReviews) {
    return arrReviews.map((oneReview) => {
        return `<li class="swiper-slide">
            <p class="review-text">${oneReview.review}</p>
            <div class="review-author">
                <img src="${oneReview.avatar_url}" class="review-author-photo" alt="Photo ${oneReview.author}"
                    width="40" height="40">
                <p class="review-author-name">${oneReview.author}</p>
            </div>
            </li>`
    }).join("");
}