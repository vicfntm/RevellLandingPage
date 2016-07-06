$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-55;

        //анимируем переход на расстояние - top за 800 мс. N.B. Не забудь подключить jQuery!!!
        $('body,html').animate({ scrollTop: top }, 800);
    });
});
