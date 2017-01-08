$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.pre-child').offset().top - ($(window).height() / 1 )) {

    $('.pre-child').each(function(){

      $('.pre-child').addClass('pre-child-show');

    });

  




  }

});
