if(Handlebars){
	Handlebars.registerHelper('isActive', function(routes, className){
		var currentRoute = Router.current().route.name.toLowerCase();
		var reg = new RegExp(routes, 'i');

		if(className.hash)className = 'active';
		
		return reg.test(currentRoute) ? className : '';
	});

	Handlebars.registerHelper('isActivePath', function(routes, className){
		var currentPath = Router.current().path;
		var reg = new RegExp(routes, 'i');

		if(className.hash)className = 'active';

		return reg.test(currentPath) ? className : ''; 
	});
}