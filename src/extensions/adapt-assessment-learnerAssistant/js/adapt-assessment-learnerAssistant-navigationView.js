/*
* adapt-learnerassistant-resultsView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var BottomNavigationView = require('extensions/adapt-bottomnavigation/js/bottomnavigationView');

	var LearnerassistantNavigationView = BottomNavigationView.extend(
		{
			//UI
			className : "learnerassistant-navigationView navigation",
			template : "learnerassistant-navigationView",
			postRender: function() {
				var NavigationViewHandle = this;
				this.$el.find("#learnerassistant-toggle").addClass("open").removeClass("closed");
				Adapt.on("learnerassistant:resultsopened", function() {
					NavigationViewHandle.$el.find("#learnerassistant-toggle").addClass("open").removeClass("closed");
				});
				Adapt.on("learnerassistant:resultsclosed", function() {
					NavigationViewHandle.$el.find("#learnerassistant-toggle").removeClass("open").addClass("closed");
				});
			}
		},
		{
			//EVENTS
			events: {
				"click #learnerassistant-revision" : "onNextClick",
				"click #learnerassistant-next" : "onNextClick",
				"click #learnerassistant-finish" : "onNextClick"
			},
			onNextClick: function(event) {
				this.model.set("isInteractionsComplete", false);
				var assoc = _.findWhere(this.model.get('associatedLearning'), { _interactions: 0 });

				if (this.model.get("options")._isReviewComplete || typeof assoc == "undefined") {
					//FINISHED
					var settings = this.model.get("settings");
					var alertObject = {
					    title: settings._end.title,
					    body: settings._end.body,
					    confirmText: settings._end.button,
					    _callbackEvent: "learnerassistant:takeQuiz",
					    _showIcon: false
					};

					Adapt.trigger('notify:alert', alertObject);

				} else {
					//BEGIN REVISION & NEXT
					event.preventDefault();
					$currentTarget = $(event.currentTarget);
					var element = Adapt.findById(assoc._id)
					var typeNameConversion = {
						"component": "components",
						"article": "articles",
						"block": "blocks",
						"menu": "contentObject",
						"page": "contentObject"
					};
					
					this.model.set("currentAssociatedLearningID", assoc._id);
					Adapt.navigateToElement("." + assoc._id, typeNameConversion[element.get("_type")] );
					console.log("." + assoc._id);
					this.parent.results.hide();
					this.render();
				}
			}
		}
	);

	

	return LearnerassistantNavigationView;
})