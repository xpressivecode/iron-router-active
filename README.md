iron-router-active
==================

Quick Handlebars helper to determine if the current route is active, for nav links.

installation
============

`mrt add iron-router-active`

usage
=====

After installing the smart package, you'll have access to a new handlebars helper called `isActive`. 

The helper takes 2 arguments.

1) routeName: used to determine whether or not the current route matches the routename that you've passed in. (mandatory)

2) className: this is an optional argument. if you do not set it, it will default to `active`. you can override that value, by specifying your own.

```html
<nav>
	<ul>
		<li class="{{isActive 'dashboard'}}">...</li>
		<li class="{{isActive 'users' 'on'}}">...</li>
	</ul>
</nav>
```

In the first example, the LI element will have a class of `active`, as we've used the default value.

In the second example, the LI element will have a class of `on`, as we've overriden the default value with our own.

