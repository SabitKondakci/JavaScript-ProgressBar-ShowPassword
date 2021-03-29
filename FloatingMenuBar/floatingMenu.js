window.onload = function(){
    window.scrollTo(0,8);
}

jQuery(function(){

    var menuBar = $("td#menu-data");
    var icon =$("i#left-right-arrow");

    icon.on("click",function(){
        
        if($(this).attr("class") == "fas fa-angle-double-right")
        {        
            menuBar.hide("fast","linear");
            $(this).attr("class","fas fa-angle-double-left");
        }
        else
        {
            menuBar.show("fast","linear");
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
