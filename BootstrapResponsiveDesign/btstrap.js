jQuery(function(){
    var menu_bar = $("#menu-bar");
    var toggle_button = $("#bars");
    var item_container = $("div#item-container");

    

    toggle_button.on("click",function(){
        menu_bar.slideToggle(500);
    })
    
    var my_click ;
    menu_bar.on("click","li a",function(){
        
        if(my_click!=null)
            my_click.classList.remove("active");

        my_click = this;
        my_click.classList.add("active");
    })

    item_container.on("dblclick","div",function(){
        let inner_text = this.innerHTML;
        localStorage.setItem("innerTXT" , inner_text);
        window.open("file:///C:/Users/fenko/Desktop/Bootstrap/article.html","_self");

    })


})
