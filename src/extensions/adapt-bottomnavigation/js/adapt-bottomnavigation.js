/*
* adapt-bottomnavigation
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	
	var bottomnavigation = $('<div>').attr("id","bottomnavigation");
	var visibility = {
			height: 0,
			hidden: true
		};

	Adapt.bottomnavigation = {
		$el: bottomnavigation,
		model: null,
		view: null,
		initialize: function() {
			this.model = new Backbone.Model(Adapt.course.get("_bottomnavigation"));
			if (typeof this.model.get("_duration") == "undefined") this.model.set("_duration",{ show:200, hide:200 });
			if (typeof this.model.get("_showMenu") == "undefined") this.model.set("_showMenu",false);

			if (this.model.get("_showMenu")) {
				this.show();
			}			

			visibility.height = parseInt(this.$el.css("height"));

			Adapt.trigger("bottomnavigation:initialised");
		},
		setCustomView: function(bottomnavigationView) {
			bottomnavigationView.undelegateEvents();
			Adapt.trigger("bottomnavigation:setCustomView", bottomnavigationView);
			this.view = bottomnavigationView;
			this.$el.html("").append(this.view.$el);
			bottomnavigationView.delegateEvents();
		},
		onResize: function() {
			
		},
		render: function() {
			if (typeof this.view.reRender == "function") this.view.reRender();
		},
		show: function(duration) {
			if (!visibility.hidden) return;
			Adapt.trigger("popup:opened");
			this.render();
			if (typeof duration == "undefined") duration = this.model.get("_duration").show;
			var bottomnavigation = this;

			if (duration > 0 ) {
				$("body").addClass("body-wrapper-bottomnavigation");
				this.$el.css({"height": "0px", "display": "block"});
				this.$el.animate({ height: visibility.height + "px" }, {duration:duration, start: function() {
					
				}, complete: function() {
					visibility.hidden = false;
					Adapt.trigger("bottomnavigation:opened");
				}});
			} else {
				$("body").addClass("body-wrapper-bottomnavigation");
				this.$el.css({height: visibility.height + "px", display: "block" });
				visibility.hidden = false;
				Adapt.trigger("bottomnavigation:opened");
			}
		},
		hide: function(duration) {
			if (visibility.hidden) return;
			if (typeof duration == "undefined") duration = this.model.get("_duration").hide;
			var bottomnavigation = this;
			
			//this.$el.hide();
			//Adapt.trigger("bottomnavigation:closed");

			function finished() {
				visibility.hidden = true;
				Adapt.trigger("popup:closed");
				Adapt.trigger("bottomnavigation:closed");
				bottomnavigation.$el.hide();
			}
			$("body").removeClass("body-wrapper-bottomnavigation");
			if (duration > 0) {
				this.$el.animate({ height: "0px" }, {duration:duration, complete: finished});
			} else {
				finished();
			}
		}
	};

	Adapt.on("app:dataReady", function() {
		Adapt.bottomnavigation.initialize.call(Adapt.bottomnavigation);
	});

	//device resize and navigation drawn
	Adapt.on("device:resize", function() { Adapt.bottomnavigation.onResize.call(Adapt.bottomnavigation); } );
	Adapt.on("navigationView:postRender", function() { Adapt.bottomnavigation.onResize.call(Adapt.bottomnavigation); } );
	
	$("body").append(bottomnavigation);

});