/*
* adapt-learnerassistant-resultsView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var BottomNavigationView = require('extensions/adapt-bottomnavigation/js/bottomnavigationView');

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

	var LearnerassistantNavigationView = BottomNavigationView.extend(
		{
			//UI
			className : "learnerassistant-navigationView",
			template : "learnerassistant-navigationView",
			initialize: function() {
				var NavViewhandle = this;
				Adapt.on("learnerassistant:next", function() {
					NavViewhandle.onNextClick.call(NavViewhandle);
				});
			},
			postRender: function() {
				this.stopListening(Adapt, "scrollEvent:scrollPosition");
				this.listenTo(Adapt, "scrollEvent:scrollPosition", this.onScrollChange);
			}
		},
		{
			//EVENTS
			events: {
				"click #learnerassistant-revision" : "onBeginRevision",
				"click #learnerassistant-continue" : "onNextClick",
				"click #learnerassistant-end" : "onEndClick",
				"click #learnerassistant-next" : "onNextClick",
				"click #learnerassistant-finish" : "onNextClick",
				"click #learnerassistant-print" : "onPrint",
				"click .learnerassistant-navigation-completion-container" : "onDrawerShow",
				"click .learnerassistant-page-level-progress-info" : "onTutorButton"
			},
			onBeginRevision: function(event) {
				var settings = this.model.get("settings");
				if (!settings._beginRevision._show) {
					this.onNextClick();
					return;
				}
				var alertObject = {
				    title: settings._beginRevision.title,
				    body: settings._beginRevision.body,
				    confirmText: settings._beginRevision.button,
				    _callbackEvent: "learnerassistant:next",
				    _showIcon: false
				};

				Adapt.trigger('notify:alert', alertObject);
			},
			onNextClick: function(event) {
				if (event) event.preventDefault();
				this.model.set("isInReview", true);
				this.model.set("isInteractionsComplete", false);
				var assoc = _.findWhere(this.model.get('associatedLearning'), { _interactions: 0 });

				if (this.model.get("options")._isReviewComplete || typeof assoc == "undefined") {
					//FINISHED
					var settings = this.model.get("settings");
					if (!settings._beginRevision._show) {
						Adapt.trigger("learnerassistant:takeQuiz");
					} else {
						var alertObject = {
						    title: settings._endRevision.title,
						    body: settings._endRevision.body,
						    confirmText: settings._endRevision.button,
						    _callbackEvent: "learnerassistant:takeQuiz",
						    _showIcon: false
						};

						Adapt.trigger('notify:alert', alertObject);
					}

				} else {
					//BEGIN REVISION & NEXT
					this.parent.navigateToAssociatedLearning(assoc._id);
				}
			},
			onScrollChange: function(top) {
	        	var combinedTop = top + $(window).height();
	        	var maxTop = $("body").height();

	        	var currentLearningId = this.parent.model.get("currentAssociatedLearningID");
	        	if (currentLearningId === undefined) return;

                var $element = $("." + ifOffsetHiddenReturnParent(currentLearningId));
                if ($element.length === 0) return;

                var element = Adapt.findById(currentLearningId);

        		var elementTop = $element.offset().top - ($(window).height() /2);
        		var elementHeight = $element.height();
	            if (elementTop < top + 1 && (elementTop + elementHeight) > top && !element.get("_isInteractionsComplete")) {
	                this.model.set("isInteractionsComplete", false);
	            	this.reRender();
	            } else {
	            	this.model.set("isInteractionsComplete", true);
	            	this.reRender();
	            }
			},
			onDrawerShow: function(event) {
				this.parent.drawer.show();
			},
			onEndClick: function() {
				var settings = this.model.get("settings");
				if (this.parent.model.get("isCertificateShown")) {
					if (!settings._quitGuidedLearning._show) {

						Adapt.trigger("learnerassistant:gracefullQuit");

					} else {

						var promptObject = {
					    title: settings._quitCertificate.title,
					    body: settings._quitCertificate.body,
					    _prompts:[
						        {
						            promptText: settings._quitCertificate.buttons.yes,
						            _callbackEvent: "learnerassistant:gracefullQuit",
						        },
						        {
						            promptText: settings._quitCertificate.buttons.no,
						            _callbackEvent: ""
						        }
						    ],
						    _showIcon: true
						}

						Adapt.trigger('notify:prompt', promptObject);
					}
				} else {
					if (!settings._quitGuidedLearning._show) {

						Adapt.trigger("learnerassistant:gracefullQuit");

					} else {

						var promptObject = {
					    title: settings._quitGuidedLearning.title,
					    body: settings._quitGuidedLearning.body,
					    _prompts:[
						        {
						            promptText: settings._quitGuidedLearning.buttons.yes,
						            _callbackEvent: "learnerassistant:gracefullQuit",
						        },
						        {
						            promptText: settings._quitGuidedLearning.buttons.no,
						            _callbackEvent: ""
						        }
						    ],
						    _showIcon: true
						}

						Adapt.trigger('notify:prompt', promptObject);
					}
				}
			},
			onTutorButton: function(event) {
				event.preventDefault();
				if (this.parent.model.get("isCertificateShown")) {
					var settings = this.parent.model.get("settings");
					if (! settings._certificateTutorButton._show) return;
					
					var alertObject = {
					    title: settings._certificateTutorButton.title,
					    body: settings._certificateTutorButton.body,
					    confirmText: settings._certificateTutorButton.button,
					    _showIcon: false
					};

					Adapt.trigger('notify:alert', alertObject);
				} else if (!this.parent.model.get("isInReview")) {
					//FINISHED
					var settings = this.parent.model.get("settings");
					if (! settings._resultsTutorButton._show) return;
					
					var alertObject = {
					    title: settings._resultsTutorButton.title,
					    body: settings._resultsTutorButton.body,
					    confirmText: settings._resultsTutorButton.button,
					    _showIcon: false
					};

					Adapt.trigger('notify:alert', alertObject);
				} else {
					if (this.parent.model.get("isResultsShown")) this.parent.results.hide();
					else this.parent.results.show();
				}
			},
			onPrint: function(event) {
				event.preventDefault();
				this.parent.views['certificate'].openCertificateWindow();
			}
		}
		
	);

	

	return LearnerassistantNavigationView;
})