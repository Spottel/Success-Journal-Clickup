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
        disableAfterRate: false
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


    // Check if already an journal exists for today
    var data = {};
    data['sendkey'] = "asdn9n34b374b8734vasdv7v73v324";
    data['date'] = dayjs().format("YYYY-MM-DD");

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
            $('#content_form_area').remove();
            $('.btn-primary').prop('disabled', true);
            $('#content_exists_area').show();
        }
    })


});

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
  

 

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation');

/** 
 * Loop over the setting forms and add the listener
 * 
 */
Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            var data = {};
            for(var i=0; i<event.target.length; i++){
                var name = event.target[i].id;
                var value = event.target[i].value;
                        
                if(event.target[i].type == "checkbox"){
                    if(event.target[i].checked){
                        value = 'true';
                    }else{
                        value = 'false';
                    }
                }

                data[name] = value; 
            }

            data['sendkey'] = "asdn9n34b374b8734vasdv7v73v324";
            data['rating'] = $('.star-rating').starRating('getRating');


            fetch(window.location.origin+'/savejournal', {
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
                    var x = document.getElementById("alert-success");
                    x.classList.add("show");
                    setTimeout(function(){ x.classList.remove("show");}, 3000);

                     
                    form.classList.remove('was-validated');
                    form.reset();
                    $(".star-rating").starRating('setRating', 0);

                    window.location.reload();

                }else{
                    var x = document.getElementById("alert-error");
                    x.classList.add("show");
                    setTimeout(function(){x.classList.remove("show"); }, 3000);
                }
            })
            
        }
        form.classList.add('was-validated');
        event.preventDefault();
        event.stopPropagation();
    }, false);
});