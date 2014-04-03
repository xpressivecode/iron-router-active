class share.RouteUtils

	_context = ->
		Router.current()

	_regex = (expression) ->
		new RegExp expression, 'i'

	@testRoutes: (routeNames) ->
		rx = _regex routeNames
		rx.test _context().route.name

	@testPaths: (paths) ->
		rx = _regex paths
		rx.test _context().path
