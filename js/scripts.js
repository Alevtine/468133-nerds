
            var link = document.querySelector(".mailus-link")
            var popup = document.querySelector(".write-us")
            var close = document.querySelector(".close-cross")

            link.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.add("show")
            })

            close.addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.remove("show")
            })



          function initMap() {
            var uluru = {lat: 59.938792, lng: 30.323081};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 17,
              center: uluru
            });

            var image = 'img/map-marker.png';

            var marker = new google.maps.Marker({
              position: uluru,
              icon: image,
              map: map
            });}
