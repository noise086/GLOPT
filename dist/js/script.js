$(document).ready(function() {
	
	// $('#price__form form').validate();
	
		

	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
				required: true,
				email: true
				}
			},
			// messages: {
			// 	name: "Введите Ваше Имя",
			// 	phone: "Введите Ваш номер телефона",
			// 	email: {
			// 		required: "Введите Ваш Email",
			// 		email: "Формат Email должен быть name@domain.com"
			// 	}
			// 	}
			});
		}

	validateForm('#price-form form');
		

});