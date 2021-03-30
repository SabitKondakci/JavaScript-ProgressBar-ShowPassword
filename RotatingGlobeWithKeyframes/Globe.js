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

        $(window).on("contextmenu",function(e){
            e.preventDefault();
        })


        var button = $("#btn-test");
        var box = $("#div-test");
        var width = 100;

        box.on("contextmenu",function(){
           
            if(width > 100 && width <= 1000)
            {
                width-=100;           
                box.animate({height:"-=100px",width:"-=100px"},500);
               
            }
            
            return false;
        });
        box.on("click",function(){
            
            if(width >= 100 && width < 1000)
            {
                width+=100;
                box.animate({height:"+=100px",width:"+=100px"},500);
            }
                
        });

})
