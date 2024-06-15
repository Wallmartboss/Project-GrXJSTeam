// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


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
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation],
  direction: 'horizontal',
    loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function reviewsMarkup(arrReviews) {
    return arrReviews.map((oneReview) => {
       return `<li class="swiper-slide"><p class="review-text">${oneReview.review}</p>
            <div class="review-author">
                <img src="${oneReview.avatar_url}" class="review-author-photo" alt="Photo ${oneReview.author}"
                    width="40" height="40">
                <p class="review-author-name">${oneReview.author}</p>
            </div></li>`
    }).join("");
}