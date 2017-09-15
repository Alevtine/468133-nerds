var link = document.querySelector(".mailus-link")
var popup = document.querySelector(".write-us")
var close = document.querySelector(".close-cross")


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("show");
    popup.classList.add("effect");
})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("show");
    popup.classList.remove("effect");
})

var submitButton = document.querySelector('.write-us button');
submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("effect");
    popup.classList.add("form-error");
});

var submitForm = document.querySelector('.write-us-inputs');
submitForm.submit(function(event) {
    if (!input_name.val() || !input_email.val() || !input_message.val()) {
        event.preventDefault();
        popup.removeClass("effect");
        setTimeout(function() {
            popup.addClass("form-error")
        }, 50);
    }
});


function initMap() {
    var uluru = {
        lat: 59.938792,
        lng: 30.323081
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });

    var image = 'img/map-marker.png';

    var marker = new google.maps.Marker({
        position: uluru,
        icon: image,
        map: map
    });
}
