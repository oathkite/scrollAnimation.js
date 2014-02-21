$.fn.setScrollAnimation = function(option) {
	option = $.extend({
		inPixel: 0,
		outPixel: option.inPixel,
		inAnimation: function() {},
		outAnimation: function() {}
	}, option);
	
	return this.each(function(i) {
		var status = false;
		
		$(window).on('scroll', $.proxy(function() {
			var scrollTop = $(window).scrollTop();
			
			if (option.inPixel < scrollTop && !status) {
				option.inAnimation();
				status = true;
			}
			
			if (option.outPixel > scrollTop && status) {
				option.outAnimation();
				status = false;
			}
			
		}, this));
	});
}