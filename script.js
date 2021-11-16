<!--submit event-->
document.getElementById("button").onclick = function(){alert("You're registered!")
                                                      };
     

$("#button").click(function() {
    var firstname = $("#firstname").val();
    var email = $("#email").val();
    var lastname = $("#lastname").val();
    
    if(name.length == "")
      {
        ("#firstname").text("Please enter your              name");
        ("#firstname").focus();
        return false;
      }
    else if(email.length == "")
      {
        ("#email").text("Please enter your              email address");
        ("#email").focus();
        return false;
      }
    else if(pass.length == "")
      {
        ("#lastname").text("Please enter your              last name");
        ("#lastname").focus();
        return false;
      }
    else
      {
        var con = confirm("Are you finished?");
        if(con == true)
          {
            alert("Welcome to bingo");
            return true;
          }
        else
          {
            return false;
          }
      }
 
  
   $('#btnLoadData').click(function() {
    console.log("clicked");


    let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(result) {
            //data = $.parseJSON(result);
            console.log(result);
            $.each(result, function(result) {
                $("#dataContainer").append(result + " ");
            });
        }
    });

    // $.ajax({
    //     url: jsonURL,
    //     jsonp: "callback",
    //     dataType: "jsonp",
    //     data: { format: "json" },
    //     success: function(response) { console.log(response); }
    // });
});



// end of doc ready f/n
// });
