$(document).ready(function(){

        $("p").css("color","blue")
        $("p.intro").css("color","green")

        $("#title").css("color","green")
        // $("#title").text("color","green")


        $(".Colorbtn").click(function(){

                $(this).css("background","green")

        })


        $("p:first").css("color", "lightblue")


        $("ul li:first").css("color", "lightgreen")
        $("ul li:first-child").css("color", "green")


        $("tr:even").css("background", "green")
        $("tr:odd").css("background", "red")

         $("[href]").css("color", "green")

         $("#btn").click(function(){

                $("#message").text("you clicked the button")
                $(this).css("background","lightblue")


         })

         $("#btn").mouseenter(function(){

                $("#message").text("Ypu enter to button")

         })

         $("#btn").mouseout(function(){

                $("#message").text("Ypu out to button")

         })


         $("#name").focus(function(){

                $("#message").text("typing...........")
                $(this).css("background","lightblue")

         })

          $("#name").blur(function(){

                $("#message").text("")
                $(this).css("background","lightblue")

         })


         $("#name").blur(function(){

        $(this).css("background","white")

         })

         $("#course").change(function(){
                $("#message").text($(this).val())

         })

// -----------------------------------------------------------------------------------------------------------------------------------------------------
        $("#btn1").mouseover(function() {
                $("#table").hide(100)
        })

         $("#btn2").mouseover(function() {
                $("#table").show(100)
        })



         $("#btn1").dblclick(function() {
                $("#message2").text("You Hide The profile")
                $("#card").hide(100)
        })

         $("#btn2").dblclick(function() {
                $("#message2").text("You Show The profile")
                $("#card").show(100)
        })



         $("#btn3").click(function(){

                $("#title").text("Welcome Student!")
                $("#message2").text("You change The profile Title")
                


         })

         $("#course").change(function(){
                $("#message2").text($(this).val())

         })

        //      $("#btn1").dblclick(function() {
        //         $("#table").hide(100)
        // })

        //  $("#btn2").dblclick(function() {
        //         $("#table").show(100)
        // })



        
})



// $("title").text("welcome")
