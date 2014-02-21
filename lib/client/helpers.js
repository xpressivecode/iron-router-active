if(Handlebars){
	Handlebars.registerHelper('isActive', function(routeName, className){
		if(className.hash)className = 'active';
		return (Router.current().route.name.toLowerCase() == routeName.toLowerCase()) ? className : '';
	});
}