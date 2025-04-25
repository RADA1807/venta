var swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: false /* Desactiva el ajuste de tamaño de los puntos */
	},
	
    breakpoints: {
        620: { slidesPerView: 1, spaceBetween: 20 },
        680: { slidesPerView: 2, spaceBetween: 40 },
        920: { slidesPerView: 3, spaceBetween: 40 },
        1240: { slidesPerView: 4, spaceBetween: 50 },
    }
});
