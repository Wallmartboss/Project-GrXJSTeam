// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation'; 

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  ...
});


function getReviews() {
    const url = "https://portfolio-js.b.goit.study/api/reviews"   
    
     return fetch(url).then(res => {
         if (!res.ok) {
             throw new Error(console.log(res));  
         }
         return res.json();
     });
};

const results = getReviews();

