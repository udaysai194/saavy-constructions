$(window).bind("load", function () {
        $('#work-in-progress').fadeOut(100);
    });

$(document).ready(function(){
  $(".button-collapse").sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
  });
  $(".carousel").carousel({
    duration: 150
  });

  setInterval(function(){
  $('.carousel').carousel('next');
}, 2500);

})
