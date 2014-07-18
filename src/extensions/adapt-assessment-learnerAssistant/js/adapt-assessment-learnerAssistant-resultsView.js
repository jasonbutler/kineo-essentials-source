/*
* adapt-learnerassistant-resultsView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var RollayView = require('extensions/adapt-rollay/js/rollayView');

	var LearnerassistantResultsView = RollayView.extend(
		{
			//UI
			className : "learnerassistant-resultsView",
			template : "learnerassistant-resultsView",
			postRender: function() {
				//update filter buttons
				this.$el.find(".learnerassistant-resultsView-filter a").removeClass("selected");
				this.$el.find(".learnerassistant-resultsView-filter a[data-filter='" + this.model.get("options").filter + "']").addClass("selected");
			}
		},
		{
			//INTERACTION
			events : {
				'click .learnerassistant-close': 'onCloseClick'
			},
			onCloseClick: function(event) {
				event.preventDefault();
				this.parent.results.hide();
			}
		}
	);



	return LearnerassistantResultsView;
})