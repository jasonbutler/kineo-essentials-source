define(function(require) {

	var Backbone = require('backbone');
	var Adapt = require('coreJS/adapt');

	var footerView = Backbone.View.extend({
		initialize: function() {
			this.listenTo(Adapt, 'remove', this.remove);
			this.render();
		},
		render: function() {
	        var template = Handlebars.templates["footer"];
	        this.$el.html(template(this.model));
	        return this;
		},

		className: "block footer",

		events: {
			"click #root": "onRootClicked",
			"click #previous": "onPreviousClicked",
			"click #up": "onUpClicked",
			"click #next": "onNextClicked"
		},

		onRootClicked: function() {
			this.parent.onRootClicked();
		},
		onPreviousClicked: function() {
			this.parent.onPreviousClicked();
		},
		onUpClicked: function() {
			this.parent.onUpClicked();
		},
		onNextClicked: function() {
			this.parent.onNextClicked();
		}

	});

	return footerView;
})
	