window.onload = function(){
    window.scrollTo(0,8);
}

jQuery(function(){

    var menuBar = $("td#menu-data");
    var menuDiv = $("td #menu-div");
    var icon =$("i#left-right-arrow");

    icon.on("click",function(){

        
        menuBar.toggle(300,"swing");
        
        if($(this).attr("class") == "fas fa-angle-double-right")
        {        
            menuDiv.fadeOut(100);
            $(this).attr("class","fas fa-angle-double-left");
        }
        else
        {
            menuDiv.fadeIn(600);
            $(this).attr("class","fas fa-angle-double-right");
        }

       
    })

    icon.on({
        mouseenter:function(){
            icon.css("color","white");
        },
        mouseout:function(){
            icon.css("color","brown");
        }
    })
    
})
