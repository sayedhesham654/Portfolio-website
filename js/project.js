$(window).ready(function () {
/* start our modifications*/
/* start navbar*/
    $(".navbar-default .navbar-nav > li.dropdown").hover(function (){
       
        $(this).children("ul").slideToggle("fast");
        
    }) ;    
/* end navbar*/    

/* start  after navbar*/
    
        $("section.first-section  .col-md-5 div.buttons button:eq(0)").click(function (){
            
            $("section.first-section  .col-md-5 .first-div").show().siblings().hide();
            
            $("section.first-section  .col-md-5 div.buttons button:eq(0)").css({
                color:"white",
                backgroundColor:"#F78536"
            }).siblings().css({
                color:"#F78536",
                backgroundColor:"white"
            })
        });
        $("section.first-section  .col-md-5 div.buttons button:eq(1)").click(function (){
            
            
            $("section.first-section  .col-md-5 .second-div").show().siblings().hide();
            $("section.first-section  .col-md-5 div.buttons button:eq(1)").css({
                color:"white",
                backgroundColor:"#F78536"
            }).siblings().css({
                color:"#F78536",
                backgroundColor:"white"
            })
             
        });
        $("section.first-section  .col-md-5 div.buttons button:eq(2)").click(function (){
            
            
            $("section.first-section  .col-md-5 .third-div").show().siblings().hide();
            $("section.first-section  .col-md-5 div.buttons button:eq(2)").css({
                color:"white",
                backgroundColor:"#F78536"
            }).siblings().css({
                color:"#F78536",
                backgroundColor:"white"
            })
             
        });
          $('#foused-button').trigger('click');
        
/* end after navbar*/
/*start section famoust twons*/
$(".famous-towns .back").mouseenter(function (){
   
    $(this).children("img").css("transform","scale(1.3)")
    
});
$(".famous-towns .back").mouseleave(function (){
   
    $(this).children("img").css("transform","scale(1)")
    
});    
/*end section famoust twons*/    
/*start section photos*/
    $(".photos .layout2").mouseenter(function (){
        $(this).css("boxShadow"," 10px 10px 40px 25px rgba(1,1,1,0.3) inset, -10px -10px 40px 25px rgba(1,1,1,0.3) inset ");
        $(this).children(".photos .layout2 h1").css("border","2px solid white")
    });
     $(".photos .layout2").mouseleave(function (){
        $(this).css("boxShadow"," 0px 0px 0px 0px rgba(0,0,0,0) inset");
        $(this).children(".photos .layout2 h1").css("border","none")
    });
/*end section photos*/

/* end our modifications*/        
});
$(window).load(function () {
    $(".overlay .spinner").fadeOut(1500,
    function ()
    {   
        $("body").css("overflow","auto")
     
        $(".overlay .spinner").parent().fadeOut(1500,
        function () {
            
            $(this).remove()
            
        });
    });
});
var scrollButton = $(".scrolltop");
    
    $(window).scroll(function()
    {
        
        ( $(this).scrollTop() >= 700 )? scrollButton.show(): scrollButton.hide();
        
    });

scrollButton.click(function (){
   $("html,body").animate({scrollTop:0}, 600) 
});





