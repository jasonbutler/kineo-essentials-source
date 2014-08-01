/*
 * adapt-contrib-pageLevelProgress
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Daryl Hedley <darylhedley@hotmail.com>, Himanshu Rajotia <himanshu.rajotia@credipoint.com>
 */
define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var NavigationView = require('extensions/adapt-bottomnavigation/js/bottomnavigationView');

	var ProgressDrawerView = NavigationView.extend(
		{
			//UI
			className: "learnerassistant-progress",
			template: "learnerassistant-ProgressDrawer",
			initialize: function() {
				this.listenTo(Adapt, 'remove', this.remove);
			}
		},
		{
			//EVENTS
			events: {
				'click .learnerassistant-progress-item.drawer-item a': 'onScrollToPageElement'
			},

			onScrollToPageElement: function(event) {
				event.preventDefault();
				this.parent.model.set("isInReview", true);
				var id = $(event.currentTarget).attr('data-learnerassistant-progress-id');
				var assoc = _.findWhere(this.model.associatedLearning, { _id: id });
				if (assoc._isInteractionsComplete) this.parent.model.set("isInteractionsComplete", true);
				else this.parent.model.set("isInteractionsComplete", false);
				var element = Adapt.findById(id);
				Adapt.trigger('drawer:closeDrawer');
				this.parent.navigateToAssociatedLearning(id);
			}
			
		},
		{
			//DRAWING
			render: function() {
				var components  = [];
				_.each(this.parent.model.get("associatedLearning"), function(assoc) {
					var component = Adapt.findById(assoc._id).toJSON();
					//_.each(block.getChildren().toJSON(), function(component) {
						components.push({
							_id: component._id,
							title: component.title,
							_isInteractionsComplete:  (assoc._interactions > 0)
						});
					//});
					
				});
				this.model = { associatedLearning: components, settings: this.parent.model.get("settings") };
		        this.constructor.prototype.render.call(this);
			}
		}
	);
	return ProgressDrawerView;
})