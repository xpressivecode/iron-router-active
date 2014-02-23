iron-router-active
==================

Quick Handlebars helper to determine if the current route is active, for nav links.

installation
============

`mrt add iron-router-active`

usage
=====

After installing the smart package, you'll have access to two new handlebars helpers called `isActive` and `isActivePath`. 

isActive works against route names, while isActivePath works against the current routes path. It works well with dynamic routes.

The helpers take 2 arguments.

1) routeName or routePath: used to determine whether or not the current route matches the routename that you've passed in. (mandatory)

This value is a regex expression so that you can pass in multiple routes with the | operator. I was unable to pass inline arrays into a Handlebars helper, so this was the next best alternative. 

2) className: this is an optional argument. if you do not set it, it will default to `active`. you can override that value, by specifying your own.

```html
<nav>
	<ul>
		<li class="{{ isActive 'dashboard' }}">...</li>
		<li class="{{ isActive 'dashboard|root' }}">...</li>
		<li class="{{ isActive 'users' 'on' }}">...</li>
		<li class="{{ isActivePath 'products' }}">...</li>
	</ul>
</nav>
```

In the first example, the LI element will have a class of `active`, as we've used the default value.

In the second example, you can see an example of passing in multiple routes. 

In the third example, the LI element will have a class of `on`, as we've overriden the default value with our own.

In the fourth example, you can see an example of checking to see if the current url contains the noun `products`, which will handle multiple scenarios, such as

1. /products
2. /products/new
3. /products/edit

So now if you had a top level `products` navigation element, it would stay highlighted even though your routename changes. 