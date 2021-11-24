// $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

    

    let jsonURL = "demo.json";

   
    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            
            console.log(data.firstName);
            
            //loads first name into my first input box (in example #1)
            $("#noSpaces").val(data.firstName);
            console.log(data.language);

            $('input[type=checkbox]').each(function () {
                if (data.language === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
               
                $(`#${key}`).val(val);
                
            });
        }
    });
});



// end of doc ready f/n
// });
