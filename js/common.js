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
        
			});
			
			// On Window Load
			$(window).load(function() {
				
				WebFontConfig = {
          google: { families: [ 'Molengo', 'Merriweather:light,regular,bold,900' ] }
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

			});

		}
	};
})(jQuery);

Site.init();