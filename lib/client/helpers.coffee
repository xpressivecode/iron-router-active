uiHelpers =
	
	isActive: (routes, className) ->
		if(className.hash)
			className = 'active'
		if share.RouteUtils.testRoutes routes then className else ''

	isActivePath: (paths, className) ->
		if(className.hash)
			className = 'active'
		if share.RouteUtils.testPaths paths then className else ''

	isNotActive: (routes, className) ->
		if(className.hash)
			className = 'disabled'
		unless share.RouteUtils.testRoutes routes then className else ''

	isNotActivePath: (paths, className) ->
		if(className.hash)
			className = 'disabled'
		unless share.RouteUtils.testPaths paths then className else ''

if(UI)
	UI.registerHelper name, func for name, func of uiHelpers
else
	console.warn and console.warn 'Iron-Router-Active helpers not registered. UI not defined'
