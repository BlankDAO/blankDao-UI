var myFullpage = new fullpage('#main', {
  // verticalCentered: false,
  // slidesNavigation: true,
  navigation: true,
  scrollingSpeed: 700,
    // scrollingSpeed: 1000,
    // scrollBar: false,
    // fadingEffect: true,
    licenseKey: 'C74E309E-891D44FF-980DCF32-4E4E704B',
    menu: '#myMenu',
    anchors: ['home', 'Stability', 'Fair-Distribution'],
});


$(document).ready(function(){
  $(window).on('hashchange', function(e){
    let url = window.location.hash;
    console.log(url);
   if ( url == "#home") {
     $(".site-header").removeClass('scrolled');
     $(".main_logo").removeClass('main_logo_visible');
   }
   else {
     $(".main_logo").addClass('main_logo_visible');
     $(".site-header").addClass('scrolled');
     $(".header .menu-item a").css("color", "#111A44");
   }
  });
});
