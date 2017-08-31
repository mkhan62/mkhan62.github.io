/* globals $ */

$( document ).ready(function() {
   $(".show-more button").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    
    
    if(linkText === "SHOW MORE"){
        linkText = "Show less";
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);
    })
    
    $('#project-btn').on('click',function() {
        $('html,body').animate({
            scrollTop: $('#project-header').position().top
        }, 1000 );
    });
    $('#about-btn').on('click',function() {
        $('html,body').animate({
            scrollTop: $('#about-header').position().top
        }, 1000 );
    });
     $('#achievements-btn').on('click',function() {
        console.log('button pressed!');
        $('html,body').animate({
            scrollTop: $('#achievements-header').position().top
        }, 1000 );
    });
    $('#contact-btn').on('click',function() {
        $('html,body').animate({
            scrollTop: $('#contact-header').position().top
        }, 1000 );
    });
});