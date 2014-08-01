/*
* adapt-bottomnavigation
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {
	var Backbone = require('backbone');
	var BottomNavigation = require('extensions/adapt-bottomnavigation/js/adapt-bottomnavigation');
	//BottomNavigationView constructor - for creating instances of this view
	//Use:  new BottomNavigationView({ name:value }, { name:value }, { name:value }, { name:value }....);
	var BottomNavigationView = function() {
		for(var i = 0; i < arguments.length; i++) _.extend(this, arguments[i]);
		Backbone.View.call(this);
	};
	//BottomNavigationView extender - for creating extensions of this view, also allows extensions of extensions
	//Use:  BottomNavigationView.extend({ name:value }, { name:value }, { name:value }, { name:value }....);
	BottomNavigationView.extend = function(obj) {
		var constructor = function() { this.constructor.apply(this, arguments); };
		_.extend(constructor, this);
		_.extend(constructor.prototype, this.prototype);
		constructor.prototype.constructor = BottomNavigationView;
		for(var i = 0; i < arguments.length; i++) _.extend(constructor.prototype, arguments[i]);
		return constructor;
	};
	//BottomNavigationView prototype - based upon Backbone.View
	BottomNavigationView.prototype = _.extend({}, Backbone.View.prototype);
	//BottomNavigationView constructor - for extensions instance construction
	BottomNavigationView.prototype.constructor = BottomNavigationView;
	BottomNavigationView.prototype.model = null;
	BottomNavigationView.prototype.template = null;
	//BottomNavigationView.prototype.render - uses handlebars to render the template at instance.template, passing the instance.model as the template context
	BottomNavigationView.prototype.render = function() {
		if (this.template === null) return this;
		if (typeof this.template == "undefined") throw "No template property found on BottomNavigationView instance!";
		if (typeof Handlebars.templates[this.template] == "undefined")  throw "Template not found on BottomNavigationView instance: " + this.template;
		var template = Handlebars.templates[this.template];
		var BottomNavigationViewHandle = this;
	    if (typeof BottomNavigationViewHandle.model != "undefined" && BottomNavigationViewHandle.model !== null) {
	    	if (typeof BottomNavigationViewHandle.model.toJSON == "function") BottomNavigationViewHandle.$el.html(template(BottomNavigationViewHandle.model.toJSON()));
	    	else BottomNavigationViewHandle.$el.html(template(BottomNavigationViewHandle.model));
		} else BottomNavigationViewHandle.$el.html(template());
	   	return this;
	};
	BottomNavigationView.prototype.reRender = function() {
		if (typeof this.preRender == "function") this.preRender();
		if (typeof this.render == "function") this.render();
		if (typeof this.postRender == "function") this.postRender();
	};
	return BottomNavigationView;
});