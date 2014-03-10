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

UI.body.helpers({
  isActive: function(routes, className) {
    if (className.hash)
      className = 'active';

    return routeUtils.testRoutes(routes) ? className : '';
  },
  isActivePath: function(paths, className) {
    if (className.hash)
      className = 'active';

    return routeUtils.testPaths(paths) ? className : '';
  },
  isNotActive: function(routes, className) {
    if (className.hash)
      className = 'disabled';

    return ! routeUtils.testRoutes(routes) ? className : '';
  },
  isNotActivePath: function(paths, className) {
    if (className.hash)
      className = 'disabled';

    return ! routeUtils.testPaths(paths) ? className : '';
  }
});
