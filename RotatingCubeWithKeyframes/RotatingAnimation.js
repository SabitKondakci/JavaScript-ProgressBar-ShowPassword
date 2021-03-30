jQuery(function(){

        //#region  Animation Turorials

        // var parActions = {
        //     click:function(){
        //         //    $("p:not(':contains(Iure)')").css("font-size","20px");
        //         $("p:not(.boom)").animate({fontSize:"20px"});
        //     },

        //     dblclick:function(num){
        //         $("p:not(.boom)").animate({fontSize:"16px"})
        //     }
        // }

        // var element = $("div#paragraph");

        // element.on({
        //     click:()=>{parActions.click();},
        //     dblclick:()=>{parActions.dblclick();}
        // });

        // $("#btn-test").on("click",function(){element.triggerHandler("click")});

        // $("p").on("click",function(event){return Math.random()*100;event.stopImmediatePropagation()})

        // $("div p").each(function(i,element){
           
        //     $(this).on("click",{datanamed:i},function(event){
        //         console.log(event.result);
        //     })
        // })
        //#endregion



        var button = $("#btn-test");
        var box = $("#div-test");
        var width = 100;

        button.on("click",function(){
            
            if(width >= 100 && width < 1000)
            {
                width+=100;           
                box.animate({width:"+=100px"},500).animate({height:"+=100px"},500,function(){box.css("background-color","red")})
               
            }
                
        });
        box.on("click",function(){
            
            if(width > 100 && width <= 1000)
            {
                width-=100;
                box.animate({width:"-=100px"},500).animate({height:"-=100px"},500,function(){box.css("background-color","coral")});
            }
                
        });

})
