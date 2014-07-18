/*
* adapt-rollay
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {
	var Backbone = require('backbone');
	var Rollay = require('extensions/adapt-rollay/js/adapt-rollay');
	//RollayView constructor - for creating instances of this view
	//Use:  new RollayView({ name:value }, { name:value }, { name:value }, { name:value }....);
	var RollayView = function() {
		for(var i = 0; i < arguments.length; i++) _.extend(this, arguments[i]);
		Backbone.View.call(this);
	};
	//RollayView extender - for creating extensions of this view, also allows extensions of extensions
	//Use:  RollayView.extend({ name:value }, { name:value }, { name:value }, { name:value }....);
	RollayView.extend = function(obj) {
		var constructor = function() { this.constructor.apply(this, arguments); };
		_.extend(constructor, this);
		_.extend(constructor.prototype, this.prototype);
		constructor.prototype.constructor = RollayView;
		for(var i = 0; i < arguments.length; i++) _.extend(constructor.prototype, arguments[i]);
		return constructor;
	};
	//RollayView prototype - based upon Backbone.View
	RollayView.prototype = _.extend({}, Backbone.View.prototype);
	//RollayView constructor - for extensions instance construction
	RollayView.prototype.constructor = RollayView;
	RollayView.prototype.model = null;
	RollayView.prototype.template = null;
	//RollayView.prototype.render - uses handlebars to render the template at instance.template, passing the instance.model as the template context
	RollayView.prototype.render = function() {
		if (typeof this.template == "undefined") throw "No template property found on RollayView instance!";
		if (typeof Handlebars.templates[this.template] == "undefined")  throw "Template not found on RollayView instance: " + this.template;
		var template = Handlebars.templates[this.template];
		var RollayViewHandle = this;
	    if (typeof RollayViewHandle.model != "undefined" && RollayViewHandle.model !== null) {
	    	if (typeof RollayViewHandle.model.toJSON == "function") RollayViewHandle.$el.html(template(RollayViewHandle.model.toJSON()));
	    	else RollayViewHandle.$el.html(template(RollayViewHandle.model));
		} else RollayViewHandle.$el.html(template());
	   	return this;
	};
	RollayView.prototype.reRender = function() {
		if (typeof this.preRender == "function") this.preRender();
		if (typeof this.render == "function") this.render();
		if (typeof this.postRender == "function") this.postRender();
	};
	return RollayView;
});