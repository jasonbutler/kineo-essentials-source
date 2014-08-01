/*
* adapt-bookmarking
* License - https://github.com/cgkineo/adapt-bookmarking/LICENSE
* Maintainers - Dan Ghost <daniel.ghost@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var Handlebars = require('handlebars');

	var BookmarkingDialog = Backbone.View.extend({

        className: "bookmarking-dialog",

        initialize: function() {
        	this.listenTo(Adapt, 'remove', this.remove);

            this.render();
        },

        events: {
            'click .yes': 'onYesClicked',
            'click .no': 'onNoClicked'
        },

        render: function() {
            var data = this.model.toJSON();
            var template = Handlebars.templates["bookmarking"];
           	$(this.el).html(template(data)).prependTo('#wrapper');
            //$('#wrapper').append(this.$el);
            return this;
        },

        onYesClicked: function(event) {
            event.preventDefault();

            Adapt.navigateToElement("." + this.model.get('_locationID'));
        },

        onNoClicked: function(event) {
        	event.preventDefault();

            this.remove();
        }
    });

	return BookmarkingDialog;
});