$(window).load(function() {
    $(".loading").fadeOut("fast");
  });


$(document).ready(function() {

  var d = new Date();
  var n = d.getHours();
  if (n > 20 || n < 6){
    $("body").addClass("midnight");

    $("#day-txt").text('Snoozing');
  }
  else if (n > 12 && n < 19){
    $("body").addClass("midday");

    TweenMax.to($(".day"), 1.5, {
   opacity: 1
    })
    TweenMax.to($(".even"), .5, {
   opacity: 1
    })
    $("#day-txt").text('Designing');
  }
  else if (n > 18 && n < 21){
    $("body").addClass("evening");

    TweenMax.to($(".even"), 1.5, {
   opacity: 1
    })
    $("#day-txt").text('Reviewing');
  }
  else{
    $("body").addClass("morning");

    TweenMax.to($(".day"), 1.5, {
   opacity: 1
    })
    TweenMax.to($(".even"), .5, {
   opacity: 1
    })
    $("#day-txt").text('Researching');
  }

  $.simpleWeather({
    location: 'Lagos',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p></p>');
    }
  });

  $('.flexslider').flexslider({
    animation: "slide"
  });

});



$(function(){  

var $menu = $("#menu");

$menu.on("click","a", function(){
    var $this = $(this),
        href = $this.attr("href"),
      topY = $(href).offset().top;
   
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: topY, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  
  return false;
});  

});



