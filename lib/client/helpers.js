var routeUtils = {
  context: function() {
    return Router.current();
  },

  regex: function(expression) {
    return new RegExp(expression, 'i');
  },

  testRoutes: function(routeNames) {
    var reg = this.regex(routeNames);
    return this.context() && reg.test(this.context().route.name);
  },

  testPaths: function(paths) {
    var reg = this.regex(paths);
    return this.context() && reg.test(this.context().path);
  }
};

UI.registerHelper('isActive', function(routes, className) {
  if (className.hash)
    className = 'active';

  return routeUtils.testRoutes(routes) ? className : '';
});

UI.registerHelper('isActivePath', function(paths, className) {
  if (className.hash)
    className = 'active';

  return routeUtils.testPaths(paths) ? className : '';
});

UI.registerHelper('isNotActive', function(routes, className) {
  if (className.hash)
    className = 'disabled';

  return ! routeUtils.testRoutes(routes) ? className : '';
});

UI.registerHelper('isNotActivePath', function(paths, className) {
  if (className.hash)
    className = 'disabled';

  return ! routeUtils.testPaths(paths) ? className : '';
});
