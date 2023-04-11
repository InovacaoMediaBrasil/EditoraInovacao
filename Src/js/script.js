$(function() {
	//SCROLLING
	$(function smoothScrolling() {
		$('#navTopo a, #navRodape a, #subBanners a').click(function() {
	
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {
				if (target.selector === '#home'){
					$('html,body').animate({
					scrollTop: target.offset().top-160}, 1000);
					return false;
				}
				$('html,body').animate({
				scrollTop: target.offset().top-79}, 1000);
				return false;
			} 
		}
		});
	});
	//TOPO FIXO
	$(window).scroll(function(){
		var topo = $('.topo');
		if ($(this).scrollTop() > 540){
			topo.addClass("topoFixo");
		} else {
			topo.removeClass("topoFixo");
		}
	});
	//MAPAS GOOGLE
	$('.mapaEditora').click(function(){
		$(this).find('img').remove();
		$(this).append('<iframe width="560" height="360" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.6430287754397!2d-46.5739886!3d-23.581260899999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c3e2774a7bd%3A0xf0bc2bed8fdc51d1!2sR.+Itanha%C3%A9m%2C+527+-+Vila+Prudente%2C+S%C3%A3o+Paulo+-+SP%2C+03137-020!5e0!3m2!1spt-BR!2sbr!4v1414514830212"></iframe>');
	});
	//MARCAS
	$('#carouselMarcas ul li').click(function(){
		var liMarca = $(this).index('#carouselMarcas ul li:nth-child(n)');
		var marca = $('#nossasMarcas .marca').eq(liMarca);
		
		$('.marca').removeClass('marcaShow').addClass('marcaHide');
		marca.removeClass('marcaHide').addClass('marcaShow');
	});
	//CONTATO
	if(window.location.search == '?confirmado'){
		$('#modalContato, .modal-backdrop').addClass('in');
		$('.modal-backdrop,.close,.fecharModal').click(function(){
			$('#modalContato, .modal-backdrop').removeClass('in');
		});
	};
	
});