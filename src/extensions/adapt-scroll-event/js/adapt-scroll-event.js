/*
*
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');

	var ScrollEventView = Backbone.View.extend({

		initialize: function() {
			$(window).on("scroll", _.bind(this.scrollPosition, this));
		},

		scrollPosition: function() {
			var top = $(window).scrollTop();
			Adapt.trigger("scrollEvent:scrollPosition", top);
		}

	});

	Adapt.on('app:dataReady', function() {
		new ScrollEventView();
	});

});