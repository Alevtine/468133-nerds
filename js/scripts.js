var link = document.querySelector('.mailus-link')
var popup = document.querySelector('.write-us')
var close = document.querySelector('.close-cross')
var submitForm = document.querySelector('.write-us-inputs')
var submitInputs = submitForm.querySelectorAll('input')
var nameInput = submitForm.querySelector('input[name="Name"]')
var emailInput = submitForm.querySelector('input[name="Email"]')
var textInput = submitForm.querySelector('input[name="Text"]')

link.addEventListener('click', function(evt) {
	evt.preventDefault()
	popup.classList.add('show')
	popup.classList.add('effect')
})

var closePopup = function (evt) {
	popup.classList.remove('show')
	popup.classList.remove('effect')
	popup.classList.remove('form-error')
}

close.addEventListener('click', function (evt) {
	closePopup()
	evt.preventDefault()
})

var checkV = function (elem) {
	elem.validity.valueMissing === true ? popup.classList.add('form-error') : popup.classList.remove('form-error')
}

var submitButton = document.querySelector('.write-us button')
submitButton.addEventListener('click', function(evt) {
	checkV(nameInput)
	popup.classList.remove('effect')
})


submitForm.addEventListener('submit', function(evt) {
	popup.classList.remove('form-error')
	popup.classList.remove('effect')
})

var isEscPress = function (evt) {
	evt.keyCode === 27 ? closePopup() : false
}

document.addEventListener('keydown', isEscPress)


function initMap() {
	var uluru = {
		lat: 59.938792,
		lng: 30.323081
	}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
	})

	var image = 'img/map-marker.png'

	var marker = new google.maps.Marker({
		position: uluru,
		icon: image,
		map: map
	})
}
