$(document).ready(function(){
  $(":button").on("click", function(){
    event.preventDefault();
    var keyword = $("#keyword").val();
    console.log(keyword);
    var url = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
      // $.ajax takes an object as an argument with at least three key-value pairs...
      // (1) The URL endpoint for the JSON object.
      // (2) Type of HTTP request.
      // (3) Datatype. Usually JSON.
    }).done(function(response){
      var counter = 5;
      for(i=0; i < 5; i++) {
        newIMG = document.createElement("IMG");
        newIMG.src = response.data[i].images.fixed_height.url;
        $("body").append(newIMG);
        $(window).scroll(function() {
          if($(window).scrollTop() == $(document).height() - $(window).height()) {
            for(i=counter; i <counter+5; i++) {
              newIMG = document.createElement("IMG");
              newIMG.src = response.data[i].images.fixed_height.url;
              $("body").append(newIMG);
              if(counter == 25) {
                counter = 0;
              }
              else {
                counter += 5;
              }

            }
          }
        });
      }

    }).fail(function(){
      console.log("Ajax request fails!");
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.");
    });
  });
});
