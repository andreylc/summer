$(document).ready(function(){
  $('.comments-slider').slick({
    accessibility: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next"
  });
  $('.app-preview-container').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    type: 'iframe'
  });
  $('.showcase__item').magnificPopup({
    items: {
      src: 'img/girl.jpg'
    },
    type: 'image' // this is default type
  });
  
});
	