$(document).keydown(function(e){

  var sec1 = $("#re").offset().top;
      sec2 = $("#process").offset().top;
      sec3 = $("#portfolio").offset().top;
      sec4 = $("#about-me").offset().top;

      doc = $(window).scrollTop();

 if (e.keyCode == 38){
  if (doc == sec4 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec3, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec3 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec2, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec2 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec1, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  return false;
 }

 else if(e.keyCode == 40){
  if (doc == sec1 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec2, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec2 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec3, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec3 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec4, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  return false;
 }
})


$(window).on('DOMMouseScroll mousewheel', function (e) {


  var sec1 = $("#re").offset().top;
      sec2 = $("#process").offset().top;
      sec3 = $("#portfolio").offset().top;
      sec4 = $("#about-me").offset().top;

      doc = $(window).scrollTop();

  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 

    if (doc == sec1 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec2, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec2 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec3, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec3 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec4, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }
    
  } else {
      if (doc == sec4 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec3, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec3 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec2, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }

  else if (doc == sec2 ){
    TweenMax.to($(window), 1, {
        scrollTo:{
            y: sec1, 
            autoKill: true
        }, 
        ease:Power3.easeOut 
     });
  }
  }

  return false;
});


$(".p-right").mousemove(function(event){
 
    
    var xPos = (event.clientX/$(window).width())-0.5;
    var yPos = (event.clientY/$(window).height())-0.5;
 
    
    TweenLite.to($(".p-right"), 0.6, {rotationY:8*xPos, rotationX:8*yPos, ease:Power1.easeOut, transformPerspective:900, transformOrigin:"center"});
 
});

 
var tm = new TimelineMax(),
    tmT = new TimelineMax(),
    tmM = new TimelineMax(),
    tmS = new TimelineMax(),
    tmL = new TimelineMax(),
    tmD = new TimelineMax(),

    tmLoop = new TimelineMax({repeat: 2}),
    grt = $(".grt"),
    tool = $(".tool"),
    toolBox = $(".tool-box"),
    wrench = $("#wrench"),
    tab1 = $("#tab1"),
    tab2 = $("#tab2"),
    tab3 = $("#tab3"),
    tab4 = $("#tab4"),
    eq1 = $("#eq1"),
    eq2 = $("#eq2"),
    eq3 = $("#eq3"),
    eq4 = $("#eq4"),
    eq5 = $("#eq5"),
    sip = $("#sip"),
    swdg = $("#s-widget"),
    sl1 = $("#s-line1"),
    sl2 = $("#s-line2"),
    sl3 = $("#s-line3"),
    sl4 = $("#s-line4"),
    sl5 = $("#s-line5"),
    sl6 = $("#s-line6"),
    sl7 = $("#s-line7"),
    sl8 = $("#s-line8"),
    spaper = $("#paper")
    ;

            TweenLite.set(eq2, {opacity: 0});
            TweenLite.set(eq3, {opacity: 0});
            TweenLite.set(eq4, {opacity: 0});
            TweenLite.set(eq5, {opacity: 0});
            TweenLite.set(eq5, {opacity: 0});

            TweenLite.set($(".p-md"), {'background-size': '900px 444px', '-webkit-filter': 'grayscale(70%)', 'filter': 'grayscale(70%)'});
            TweenLite.set($(".p-wide"), {'background-size': '800px 466px', '-webkit-filter': 'grayscale(70%)', 'filter': 'grayscale(70%)'});
            TweenLite.set($("#loc"), {'stroke': '#f4ee6f', 'stroke-width': '1'});


TweenMax.to($("#loc"), 1, {
  'stroke': 'rgba(244, 238, 111, 0.40)',
  'stroke-width': '14',
  ease: Power1.easeOut,
  repeat: -1
})

$('.close').click(
  function() {
  TweenMax.to($(".popup"), 0, {
   'display': 'none',
    });
   TweenMax.to($(".pop-content"), .5, {
   scale: 0.8,
    });

  });

$('#half-moon').click(
  function() {
  tmD.to($(".day"), 1.5, {
   opacity: 0
    })
  .to($(".even"), 1.5, {
   opacity: 1
    })

  $("#day-txt").text('Reviewing');
  });

$('#full-moon').click(
  function() {
  tmD.to($(".day"), 1.5, {
   opacity: 0
    })
  .to($(".even"), 1.5, {
   opacity: 0
    })

  $("#day-txt").text('Snoozing');
  });

$('#sunny').click(
  function() {
  tmD.to($(".day"), 3, {
   opacity: 1
    })
  .to($(".even"), .5, {
   opacity: 1
    })

  $("#day-txt").text('Designing');
  });

$('#sunrise').click(
  function() {
  tmD.to($(".day"), 3, {
   opacity: 1
    })
  .to($(".even"), .5, {
   opacity: 1
    })

  $("#day-txt").text('Researching');
  });


$("#music").hover(
  function() {
          tmM.to(eq3, .2, {
            opacity: 1
          })
          .to(eq4, .2, {
            opacity: 1
          })
          .to(eq4, .2, {
            opacity: 0
          })
          .to(eq3, .2, {
            opacity: 0
          })
          .to(eq2, .2, {
            opacity: 1
          })
          .to(eq5, .2, {
            opacity: 1
          })
          .to(eq2, .2, {
            opacity: 0
          })
          tm.to(eq3, .2, {
            opacity: 1
          })
          .to(eq4, .2, {
            opacity: 1
          })
          .to(eq1, .2, {
            opacity: 0
          })
          .to(eq1, .2, {
            opacity: 1
          })
          .to(eq4, .2, {
            opacity: 0
          })
          .to(eq3, .2, {
            opacity: 0
          })
          .to(eq5, .2, {
            opacity: 0
          })
  },
  function(){
  }
  );

$("#tablet").hover(
  function() {

            TweenLite.set(tab1, {scale: 0});
            TweenLite.set(tab2, {scale: 0});
            TweenLite.set(tab3, {scale: 0});
            TweenLite.set(tab4, {scale: 0});

            tmT.to(tab1, .3, {
              scale: 1
            })

            .to(tab2, .3, {
              scale: 1
            })

            .to(tab3, .3, {
              scale: 1
            })

            .to(tab4, .3, {
              scale: 1
            });

  },
  function (){
    
  }

  );

$("#soda").hover(
  function(){
    tmS.to(sip, 2.5, {
      y: 190,
      ease: Power2.easeOut
    })

  },
  function(){
    TweenLite.set(sip, {y: 0, delay: 5});
  }
  );



$("#laptop").hover(
  function(){
    TweenLite.set(swdg, {scale: 0});
    TweenLite.set(sl1, {scale: 0});
    TweenLite.set(sl2, {scale: 0});
    TweenLite.set(sl3, {scale: 0});
    TweenLite.set(sl4, {scale: 0});
    TweenLite.set(sl5, {scale: 0});
    TweenLite.set(sl6, {scale: 0});
    TweenLite.set(sl7, {scale: 0});
    TweenLite.set(sl8, {scale: 0});
    tmL.to(swdg, .7, {
      scale: 1,
      ease: Elastic.easeOut,
      delay: 1
    })
    .to(sl1, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl2, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl3, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl4, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl5, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl6, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl7, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
    .to(sl8, .7, {
      scale: 1,
      ease: Elastic.easeOut,
    })
  },
  function(){

  }
  );

tool.hover(
  function() {
            TweenLite.to($(this), .5, {
              y: -20
            });
          },
  function() {
            TweenLite.to($(this), .5, {
              y: 0
            });
          }
);

$(".p-wide").hover(
  function() {
            TweenLite.to($(this), 3.5, {
              '-webkit-filter': 'grayscale(0%)',
              'filter': 'grayscale(0%)',
              'background-size': '900px 524px',
              ease: Power2.easeOut
            });
          },
  function() {
            TweenLite.to($(this), 3.5, {
              '-webkit-filter': 'grayscale(70%)',
              'filter': 'grayscale(70%)',
              'background-size': '800px 466px',
              ease: Power2.easeOut
            });
          }
);

$(".p-md").hover(
  function() {
            TweenLite.to($(this), 3.5, {
              '-webkit-filter': 'grayscale(0%)',
              'filter': 'grayscale(0%)',
              'background-size': '1000px 494px',
              ease: Power2.easeOut
            });
          },
  function() {
            TweenLite.to($(this), 3.5, {
              '-webkit-filter': 'grayscale(70%)',
              'filter': 'grayscale(70%)',
              'background-size': '900px 444px',
              ease: Power2.easeOut
            });
          }
);


toolBox.hover(
        function(){
          tm.to(wrench, .35, {
            rotation: -25,
            transformOrigin:"50px 20px"
          })

          .to(wrench, .35, {
            rotation: 0,
            transformOrigin:"50px 20px"
          })
          ;
        },
        function(){

        }
  );
