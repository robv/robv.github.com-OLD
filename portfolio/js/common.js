var Site;

(function($) {
	Site = {

		// This vars should be set in <head> server-side
		config: {
			base_url: '',
			site_url: ''
		},
	
		// This method is called on every page
		init: function() {
			
			// On Dom Ready
			$(function() {
				
				WebFontConfig = {
					google: { families: [ 'Tangerine:bold' ] }
				};
				
				(function() {
					var wf = document.createElement('script');
					wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
					'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
					wf.type = 'text/javascript';
					wf.async = 'true';
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(wf, s);
				})();
			
				$('#portfolio_viewer').cycle({
					fx: 'scrollHorz', 
					easing: 'easeOutQuart',
					next: '#next',
					prev: '#prev',
					prevNextClick: onPrevNextClick,
					after: onAfter,
					timeout: 0
				});
				
				function onPrevNextClick() {
					$('.slide_info').fadeOut();
					$('#info_button a').removeClass('active');
				}
				
				function onAfter() {
					$('.slider_buttons').fadeOut();
					$('#' + $('.slide:visible .imgset').attr('id') + '_buttons').fadeIn();
				}
				
				var slides = 6;
				
				for (i=0;i<slides;i++)
				{
					var current = i+1;
					
					if (i == 0)
					{
						$('#info_button').after('<div id="slider_images' + current + '_buttons" class="slider_buttons"></div>');
					}
					else
					{
						$('#slider_images' + i + '_buttons').after('<div id="slider_images' + current + '_buttons" class="slider_buttons" style="display:none;"></div>');
					}
					
					// This line looks bad, but 1 line of js = i lines of html
					$('.slide_info', $('#slider_images' + current).parent('.slide')).prepend('<div class="close"><a href="/">Close</a></div>')
					
					$('#slider_images' + current).cycle({ 
					    fx:     'fade',
					    pager:  '#slider_images' + current + '_buttons'
					});
				}
				
				$('#info_button a, .imgset, .close').bind('click', function(e) {
					e.preventDefault();
					if($('.slide:visible .slide_info').is(':visible'))
					{
						$('.slide:visible .slide_info').fadeOut();
						$('#info_button a').removeClass('active');
					}
					else
					{
						$('.slide:visible .slide_info').fadeIn();
						$('#info_button a').addClass('active');
					}
				});
				
			});
		}
	};
})(jQuery);

Site.init();