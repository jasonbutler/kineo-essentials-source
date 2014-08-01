/*
* adapt-contrib-assessment
* License - https://github.com/cgkineo/adapt-contrib-assessment/LICENSE
* Maintainers - Gavin McMaster <gavin.mcmaster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var AssessmentView = require('extensions/adapt-contrib-assessment/js/adapt-contrib-assessment-view');
	var AssessmentModel = require('extensions/adapt-contrib-assessment/js/adapt-contrib-assessment-model');

	function initQuizData(articleModel) {
		console.log("assessment, initQuizData: " + articleModel.get('_id'));

		if(typeof Adapt.course.get('_isAssessmentAttemptComplete') === "undefined") Adapt.course.set('_isAssessmentAttemptComplete', false);

		var assessmentModel = new AssessmentModel(articleModel.get('_assessment'));
		assessmentModel.set('_children', articleModel.getChildren());
		assessmentModel.set('_allChildModels', articleModel.getChildren().models);
		assessmentModel.set('_id', articleModel.get('_id'));
		
		articleModel.set({assessmentModel:assessmentModel});
		articleModel.getChildren().models = assessmentModel.setQuizData();

		Adapt.on('assessment:complete', function() {
			//console.log("adapt-contrib-assessment.js, complete");
			if(!articleModel.get('_isComplete')) articleModel.set('_isComplete', true);
			articleModel.set({assessmentModel:assessmentModel});
			articleModel.getChildren().models = assessmentModel.setQuizData();				
		});

		var questionSubsetUsed = articleModel.getChildren().models.length < articleModel.getChildren().length;
		if(questionSubsetUsed) {
			Adapt.blocks.on('change:_isComplete', onBlockComplete);
			Adapt.on('assessment:complete', onAssessmentComplete);
		}
	}

	function onBlockComplete(block) {
		//console.log("assessment.js:onBlockComplete " + block.get('_id'));
		if(Adapt.course.get('_isAssessmentAttemptComplete') && !Adapt.course.get('_isComplete')) checkCourseCompletion();
	}

	function onAssessmentComplete() {
		//console.log("assessment.js:onAssessmentComplete");
		if (!Adapt.course.get('_isComplete')) checkCourseCompletion();
	}

	function checkCourseCompletion() {
		//console.log("assessment.js, checkCourseCompletion");
		// if the assessment is complete, and all non-assessment blocks are complete - then all course content has been viewed - set course to complete
		var allNonAssessmentBlocksComplete = getAllNonAssessmentBlocksComplete();
		if(allNonAssessmentBlocksComplete) Adapt.course.set('_isComplete', true);
	}

	 function getAllNonAssessmentBlocksComplete () {
	 	var allComplete = true;
      _.each(Adapt.blocks.models, function(model) {
            var isPartOfAssessment = (model.getParent().get('_assessment') != undefined);
            //console.log(model.get('_id') + " - " + model.get('_isComplete') + " - " + isPartOfAssessment);
            if(!model.get('_isComplete') && !isPartOfAssessment) allComplete = false;                   
        }, this);

        return allComplete;
    }

	Adapt.on('articleView:preRender', function(view) {
		if(!view.model.get('_isComplete') && Adapt.course.get('_isAssessmentAttemptComplete')) view.model.set('_isComplete', true);

		if (view.model.get('_assessment') && view.model.get('_assessment')._isEnabled) {
			new AssessmentView({model:view.model});
        }
    });	

	Adapt.once('app:dataReady', function() {
		// big assumption that there can only be a single assessment
		var assessmentArticle = _.find(Adapt.articles.models, function(article) {
            return (article.get('_assessment') && article.get('_assessment')._isEnabled);
        });

        if(assessmentArticle != undefined) initQuizData(assessmentArticle);
	});

	Adapt.on('componentView:preRender', function(componentView) {

		var componentId = componentView.model.get('_id');
		var blockId = componentView.model.get("_parentId");
		var articleId = Adapt.findById(blockId).get("_parentId");
		var article = Adapt.findById(articleId);

		if (typeof article.get("_assessment") === "undefined" || article.get("_assessment")._isEnabled !== true) return;

		if (article.get("_assessment")._hideUserAnswer) componentView.model.set("_hideUserAnswer", true);

		if (article.get("_assessment")._hideButtonsOnComplete) {

			componentView.listenTo(componentView.model, "change:_isComplete", function(model, value) {
				if (!value) return;
				var buttons = this.$el.find(".buttons");
				buttons.css("height", buttons.height() + "px");
				buttons.find(".buttons-inner").hide();
			});

		}
    });	

    Adapt.on('componentView:postRender', function(componentView) {

		var componentId = componentView.model.get('_id');
		var blockId = componentView.model.get("_parentId");
		var articleId = Adapt.findById(blockId).get("_parentId");
		var article = Adapt.findById(articleId);

		if (typeof article.get("_assessment") === "undefined" || article.get("_assessment")._isEnabled !== true) return;

		if (!article.get("_assessment")._canShowFeedback) {

			componentView.$el.find(".buttons").addClass("hide-feedback");

		}
    });	

})