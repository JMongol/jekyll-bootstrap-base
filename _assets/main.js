$(document).ready(function() {		
	// Put any custom JavaScript code to run at page load here.
	
	// Affix the side bar on the About page.
    $('.nav-border-sidenav').affix({
      offset: {
        top: 95,
		bottom: 270
      }
    });
});