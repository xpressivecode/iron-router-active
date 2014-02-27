if(Handlebars){
	var routeUtils = new function(){
		var context = function(){
			return Router.current();
		};

		var regex = function(expression){
			return new RegExp(expression, 'i');
		};

		this.testRoutes = function(routeNames){
			var reg = regex(routeNames);
			return reg.test(context().route.name);
		};

		this.testPaths = function(paths){
			var reg = regex(paths);
			return reg.test(context().path);
		};
	};

	Handlebars.registerHelper('isActive', function(routes, className){
		if(className.hash)className = 'active';
		
		return routeUtils.testRoutes(routes) ? className : '';
	});

	Handlebars.registerHelper('isActivePath', function(paths, className){
		if(className.hash)className = 'active';

		return routeUtils.testPaths(paths) ? className : ''; 
	});

	Handlebars.registerHelper('isNotActive', function(routes, className){
		if(className.hash)className = 'disabled';

		return routeUtils.testRoutes(routes) ? '' : className;
	});

	Handlebars.registerHelper('isNotActivePath', function(paths, className){
		if(className.hash)className = 'disabled';

		return routeUtils.testPaths(paths) ? '' : className;
	});
}