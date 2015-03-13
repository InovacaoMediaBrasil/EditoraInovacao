$(function() {
	//SCROLLING
	$(function smoothScrolling() {
		$('.navAnchor a,.nextSection,.logo a').click(function() {
	
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {
				if (target.selector === '#home'){
					$('html,body').animate({
					scrollTop: target.offset().top-100}, 1000);
					return false;
				}
				if ($(window).width() > 640){
					$('html,body').animate({
					scrollTop: target.offset().top-80}, 1000);
					return false;
				}
				if ($(window).width() < 640){
					$('html,body').animate({
					scrollTop: target.offset().top-60}, 1000);
					return false;
				}
			} 
		}
		});
	});
	
	//TOPO
	$('#top a, .nextSection').click(function(){
		$('#top').removeClass('topTransform')
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('#top').addClass('topBlack')
		} else {
			$('#top').removeClass('topBlack')
		}
	});
	
	//MENU DROPDOWN
	$('#navTopbar span').click(function(){
		if($('#top').hasClass('topTransform')){
			$('#top').removeClass('topTransform');
		} else {
			$('#top').addClass('topTransform');
		}
	});
	//FORM VALIDATION
	$('#fContato').on('invalid', function(){
		var invalidFields = $(this).find('[data-invalid]');
		$('.bgModal').addClass('errorModal');
	})
	$('.closeModal,.bgModal').click(function(e){
		e.preventDefault();
		$('.bgModal').removeClass('errorModal');
	});
		
});
