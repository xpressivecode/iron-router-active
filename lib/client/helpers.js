if(Handlebars){
	var getContext = function(){
		return Router.current();
	};

	var getRoute = function(){
		return getContext().route.name;
	};

	var getPath = function(){
		return getContext().path;
	};

	var initRegex = function(expression){
		return new RegExp(expression, 'i');
	};

	Handlebars.registerHelper('isActive', function(routes, className){
		var currentRoute = getRoute();
		var reg = initRegex(routes);

		if(className.hash)className = 'active';
		
		return reg.test(currentRoute) ? className : '';
	});

	Handlebars.registerHelper('isActivePath', function(paths, className){
		var currentPath = getPath();
		var reg = initRegex(paths);

		if(className.hash)className = 'active';

		return reg.test(currentPath) ? className : ''; 
	});

	Handlebars.registerHelper('isNotActive', function(routes, className){
		var currentRoute = getRoute();
		var reg = initRegex(routes);

		if(className.hash)className = 'disabled';

		return reg.test(currentRoute) ? '' : className;
	});

	Handlebars.registerHelper('isNotActivePath', function(paths, className){
		var currentPath = getPath();
		var reg = initRegex(paths);

		if(className.hash)className = 'disabled';

		return reg.test(currentPath) ? '' : className;
	});
}