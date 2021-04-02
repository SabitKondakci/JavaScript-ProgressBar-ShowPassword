
jQuery(function($){
    var j = $.noConflict();

    var div = j("div.container");

    var start = j("button#start");
    var stop = j("button#stop");

    
    var callbacks = $.Callbacks();
    callbacks.add(function(){div.css("background-color","coral")});
    callbacks.add(function(){div.append("<h1>Done</h1>");});

    start.on("click",function(){
        div.contents().hide();
        div.animate({width:"200px"},1000)
        .animate({height:"200px"},1000)
        .queue(function(){
            div.append("<h1>Damn!</h1>");
            div.contents(":header").fadeOut(3000);
            div.css("background-color","red");
            div.dequeue();
        })
        .delay(3000)
        .animate({width:"100px"},1000)
        .animate({height:"100px"},1000,function(){callbacks.fire()})
    })

    stop.on("click",function(){
        div.finish();
    })


    // var menu_list =  $("ol#menu-list");

    // menu_list.data("listLength",menu_list.contents("li").length);
    // let data = menu_list.data("listLength");
    
    // console.log(j().jquery);
    // console.log(jQuery.support.ajax);
    // menu_list.on({
    //     mouseenter : function(){
    //         var i = $(this).index();
    //         j(this).append(` <span class="fade"> # ${i}</span>`).fadeIn(300);
    //     },
    //     mouseleave : function(){
    //         j(this).contents("span.fade").fadeOut(300);
    //     }
    // },"li");

    // var list_item = menu_list.contents("li").get(3);
    
    // console.log(list_item.innerHTML);
    
});
