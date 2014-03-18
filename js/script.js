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
		$(this).append('<iframe width="560" height="180" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.br/maps?f=q&amp;source=s_q&amp;hl=pt-BR&amp;geocode=&amp;q=Rua+C%C3%B4nego+Jos%C3%A9+Norberto,+138+-+Alto+do+Ipiranga&amp;aq=&amp;sll=-23.609581,-46.614061&amp;sspn=0.017558,0.016458&amp;ie=UTF8&amp;hq=&amp;hnear=Rua+C%C3%B4nego+Jos%C3%A9+Norberto+-+Vila+Brasilio+Machado,+S%C3%A3o+Paulo&amp;ll=-23.611763,-46.610826&amp;spn=0.008779,0.008229&amp;t=m&amp;z=14&amp;output=embed"></iframe>');
	});
	
	$('.mapaLogistica').click(function(){
		$(this).find('img').remove();
		$(this).append('<iframe width="560" height="180" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.br/maps?q=Rua+Gama+Lobo,+1944+-+Alto+do+Ipiranga&amp;ie=UTF8&amp;hq=&amp;hnear=Rua+Gama+Lobo,+1944+-+Vila+Dom+Pedro+I,+S%C3%A3o+Paulo,+04117-091&amp;t=m&amp;z=14&amp;ll=-23.601106,-46.611843&amp;output=embed"></iframe>');
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