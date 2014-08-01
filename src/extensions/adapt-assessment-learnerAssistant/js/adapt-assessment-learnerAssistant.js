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
	var LearnerassistantProgressDrawerView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-ProgressDrawerView');
	var LearnerassistantTopNavigationView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-TopNavigationView');
	var LearnerassistantCertificateView = require('extensions/adapt-assessment-learnerAssistant/js/adapt-assessment-learnerAssistant-certificateView');

	function ifOffsetHiddenReturnParent(id) {
        if (ifOffsetHiddenReturnParent.swapOutIds[id] !== undefined) return ifOffsetHiddenReturnParent.swapOutIds[id];

        var $element = $("." + id);
        var displayNoneParents = _.filter($element.parents(), function(item) { return $(item).css("display") == "none"; } );
        if (displayNoneParents.length === 0) return id;

        var parentId = Adapt.findById(id).get("_parentId");
        ifOffsetHiddenReturnParent.swapOutIds[id] = parentId;        
        return parentId;
    }
    ifOffsetHiddenReturnParent.swapOutIds = {};

	//GLOBAL LEARNERASSISTANT CONTEXT
	var LearnerAssistant = Backbone.View.extend({ //must be a view for listento function in pagelevelprogress.attach + detach
		model: new LearnerassistantModel(), //a modified copy of the assessment.getQuestionModel() model
		views: {},
		menuMode: "none",
		modelSetup: function(questionModel) {
			//SETUP MODEL
			this.model.setup(JSON.parse(JSON.stringify(questionModel)))
			
		},
		modelUpdate: function(questionModel) {
			//UPDATE MODEL
			this.model.update(JSON.parse(JSON.stringify(questionModel)));
		},

		navigateToAssociatedLearning: function(id) {
			var element = Adapt.findById(id)
			var typeNameConversion = {
				"component": "components",
				"article": "articles",
				"block": "blocks",
				"menu": "contentObject",
				"page": "contentObject"
			};
			LearnerAssistant.model.set("currentAssociatedLearningID", id);
			id = ifOffsetHiddenReturnParent(id);
			if (this.model.get("isResultsShown")) {
				LearnerAssistant.results.hide(function() {
					Adapt.navigateToElement("." + id, typeNameConversion[element.get("_type")] );
					Adapt.bottomnavigation.render();
				});
			} else {
				Adapt.navigateToElement("." + id, typeNameConversion[element.get("_type")] );
				Adapt.bottomnavigation.render();
			}
		},

		//RESULTS VIEW FUNCTIONS
		results: {
			show: function(callback) {
				//CHANGE ROLLAY VIEW TO RESULTS VIEW
				Adapt.rollay.model.set("forceShow", true);
				LearnerAssistant.model.set("isResultsShown", true);
				LearnerAssistant.model.set("isCertificateShown", false);
				LearnerAssistant.views['topnavigation'].reRender();
				Adapt.rollay.setCustomView( LearnerAssistant.views['results'] );
				
				//RESHOW ROLLAY
				//Adapt.rollay.hide(0);
				Adapt.rollay.render();
				Adapt.rollay.show(function() {
					LearnerAssistant.views['topnavigation'].reRender();
					Adapt.trigger("learnerassistant:resultsopened");
					Adapt.bottomnavigation.render();
					if (typeof callback == "function") callback();
				});
				//
				//Adapt.bottomnavigation.render();
			},
			hide: function(callback) {
				LearnerAssistant.model.set("isResultsShown", false);
				LearnerAssistant.model.set("isCertificateShown", false);
				Adapt.rollay.hide(function() {
					LearnerAssistant.views['topnavigation'].reRender();
					Adapt.trigger("learnerassistant:resultsclosed");
					Adapt.bottomnavigation.render();
					if (typeof callback == "function") callback();
				});
				//
				//Adapt.bottomnavigation.render();
			}
		},

		//CERTIFICATE VIEW FUNCTIONS
		certificate: {
			show: function(callback) {
				//CHANGE ROLLAY VIEW TO CERTIFICATE VIEW
				Adapt.rollay.model.set("forceShow", true);
				LearnerAssistant.model.set("isResultsShown", false);
				LearnerAssistant.model.set("isCertificateShown", true);
				LearnerAssistant.views['topnavigation'].reRender();
				Adapt.rollay.setCustomView( LearnerAssistant.views['certificate'] );
				
				//RESHOW ROLLAY
				Adapt.rollay.render();
				Adapt.rollay.show(function() {
					LearnerAssistant.views['topnavigation'].reRender();
					Adapt.trigger("learnerassistant:certificateopened");
					Adapt.bottomnavigation.render();
					if (typeof callback == "function") callback();
				});
			},
			hide: function(callback) {
				LearnerAssistant.model.set("isResultsShown", false);
				LearnerAssistant.model.set("isCertificateShown", false);
				Adapt.rollay.hide(function() {
					LearnerAssistant.views['topnavigation'].reRender();
					Adapt.trigger("learnerassistant:certificateclosed");
					Adapt.bottomnavigation.render();
					if (typeof callback == "function") callback();
				});
				//
			}
		},


		//PAGELEVELPROGRESS FUNCTIONS
		pagelevelprogress : {
			incrementalMarking: false,
			show: function(duration) {
				//ATTACH PAGELEVELPROGRESS TO QUESTIONS
				Adapt.bottomnavigation.setCustomView(LearnerAssistant.views['pagelevelprogress']);
				Adapt.bottomnavigation.showMobile(false);
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
				Adapt.bottomnavigation.showMobile(true);
				LearnerAssistant.menuMode = "navigation";
				$(".navigation-inner").addClass("no-pageLevelProgress");
			},
			hide: function(duration) {
				Adapt.bottomnavigation.hide(duration);
				LearnerAssistant.menuMode = "none";
				$(".navigation-inner").removeClass("no-pageLevelProgress");
			}

		},

		//LEANER ASSISTANT DRAWER FUNCTIONS
		drawer: {
			show: function() {
				Adapt.rollay.model.set("forceShow", true);
				
				LearnerAssistant.views['progressdrawer'].reRender();
				LearnerAssistant.views['progressdrawer'].undelegateEvents();
				Adapt.drawer.triggerCustomView(LearnerAssistant.views['progressdrawer'].$el, false);
				LearnerAssistant.views['progressdrawer'].delegateEvents();
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
	LearnerAssistant.views['topnavigation'] = new LearnerassistantTopNavigationView();
	LearnerAssistant.views['topnavigation'].parent = LearnerAssistant;
	LearnerAssistant.views['progressdrawer'] = new LearnerassistantProgressDrawerView();
	LearnerAssistant.views['progressdrawer'].parent = LearnerAssistant;
	LearnerAssistant.views['certificate'] = new LearnerassistantCertificateView();
	LearnerAssistant.views['certificate'].parent = LearnerAssistant;
	
	//SETUP
		//GLOBAL EVENT LISTENERS
		Adapt.once("bottomnavigation:initialised", function() {
			//SETUP NAVIGATION WITH MODEL
			LearnerAssistant.views['navigation'].model = LearnerAssistant.model;
		});
		Adapt.once("rollay:initialised", function() {
			//SETUP RESULTS WITH MODEL
			LearnerAssistant.views['results'].model = LearnerAssistant.model;
			//SETUP CERTIFICATE WITH MODEL
			LearnerAssistant.views['certificate'].model = LearnerAssistant.model;
		});

	//NAVIGATE AWAY
		//HIDE RESULTS ON ROLLAY HIDE
		//HIDE CERTIFICATE ON ROLLAY HIDE
		Adapt.on("rollay:closed", function() {
			LearnerAssistant.results.hide();
			LearnerAssistant.certificate.hide();
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

				LearnerAssistant.model.set("hideUserAnswer", view.model.get('_assessment')._hideUserAnswer)
				
				Adapt.on("componentView:postRender", function(view) {
					var blockId = view.model.get("_parentId");
					var articleId = Adapt.findById(blockId).get("_parentId");
					var article = Adapt.findById(articleId);

					if (article.get("assessmentModel") && article.get('assessmentModel').get('_isEnabled')) {
						view.$el.find(".buttons-action").one("click", 
								function() {
									if (LearnerAssistant.model.get("isReviewNeeded")) return;
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

				view.setReadyStatus();
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

			var settings = LearnerAssistant.model.get("settings");

			//CHECK IF SHOWRESULTS REQUIRED
			if (LearnerAssistant.model.get("isPass") && !LearnerAssistant.model.get("isReviewNeeded")) {
				//Adapt.trigger("learnerassistant:guidedlearningOff");
				LearnerAssistant.model.set("isResultsShown", false);
				LearnerAssistant.model.set("isCertificateShown", true);
				LearnerAssistant.views['topnavigation'].reRender();
				Adapt.trigger("learnerassistant:guidedlearningOn");
				if (!settings._beforeRevision._show) {
					Adapt.trigger("learnerassistant:showCertificate");
				} else {
					var alertObject = {
					    title: settings._beforeCertificate.title,
					    body: settings._beforeCertificate.body,
					    confirmText: settings._beforeCertificate.button,
					    _callbackEvent: "learnerassistant:showCertificate",
					    _showIcon: false
					};

					Adapt.trigger('notify:alert', alertObject);
				}
				return;
			}

			LearnerAssistant.model.set("isResultsShown", true);
			LearnerAssistant.model.set("isCertificateShown", false);
			LearnerAssistant.views['topnavigation'].reRender();
			Adapt.trigger("learnerassistant:guidedlearningOn");
			if (!settings._beforeRevision._show) {
				Adapt.trigger("learnerassistant:showResults");
			} else {
				var alertObject = {
				    title: settings._beforeRevision.title,
				    body: settings._beforeRevision.body,
				    confirmText: settings._beforeRevision.button,
				    _callbackEvent: "learnerassistant:showResults",
				    _showIcon: false
				};

				Adapt.trigger('notify:alert', alertObject);
			}
		});

		Adapt.on("learnerassistant:showCertificate", function() {
			//HIDE PAGELEVELPROGRESS NAV
			LearnerAssistant.pagelevelprogress.hide(0);

			//MOVE BACK TO MAIN MENU
			var parentId = Adapt.findById(LearnerAssistant.views['assessment'].model.get("_parentId")).get("_parentId");
			Backbone.history.navigate("#/id/" + parentId, {trigger: true, replace: true});

			//SHOW THE RESULTS
			LearnerAssistant.certificate.show();
			LearnerAssistant.navigation.show();


			
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
			if (model.get("_id") == LearnerAssistant.model.get("currentAssociatedLearningID")) {
				LearnerAssistant.model.set("isInteractionsComplete", true);
			}

			//RERENDER BOTTOM NAVIGATION (NAVIGATION)
			Adapt.bottomnavigation.render();
			LearnerAssistant.views['progressdrawer'].reRender();
		});

		//REVIEW COMPLETE
		Adapt.on("learnerassistant:complete", function() {
			//FIRED WHEN REVIEW COMPLETE
			
		});
		Adapt.on("learnerassistant:takeQuiz", function() {
			LearnerAssistant.results.hide();
			LearnerAssistant.model.set("_isGuidedLearningMode", false);
			$("body").removeClass("guided-learning-mode");
			LearnerAssistant.views['topnavigation'].$el.remove();

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

			LearnerAssistant.pagelevelprogress.show();
		});

	//REVIEWMODE ON/OFF
		Adapt.on("learnerassistant:guidedlearningOn", function() {
			LearnerAssistant.model.set("_isGuidedLearningMode", true);
			$("body").addClass("guided-learning-mode");
			$(".navigation-inner").append( LearnerAssistant.views['topnavigation'].$el );
			LearnerAssistant.views['topnavigation'].reRender();
		});
		Adapt.on("learnerassistant:gracefullQuit", function() {
			 _.delay(function() {
	           	Adapt.trigger("learnerassistant:guidedlearningOff");
	           	var parentId = Adapt.findById(LearnerAssistant.views['assessment'].model.get("_parentId")).get("_parentId");
				Backbone.history.navigate("#/id/" + parentId, {trigger: true, replace: true});
	        }, 300);
		});
		Adapt.on("learnerassistant:guidedlearningOff", function() {
			LearnerAssistant.results.hide();
			LearnerAssistant.model.set("_isGuidedLearningMode", false);
			$("body").removeClass("guided-learning-mode");
			LearnerAssistant.navigation.hide();
			LearnerAssistant.views['topnavigation'].$el.remove();
		});

	//REDIRECT MENU
		Adapt.on('menuView:postRender', function(menuView) {
			if (menuView.model.get("_learnerassistant") === undefined || menuView.model.get("_learnerassistant")._redirectOnPassed === false) return;

			//IF ASSESSMENT VIEW IS CAPTURED
			if (LearnerAssistant.views['assessment'] === undefined) return;

			//GET ASSESSMENT PAGE ID
			var pageId = LearnerAssistant.views['assessment'].model.get("_parentId");

			//IF THIS MENU == ASSESSMENT MENU
			if (pageId !== menuView.model.get("_id")) return;

			//IF IS PASSED
			if (!LearnerAssistant.model.get("isPass")) return;

			var menuItem = menuView.$el;

			menuItem.off("click");

			menuItem.on("click", function(event) {
				event.preventDefault();
				Adapt.trigger("learnerassistant:guidedlearningOn");
				Adapt.trigger("learnerassistant:showCertificate");
			});

			
			

		});

	window.CompleteAssessment = function() {
		var assessmentView = Adapt.articles.find(function(it) { return typeof it.get('_assessment') !== "undefined"; } );
		Adapt.navigateToElement(assessmentView.get("_id"));
		setTimeout( function () {
			Adapt.trigger("assessment:complete", assessmentView.get("assessmentModel").getQuestionModel());
		}, 1000);
	};
	window.CompleteAssessmentPassed = function() {
		var assessmentView = Adapt.articles.find(function(it) { return typeof it.get('_assessment') !== "undefined"; } );
		Adapt.navigateToElement(assessmentView.get("_id"));
		var questionModel = assessmentView.get("assessmentModel").getQuestionModel();
		_.each(questionModel.allQuestions, function(question) {
			question._isCorrect = true;
		});
		questionModel.isPass = true;
		questionModel.scoreAsPercent = 100;
		setTimeout( function () {
			Adapt.trigger("assessment:complete", questionModel);
			Adapt.bottomnavigation.render();
		}, 1000);
	}

	return LearnerAssistant;
});