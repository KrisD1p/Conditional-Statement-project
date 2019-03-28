    $(".glt").click(function() {
        var age = $(".age").val();
        var pick =$(".pick").val();
         console.log(age);
     if(age>= 18 && pick==="good") {
        $(".Chris").text("SpongeBob");
     }
     
     else if( age <= 18 && pick==="good" ) {
        $(".Mo").text("pearl");
     }
     
    else if( age>=18 && pick==="evil" ) {
        $(".Mo").text("Planktin");
     }
     
    else if( age <= 18 && pick==="evil" ) {
        $(".Mo").text("Karen");
     }
     
     else if( age> 100 && pick==="evil" ) {
        $(".Mo").text("The FlyingDutchman");
     }
     
});
    