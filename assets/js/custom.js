$(document).ready(function(){
	"use strict";
		$('.header-area').sticky({
           topSpacing:0
        });

    $(window).load(function(){
      $(".header-text h2,.header-text h3,.header-text p,.header-text a").animate({'opacity':'0'},
       function(){
         $(".header-text h2").animate({'opacity':'1','margin-bottom':'20px','margin-top':'0px'},
          function(){
           $(".header-text h3").animate({'opacity':'1'},
           function(){
             $(".header-text p").animate({'opacity':'1','margin-bottom':'80px','margin-top':'30px'},
             function(){
               $(".header-text a").animate({'opacity':'1','margin-top':'20px','margin-bottom':'0px'},100)
             });
           });
         });
       });
      
      //$(".header-text h3").animate({'opacity':'1'},1000);
      //$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'100'});
      //$(".header-text a").addClass("animated fadeInDown").css({'opacity':'100','margin':'10px'});
    });
});	