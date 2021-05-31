function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}
(function(){
    $(function(){
        "user-strict";
        $("#slider-carousel").carouFredSel({
            responsive:true,
            width:"variable",
            circular:true,
            scroll:{
                items:1,
                duration:350,
                pauseOnHover:true
            },
            auto:true,
            items:{
                visible:{
                    min:1,
                    max:1
                },
                height:"variable"
            },
            pagination:{
                container:".sliderpager",
                pageAnchorBuilder:false
            }
        });

        $("#sidebar > ul > li > a").click(function(e) {
            // Prevent a page reload when a link is pressed
            e.preventDefault();
            // Call the scroll function
            goToByScroll(this.id);
        });
    
    })

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=60)
        {
            $("header").addClass("secondary");
        }
        else
        {
            if($("header").hasClass("secondary"))
                {
                    $("header").removeClass("secondary");
                }
        }
    })

})()

