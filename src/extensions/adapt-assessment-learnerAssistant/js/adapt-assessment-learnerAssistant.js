/*
* adapt-learnerassistant
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var LearnerassistantModel = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-model');
	var LearnerassistantResultsView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-resultsView');
	var LearnerassistantNavigationView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-navigationView');
	var LearnerassistantPageLevelProgressView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-pageLevelProgressView');
	
	//GLOBAL LEARNERASSISTANT CONTEXT
	var LearnerAssistant = Backbone.View.extend({ //must be a view for listento function in pagelevelprogress.attach + detach
		model: new LearnerassistantModel(), //a modified copy of the assessment.getQuestionModel() model
		views: {},
		menuMode: "none",
		modelSetup: function(questionModel) {
			//Update results view
			this.model.setup(JSON.parse(JSON.stringify(questionModel)))
			
		},
		modelUpdate: function(questionModel) {
			//Update results view
			this.model.update(JSON.parse(JSON.stringify(questionModel)));
		},

		//RESULTS VIEW FUNCTIONS
		results: {
			show: function() {
				//CHANGE ROLLAY VIEW TO RESULTS VIEW
				Adapt.rollay.setCustomView( LearnerAssistant.views['results'] );
				
				//RESHOW ROLLAY
				Adapt.rollay.hide(0);
				Adapt.rollay.show();
				LearnerAssistant.model.set("isResultsShown", true);
				Adapt.trigger("learnerassistant:resultsopened");
				Adapt.bottomnavigation.render();
			},
			hide: function() {
				Adapt.rollay.hide();
				LearnerAssistant.model.set("isResultsShown", false);
				Adapt.trigger("learnerassistant:resultsclosed");
				Adapt.bottomnavigation.render();
			}
		},

		//PAGELEVELPROGRESS FUNCTIONS
		pagelevelprogress : {
			incrementalMarking: false,
			show: function(duration) {
				//ATTACH PAGELEVELPROGRESS TO QUESTIONS
				Adapt.bottomnavigation.setCustomView(LearnerAssistant.views['pagelevelprogress']);
				Adapt.bottomnavigation.render();
				LearnerAssistant.pagelevelprogress.attach();
				//SHOW NAVIGATION
				Adapt.bottomnavigation.show(duration);
				LearnerAssistant.menuMode = "pagelevelprogress";
			},
			hide: function(duration) {
				//DETACH PAGELEVELPROGRESS FROM QUESTIONS
				LearnerAssistant.pagelevelprogress.detach();
				//HIDE NAVIGATION
				Adapt.bottomnavigation.hide(duration);
				LearnerAssistant.menuMode = "none";
			},
			attach: function () {
				var options = LearnerAssistant.model.get("options");
				_.each(options.questions, function(question) {
					LearnerAssistant.listenTo( Adapt.findById(question._id), "change:_isInteractionsComplete", LearnerAssistant.pagelevelprogress.onQuestionInteraction);
				});
			},
			detach: function () {
				var options = LearnerAssistant.model.get("options");
				_.each(options.questions, function(question) {
					LearnerAssistant.stopListening( Adapt.findById(question._id), "change:_isInteractionsComplete");
				});
			},
			onQuestionInteraction: function(model, isInteractionsComplete) {
				//if (LearnerAssistant.pagelevelprogress.incrementalMarking)
				Adapt.bottomnavigation.render();
			}
		},

		//LEARNER ASSISTANT NAVIGATION FUNCTIONS
		navigation: {
			show: function(duration) {
				//CHANGE NAVIGATION VIEW TO LEARNING ASSISTANT FROM PAGELEVELPROGRESS
				Adapt.bottomnavigation.setCustomView( LearnerAssistant.views['navigation'] );
				Adapt.bottomnavigation.render();
				Adapt.bottomnavigation.show(duration);
				LearnerAssistant.menuMode = "navigation";
				$(".navigation-inner").addClass("no-pageLevelProgress");
			},
			hide: function(duration) {
				Adapt.bottomnavigation.hide(duration);
				LearnerAssistant.menuMode = "none";
				$(".navigation-inner").removeClass("no-pageLevelProgress");
			}

		}
	});
	LearnerAssistant = new LearnerAssistant(); //create instance of learnerassistant

	Handlebars.registerHelper('learnerAssistantSettings', function() {
		var settings = LearnerAssistant.model.get("settings");
		var rtn = eval(arguments[0]);
		return rtn;
	});

	//VIEW INSTANCIATION
	LearnerAssistant.views['results'] = new LearnerassistantResultsView();
	LearnerAssistant.views['results'].parent = LearnerAssistant;
	LearnerAssistant.views['navigation'] = new LearnerassistantNavigationView();
	LearnerAssistant.views['navigation'].parent = LearnerAssistant;
	LearnerAssistant.views['pagelevelprogress'] = new LearnerassistantPageLevelProgressView();
	LearnerAssistant.views['pagelevelprogress'].parent = LearnerAssistant;
	
	//SETUP
		//GLOBAL EVENT LISTENERS
		Adapt.once("bottomnavigation:initialised", function() {
			//SETUP NAVIGATION WITH MODEL
			LearnerAssistant.views['navigation'].model = LearnerAssistant.model;
		});
		Adapt.once("rollay:initialised", function() {
			//SETUP RESULTS WITH MODEL
			LearnerAssistant.views['results'].model = LearnerAssistant.model;
		});

	//NAVIGATE AWAY
		//HIDE RESULTS ON ROLLAY HIDE
		Adapt.on("rollay:closed", function() {
			LearnerAssistant.results.hide();
		});
		//BACK BUTTON CLICKED
		Adapt.on("navigation:backButton",  function () { 
			if (!LearnerAssistant.model.get("isComplete")) 
			LearnerAssistant.pagelevelprogress.hide();
		});
		//CHANGE TO MENU DISPLAY
		Adapt.on("router:menu", function() {
			if (!LearnerAssistant.model.get("isComplete")) 
			LearnerAssistant.pagelevelprogress.hide();
		});
		//CHANGE TO PAGE DISPLAY
		Adapt.on("router:page", function() {
			if (!LearnerAssistant.model.get("isComplete")) 
			LearnerAssistant.pagelevelprogress.hide();
		});

	//ASSESSMENT
		//RUNNING
		Adapt.on("articleView:postRender", function(view) {

			if (view.model.get("assessmentModel") && view.model.get('assessmentModel').get('_isEnabled')) {
				//CAPTURE ASSESSMENT VIEW
				LearnerAssistant.views['assessment'] = view;
				
				Adapt.on("componentView:postRender", function(view) {
					var blockId = view.model.get("_parentId");
					var articleId = Adapt.findById(blockId).get("_parentId");
					var article = Adapt.findById(articleId);

					if (article.get("assessmentModel") && article.get('assessmentModel').get('_isEnabled')) {
						view.$el.find(".buttons-action").one("click", 
								function() {
									setTimeout(LearnerAssistant.pagelevelprogress.onQuestionInteraction, 500) 
								}
							);
					}

				});

				var questionModel = view.model.get("assessmentModel").getQuestionModel();
				if (!LearnerAssistant.model.get("isComplete") || view.model.get('_assessment')._isResetOnRevisit) {
					//SETUP MODEL FROM ASSESSMENT
					LearnerAssistant.modelSetup.call(LearnerAssistant, questionModel);

					//SHOW APPROPRIATE NAV (PAGELEVELPROGRESS)
					LearnerAssistant.navigation.hide(0);
					LearnerAssistant.pagelevelprogress.show();
				} else {
					//UPDATE THE MODEL
					LearnerAssistant.modelUpdate.call(LearnerAssistant, questionModel);

					//SHOW APPROPRIATE NAV (NAVIGATION)
					LearnerAssistant.pagelevelprogress.hide(0);
					LearnerAssistant.navigation.show();
				}
			}
		});

		//COMPLETE
		Adapt.on("assessment:complete", function(questionModel) {
			//FIRED ON ASSESSMENT COMPLETE
			LearnerAssistant.model.set("isComplete", true);
			
			//UPDATE THE MODEL
			LearnerAssistant.modelUpdate.call(LearnerAssistant, questionModel);

			//RERENDER BOTTOM NAVIGATION (PAGELEVELPROGRESS)
			Adapt.bottomnavigation.render();

			//CHECK IF SHOWRESULTS REQUIRED
			if (LearnerAssistant.model.get("isPass") && !LearnerAssistant.model.get("isReviewNeeded")) {
				return;
			}

			var settings = LearnerAssistant.model.get("settings");
			var alertObject = {
			    title: settings._before.title,
			    body: settings._before.body,
			    confirmText: settings._before.button,
			    _callbackEvent: "learnerassistant:showResults",
			    _showIcon: false
			};

			Adapt.trigger('notify:alert', alertObject);
		});
		Adapt.on("learnerassistant:showResults", function() {
			//HIDE PAGELEVELPROGRESS NAV
			LearnerAssistant.pagelevelprogress.hide(0);

			//MOVE BACK TO MAIN MENU
			var parentId = Adapt.findById(LearnerAssistant.views['assessment'].model.get("_parentId")).get("_parentId");
			Backbone.history.navigate("#/id/" + parentId, {trigger: true, replace: true});

			//SHOW THE RESULTS
			LearnerAssistant.results.show();

			//SHOW ASSIST LEARN NAV
			LearnerAssistant.navigation.show();
		});

	//REVIEW MODE
		//BLOCK COMPLETE
		Adapt.on("learnerassistant:interactionComplete", function(model) {
			//FIRED WHEN EACH BLOCK IN REVIEW IS COMPLETED

			//SET NEXT BUTTON ENABLED
			if (model.get("_id") == LearnerAssistant.model.get("currentAssociatedLearningID")) LearnerAssistant.model.set("isInteractionsComplete", true);

			//RERENDER BOTTOM NAVIGATION (NAVIGATION)
			Adapt.bottomnavigation.render();
		});

		//REVIEW COMPLETE
		Adapt.on("learnerassistant:complete", function() {
			//FIRED WHEN REVIEW COMPLETE
			
		});
		Adapt.on("learnerassistant:takeQuiz", function() {
			var id = LearnerAssistant.views['assessment'].model.get("_id");
			var element = Adapt.findById(id)
			var typeNameConversion = {
				"component": "components",
				"article": "articles",
				"block": "blocks",
				"menu": "contentObject",
				"page": "contentObject"
			};
			
			
			Adapt.navigateToElement(id, typeNameConversion[element.get("_type")] );
		});


	return LearnerAssistant;
});