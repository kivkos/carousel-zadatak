$(document).ready(function() {
    $('.next-btn').click(function() {
      var carouselRow = $('.carousel-row');
      var rowWidth = carouselRow.width();
      var images = carouselRow.find('.carousel-slika');
  
      var lastVisibleImage;
      var totalWidth = 0;
  
      images.each(function() {
        totalWidth += $(this).outerWidth();
        if (totalWidth <= rowWidth) {
          lastVisibleImage = $(this);
        }
      });
  
      var slide = rowWidth - lastVisibleImage.outerWidth();
  
      carouselRow.css('transform', 'translateX(-' + slide + 'px)');
    });
  
    $('.prev-btn').click(function() {
      var carouselRow = $('.carousel-row');
      var rowWidth = carouselRow.width();
      var images = carouselRow.find('.carousel-slika');
  
      var firstVisibleImage;
      var totalWidth = 0;
  
      images.each(function() {
        totalWidth += $(this).outerWidth();
        if (totalWidth <= rowWidth) {
          firstVisibleImage = $(this);
        }
      });
  
      var slide = images.first().position().left;
  
      carouselRow.css('transform', 'translateX(' + (-slide) + 'px)');
    });
  });