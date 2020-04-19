/*global $*/

$(function () {
    
    "use strict";
    
    // Variables
    
    var Loading         = $(".loading"),
        Scroll          = $(".scroll"),
        Htm_Bod         = $("html, body"),
        Navbar          = $(".navbar-default"),
        Nva_Li          = $(".navbar-default .navbar-nav > li > a, .dropdown-menu li a"),
        portfolio_btn   = $(".portfolio-btn"),
        portfolio       = $(".portfolio"),
        Counter         = $(".counter"),
        Mixitup         = $("#mixitup"),
        Filter          = $(".filtr-container"),
        Reviews         = $(".reviews-carousel"),
        Blog            = $(".blog-carousel"),
        send            = $(".send"),
        output          = $(".output");
    
    // Loading
    
    $(window).on("load", function () {
    
        Loading.fadeOut();
    
    });
    
    // Show Scroll Icon
    
    $(window).on("scroll", function () {
    
        if ($(this).scrollTop() > 100) {
        
            Scroll.fadeIn();
            
        } else {
        
            Scroll.fadeOut();
        
        }
        
    });
    
    // Scroll To Top
    
    Scroll.on("click", function () {
    
        Htm_Bod.animate({
        
            scrollTop: 0
            
        }, 1500);
    
    });
    
    // Add Class To Navbar
    
    $(window).on("scroll", function () {
    
        if ($(this).scrollTop() > Navbar.height()) {
        
            Navbar.addClass("sticky-nav");
        
        } else {
        
            Navbar.removeClass("sticky-nav");
        
        }
        
    });
    
    // Smooth Scroll
    
    Nva_Li.on("click", function (e) {
            
        Htm_Bod.animate({

            scrollTop: $($(this).attr("href")).offset().top

        }, 1500);

        e.preventDefault();
                    
    });
    
    // Portfolio_Btn
    
    portfolio_btn.on("click", function (e) {
           
        Htm_Bod.animate({

            scrollTop: portfolio.offset().top

        }, 1500);

        e.preventDefault();
    
    });      
    
    // CounterUp
    
    Counter.counterUp({
        delay: 10,
        time: 3000
    });
    
    // Mixitup

	Mixitup.mixItUp();
    
    // PopUp Image
    
    Filter.magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {enabled: true, navigateByImgClick: true, preload: [0, 1]},
        zoom: {enabled: true, duration: 300, opener: function (element) {return element.find("img"); }}
    });
       
    // Reviews Slider
    
    Reviews.owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
    
    // Blog Slider 
    
    Blog.owlCarousel({
        items: 3,
        margin: 10,
        dots: true,
        autoplay: true,
        loop: true,
        responsiveClass: true,
        responsive: {0: {items: 1}, 500: {items: 1}, 1000: {items: 2}, 1200: {items: 3}}
    });
    
    // Contact Form

    send.on("click", function () {
    
        var name    = $(".name").val(),
            email   = $(".email").val(),
            subject = $(".subject").val(),
            message = $(".message").val(),
            dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        
        function validateEmail(emailadd) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(emailadd);
        }
        
        if (name === '' || email === '' || subject === '' || message === '') {
        
            output.html("<div class='alert alert-warning'>please fill all fields.</div>").fadeIn().delay(3000).fadeOut();
        
        } else if (!validateEmail(email)) {
        
            output.html("<div class='alert alert-warning'>write a valid email.</div>").fadeIn().delay(3000).fadeOut();
            
        } else {
        
            $.ajax({
                url: "contact.php",
                type: "POST",
                data: dataString,
                cache: false,
                success: function(result) {
                    output.html(result).fadeIn().delay(3000).fadeOut();
                    var name = $(".name").val(''),
                    email    = $(".email").val(''),
                    subject  = $(".subject").val(''),
                    message  = $(".message").val('');
                }
            });
        }
        return false;
    });
       
    // Triger Wow
    
    new WOW().init();
    
});