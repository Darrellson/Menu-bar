$(document).ready(function(){
    var menuExpanded = false;
    $(".menu-toggle").click(function(){
        if(!menuExpanded){
            $(".manu-container").addClass('active');
        }else{
            $(".manu-container").removeClass('active');
        }
        menuExpanded = !menuExpanded;
    })

    $(".manu-container li").hover(function(){
        var index = $(this).attr('index');
        $(this).find('a').addClass('hover'+index);

    });

    $(".manu-container li").mouseleave(function(){
        var index = $(this).attr('index');
        $(this).find('a').removeClass('hover'+index);
    });

    $(".menu-toggle").hover(function(){
        $(".manu-container li").each(function(){
            var index = $(this).attr('index');
            $(this).find('a').addClass('hover'+index);
        });
    });

    $(".menu-toggle").mouseleave(function(){
        $(".manu-container li").each(function(){
            var index = $(this).attr('index');
            $(this).find('a').removeClass('hover'+index);
        });
    });

    $(".menu-toggle").click(function(){
        $(".manu-container li").each(function(){
            var index = $(this).attr('index');
            $(this).find('a').removeClass('hover'+index);
        });
    });

})