
jQuery(function(){
    function progressBar(percentage)
    {   

        var innerDiv = $("#innerDiv");
        innerDiv.stop();
        innerDiv.width(0);

        var divWidth = 500*(percentage/100)+"px";
        innerDiv.animate({
            "width":divWidth
        },3000);

        $({loading:1}).animate({loading:percentage},{
            duration:3000,
            step:function(now,tween){
                if(this.loading <= 8)
                    innerDiv.html(`<span style="display:inline-block;margin-top:10px"> ${Math.ceil(this.loading)} </span>`);
                else if(Math.ceil(this.loading) == 100)
                    innerDiv.html(`<span style="display:inline-block;margin-top:10px"> Upload's Done </span>`);
                else
                    innerDiv.html(`<span style="display:inline-block;margin-top:10px"> ${Math.ceil(this.loading)} % </span>`);
                end = tween.end;
            },
            easing:"swing"
        })
    }

   
    
    $("#btnStartAnimation").on("click",function(){
        var percent = $("#percent").val();
        progressBar(percent);
    })
});

jQuery(function(){
    $("input#showPassword").on("click",function(){
        
        $(this).is(':checked') ? $("input#password-text").attr("type","text") : $("input#password-text").attr("type","password");
        
    });
});
