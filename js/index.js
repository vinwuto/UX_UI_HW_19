$(".anim").on("mouseenter", function() {
    $(this).css("box-shadow", "10px 10px 5px grey");
    console.log("This is working");
}).on("mouseleave", function(){
    $(this).css("box-shadow", "0px 0px 0px grey");
});

