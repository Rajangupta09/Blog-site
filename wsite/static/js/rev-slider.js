(function($){
  "use strict";

  $(document).ready(function(){

    // Agency Hero
    $('#slider1').revolution({
      sliderLayout:"fullscreen",
      sliderType:"hero",
      delay:12000,
      responsiveLevels:[4096,1024,778,460],
      gridwidth:[1280,1024,778,460],
      gridheight:600,
      hideThumbs:10,

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"slidercenter",
        speed:2000,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      spinner:"spinner4"
    });


    // Projects Showcase
    $('#slider2').revolution({
      sliderType: "standard",
      sliderLayout:"fullscreen",
      delay:9000,
      responsiveLevels:[1240,1024,778,480],
      // visibilityLevels:[1240,1024,778,480],
      gridwidth:[1240,1024,778,480],
      gridheight:[868,768,960,720],
      autoHeight: "off",
      fullScreenAutoWidth: "on",
      fullScreenAlignForce: "off",

      navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "vertical",
        mouseScrollNavigation:"carousel",
        mouseScrollReverse:"default",
        onHoverStop: "off",

        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "vertical",
          drag_block_vertical: false
        },
        bullets:{
          style:"",
          enable:true,
          hide_onmobile:true,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          hide_under:540,
          hide_over:9999, 
          direction:"vertical",
          space:18,       
          h_align:"right",
          v_align:"center",
          h_offset:80,
          v_offset:0,
          tmp: ''
        },
      },

      parallax:{
        type:"scroll",
        levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
        origo:"enterpoint",
        speed:400,
        bgparallax:"on",
        disable_onmobile:"on"
      },

      lazyType:"none",
      spinner:"off",
      stopLoop:"on",
      stopAfterLoops:0,
      stopAtSlide:1,
      disableProgressBar: "on",
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });

  });

})(jQuery);