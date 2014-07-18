define(function(require) {

	var Adapt = require('coreJS/adapt');
    	
	var AssessmentView = Backbone.View.extend({

		initialize: function() {
			this.model.get('assessmentModel').resetQuizData();
		},

	})

	return AssessmentView;

});