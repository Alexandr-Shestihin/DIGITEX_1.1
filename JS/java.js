	$(document).ready(function(){
		$('.header__burger').click(function(event){
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		})
		$('.header__link').click(function(event){
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		})


		$('.page-menu__burger').click(function(event){
			$('.page-menu__burger, .page-menu__menu').toggleClass('active');
			$('body').toggleClass('lock');
		})
		$('.page-menu__link').click(function(event){
			$('.page-menu__burger, .page-menu__menu').removeClass('active');
			$('body').removeClass('lock');
		})

			$('.header__link').click(function(event){
			$('.header__link').removeClass('link_active');
			$(this).addClass('link_active');
		})
			$('.page-menu__link').click(function(event){
			$('.page-menu__link').removeClass('link_active');
			$(this).addClass('link_active');
		})

		$('.security__page_1').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$(this).addClass('security__page_active');
			$('.security__text-body_1').addClass('security__text-body_active');
		})
		$('.security__page_2').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$(this).addClass('security__page_active');
			$('.security__text-body_2').addClass('security__text-body_active');
		})
		$('.security__page_3').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$(this).addClass('security__page_active');
			$('.security__text-body_3').addClass('security__text-body_active');
		})

		$('.security__btn_start').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$('.security__page_2').addClass('security__page_active');
			$('.security__text-body_2').addClass('security__text-body_active');
		})
		$('.security__btn_next').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$('.security__page_3').addClass('security__page_active');
			$('.security__text-body_3').addClass('security__text-body_active');
		})
		$('.security__btn_back').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$('.security__page_1').addClass('security__page_active');
			$('.security__text-body_1').addClass('security__text-body_active');
		})
		$('.security__btn_prev').click(function(event){
			$('.security__page').removeClass('security__page_active');
			$('.security__text-body').removeClass('security__text-body_active');
			$('.security__page_2').addClass('security__page_active');
			$('.security__text-body_2').addClass('security__text-body_active');
		})
	})
