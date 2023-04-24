/** 
 * Load JS
 * 
 */
$(document).ready(function () {
    // Load Star rating
    $(".star-rating").starRating({
        starSize: 25,
        totalStars: 5,
        useFullStars: true,
        disableAfterRate: false,
        readOnly: true
    });

    // NavBar
    $(".nav-link1").off("click").on("click", function(){
        var urlParams = new URLSearchParams(window.location.search);
        document.location.href = "/?code="+urlParams.get('code');
    });

    $(".nav-link2").off("click").on("click", function(){
        var urlParams = new URLSearchParams(window.location.search);
        document.location.href = "/showjournal?code="+urlParams.get('code');
    });

    // DatePicker
    $('[data-toggle="datepicker"]').val(dayjs().format("YYYY-MM-DD"));

    $('[data-toggle="datepicker"]').datepicker({
        format: 'yyyy-mm-dd'
    });

    loadJournalData(dayjs().format("YYYY-MM-DD"))

    $('[data-toggle="datepicker"]').on('pick.datepicker', function (event) {
        loadJournalData(dayjs(event.date).format("YYYY-MM-DD"))
        $('[data-toggle="datepicker"]').datepicker('hide');
      });

});

// Load journal data
function loadJournalData(date){
    var data = {};
    data['sendkey'] = "asdn9n34b374b8734vasdv7v73v324";
    data['date'] = date;

    $(".star-rating").starRating('setRating', 0);
    $( "textarea" ).val("");
    $( "input" ).not(':input[data-toggle="datepicker"]').val("");

    fetch(window.location.origin+'/loadjournal', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((response) => {
        if(response){
            for(var i=0; i<response.length; i++){
                if(response[i]['type'] == "emoji"){
                    $(".star-rating").starRating('setRating', response[i]['value']);
                }else{
                    if($( "label:contains('"+response[i]['name']+"')" ).closest(".form-outline").find("textarea").length != 0){
                        $( "label:contains('"+response[i]['name']+"')" ).closest(".form-outline").find("textarea").val(response[i]['value']);
                    }

                    if(response[i]['name'] == "Was mache ich heute, um diesem Ziel näher zu kommen?"){
                        var power_string = response[i]['value'];
                        power_string = power_string.split("-");

                        for(var a=1; a<power_string.length; a++){
                            $( "#power"+a ).val(power_string[a]);
                        }
                    }

                }
            }
        }
    })

}

// Load Quotes
document.addEventListener("DOMContentLoaded", () => {
    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
          // Update DOM elements
          $(".blockquote-text").text(data.content);
          $(".blockquote-title").text(data.author);
        } 
      }
  
    // call updateQuote once when page loads
    updateQuote();
  });
