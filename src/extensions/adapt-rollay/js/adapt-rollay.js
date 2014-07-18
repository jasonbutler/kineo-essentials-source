/*
* adapt-rollay
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	
	var rollay = $('<div>').attr("id","rollay");
	var visibility = {
			top: 0,
			hidden: true,
			scrollTop: 0
		};

	Adapt.rollay = {
		$el: rollay,
		model: null,
		view: null,
		initialize: function() {
			this.model = new Backbone.Model(Adapt.course.get("_rollay"));
			if (typeof this.model.get("_duration") == "undefined") this.model.set("_duration",{ show:200, hide:200 });

			Adapt.trigger("rollay:initialised");
		},
		setCustomView: function(rollayView) {
			rollayView.undelegateEvents();
			Adapt.trigger("rollay:setCustomView", rollayView);
			this.view = rollayView;
			this.$el.html("").append(this.view.$el);
			rollayView.delegateEvents();
		},
		onResize: function() {
			visibility.top = parseInt($(".navigation").css("height"));
			if (!visibility.hidden) {
				this.$el.css({"top": visibility.top + "px"});
				$("body").css({ "height": $(window).height() + "px" });
			}
		},
		render: function() {
			if (typeof this.view.reRender == "function") this.view.reRender();
		},
		show: function(duration) {
			if (!visibility.hidden) return;
			Adapt.trigger("popup:opened");
			this.render();
			if (typeof duration == "undefined") duration = this.model.get("_duration").show;
			var rollay = this;
			if (duration > 0) {
				this.$el.css({top: $(window).height() + "px", display: "block" });
				this.$el.animate({ top: visibility.top + "px" }, {duration:duration, start: function() {
					visibility.hidden = false;
					Adapt.trigger("rollay:opened");
				}, complete: function() {
					visibility.scrollTop = $("body").scrollTop();
					$("body").css({ "height": $(window).height() + "px" }).addClass("stop-scroll");
				}});
			} else {
				this.$el.css({top: visibility.top + "px", display: "block" });
				visibility.hidden = false;
				visibility.scrollTop = $("body").scrollTop();
				$("body").css({ "height": $(window).height() + "px" }).addClass("stop-scroll");
				Adapt.trigger("rollay:opened");
			}
			
		},
		hide: function(duration) {
			if (visibility.hidden) return;
			if (typeof duration == "undefined") duration = this.model.get("_duration").hide;
			var rollay = this;
			function finished() {
				visibility.hidden = true;
				Adapt.trigger("popup:closed");
				Adapt.trigger("rollay:closed");
				rollay.$el.css({ display: "none" });
			}
			$("body").css("height", null);
			$("body").removeClass("stop-scroll");
			$("body").scrollTop(visibility.scrollTop);
			if (duration > 0) {
				this.$el.css({ top: visibility.top + "px" });
				this.$el.animate({ top: $(window).height() + "px" }, {duration:duration, complete: finished});
			} else {
				this.$el.css({ top: $(window).height() + "px" });
				finished();
			}
		}
	};

	Adapt.on("app:dataReady", function() {
		Adapt.rollay.initialize.call(Adapt.rollay);
	});

	//some other popup is open
	Adapt.on("drawer:opened", function () { 
		Adapt.rollay.hide.call(Adapt.rollay); 
	});

	//back button clicked
	Adapt.on("navigation:backButton",  function () { 
		Adapt.rollay.hide.call(Adapt.rollay); 
	});

	//device resize and navigation drawn
	Adapt.on("device:resize", function() { Adapt.rollay.onResize.call(Adapt.rollay); } );
	Adapt.on("navigationView:postRender", function() { Adapt.rollay.onResize.call(Adapt.rollay); } );
	
	$("body").append(rollay);

});