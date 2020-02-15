import $ from 'jquery';
import slick from 'slick-carousel';
 
global.jQuery = $;
global.$ = $;
global.slick = slick;

$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true
      });
});