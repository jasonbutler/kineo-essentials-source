/*
* adapt-learnerassistant-resultsView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');

	var orderBy = [ "co", "a", "b", "c" ];
	var orderByName = [ "contentObjects", "articles", "blocks", "components" ];

	var LearnerassistantModel= Backbone.Model.extend(
		{
			defaults: {
				data: {}, /*{
					isPercentageBased: true/false,
	                isPass: true/false,
	                isReviewRequired: true/false,
	                countBanksToReview: 0+,
	                score: 0+,
	                scoreAsPercent: 0-100,
	                feedbackMessage: "",
	                associatedLearning: array(),
	                allQuestions: [
	                	{
							_isCorrect: true/false,
		                    title: "",
		                    _id: "",
		                    _associatedLearning: [
								{
									_id: assoc._id,
	                        		title: "",
	                        		_interactions: 0+
								}
		                    ],
		                    _isReviewComplete: true/false
		                }
	                ]
				}*/
				settings: {},
				banks: {},
				associatedLearning: [
				],
				options: {
					questions: {},
					banks: {},
					associatedLearning: {},
					interactionEventsAttached: false,
				},
				isComplete: false,
				isResultsShown: false,
				isInReview: false
			},
			reset: function() {
				var options = this.get('options');
				options.associatedLearning = {};
				var model = $.extend(true, {}, JSON.parse(JSON.stringify(this.defaults)));
				model.associatedLearning = [];
				model.settings = Adapt.course.get("_learnerassistant");
				model.banks = Adapt.course.get("_banks");
				model.isComplete = false
				this.set(model);
			},
			setup: function(data) {
				this.reset();
				this.update(data);
			},
			update: function(data) {
				var model = this.get("data");
				$.extend(true, model, JSON.parse(JSON.stringify(data)));
				this.set('data', model);

				//link banks back to questions after json.stringify
				var banks = this.get("banks");
				_.each(model.allBanks, function(item, _quizBankID) {
					_.extend(item, banks[item._quizBankID]);
					item.allQuestions = _.where(model.allQuestions, { _quizBankID: (typeof item._quizBankID == "number" ? parseInt(_quizBankID) : _quizBankID + "" ) });
				});

				this.set("isPass", this.get("data").isPass);

				//pick out passed and failed questions and set default filter
				
				this.detachReviewAssociatedLearningInteractionEvents();

				var options = this.get('options');

				var failedBanks = _.filter(model.allBanks, function(bank) { return _.filter(bank.allQuestions, function(item) { return typeof item._isCorrect == "undefined" || item._isCorrect === false; }).length > 0; });

				var settings = this.get("settings");
				options.banks = [];
				if (!settings._showAllBankQuestions) {
					_.each(failedBanks, function(bank, index) {
						options.banks.push({ 
							title: bank.title, 
							questions: _.filter(bank.allQuestions, function(item) { return typeof item._isCorrect == "undefined" || item._isCorrect === false; }),
							_quizBankID: bank._quizBankID,
							order: failedBanks.length
						});
					});
					options.questions = _.filter(model.allQuestions, function(item) { return typeof item._isCorrect == "undefined" || item._isCorrect === false; });
				} else {
					options.questions = [];
					_.each(failedBanks, function(bank, index) {
						options.banks.push({ 
							title: bank.title, 
							questions: bank.allQuestions,
							_quizBankID: bank._quizBankID,
							order: failedBanks.length
						});
						options.questions = options.questions.concat(bank.allQuestions);
					});
				}

				this.set("countBanksForReview", failedBanks.length);
				this.set("isReviewNeeded", (failedBanks.length > 0));

				if (!this.get("isComplete")) return;

				this.fashionReview();
				
			},
			detachReviewAssociatedLearningInteractionEvents: function() {
				var resultsViewHandle = this;
				var options = this.get('options');
				if (options.interactionEventsAttached) {
					_.each(options.associatedLearning, function(assoc) {
						resultsViewHandle.stopListening( Adapt.findById(assoc._id), "change:_isInteractionsComplete");
					});
					options.interactionEventsAttached = false;
				}
			},
			fashionReview: function() {
				this.expandQuestionsAssociatedLearning(); //CO + A > B

				this.populateReviewAssociatedLearning();
				this.sortReviewAssociatedLearnings();

				this.attachReviewAssociatedLearningInteractionEvents();

				this.calculateReviewedAssociatedLearning();
			},
			expandQuestionsAssociatedLearning: function () {
				var options = this.get('options');
				if (!options.interactionEventsAttached) {
					_.each(options.questions, function(question) {
						var finishAssocLearning = [];
						_.each(question._associatedLearning, function (item) {
							var type = orderBy.indexOf(item._id.substr(0, item._id.indexOf("-")));
							if (type == 3) {
								var parent = Adapt.findById(Adapt.findById(item._id).get("_parentId"));
								finishAssocLearning.push(item);
							} else {
								var model = Adapt.findById(item._id );
								var descendents = model.findDescendants("components");//.toJSON();
								if (descendents.filter(function(item) { 
										if (typeof item.get("_isVisible") === false) return false; 
										if (typeof item.get("_isAvailable") === false) return false; 
										if (typeof item.get("_learningassistentProgress ") != "undefined" && item.get("_learningassistentProgress ")._isEnabled === false) return;
										if (typeof item.get("_pageLevelProgress") == "undefined") return false;
										return item.get("_pageLevelProgress")._isEnabled; 
									} ).length === 0) return false;
								descendents = descendents.toJSON();
								finishAssocLearning = finishAssocLearning.concat(descendents);
							}
						});
						question._associatedLearning = _.uniq(finishAssocLearning, function(a,b) {  
							return a._id;  
						});
					});
				}
			},
			populateReviewAssociatedLearning: function () {
				var resultsViewHandle = this;
				var options = this.get('options');
				if (!options.interactionEventsAttached) {
					options.associatedLearning = {};
					_.each(options.questions, function(question) {
						_.each(question._associatedLearning, function(assoc, index) {
							if (typeof options.associatedLearning[assoc._id] != "undefined") {
								question._associatedLearning[index] = options.associatedLearning[assoc._id];
							} else {
								options.associatedLearning[assoc._id] = assoc;
							}
							assoc._quizBankID = question._quizBankID;
							if (typeof assoc._interactions == "undefined") assoc._interactions = 0;
						});
					});
				}
			},
			onInteraction: function(model, isInteractionsComplete) {
				if (!isInteractionsComplete) return;
				console.log(model.get("_id") + " interaction complete");
				var options = this.get('options');
				if (typeof options.associatedLearning[model.get('_id')] == "undefined") return;
				options.associatedLearning[model.get('_id')]._interactions++;
				this.flagBugInteractionsCompletePropagation();
				this.calculateReviewedAssociatedLearning();
				Adapt.trigger("learnerassistant:interactionComplete", model);
				if (options._isReviewComplete) {
					Adapt.trigger("learnerassistant:complete");
				}
			},
			
			attachReviewAssociatedLearningInteractionEvents: function() {
				var resultsViewHandle = this;
				var options = this.get('options');
				if (!options.interactionEventsAttached) {
					_.each(options.associatedLearning, function(assoc) {
						resultsViewHandle.listenTo( Adapt.findById(assoc._id), "change:_isInteractionsComplete", resultsViewHandle.onInteraction);
					});
					options.interactionEventsAttached = true;
				}
				this.flagBugInteractionsCompletePropagation();
			},
			sortReviewAssociatedLearnings: function() {
				var settings = this.get("settings");
				var options = this.get('options');
				if (!options.interactionEventsAttached) {
					//SETUP ORDER OF ASSOCIATED LEARNINGS
					var assocLearn = null;

					var assocLearn = this.removeChildLearningObjects();

					var banks = this.get('options').banks;


					assocLearn.sort(function(a, to) {
						//SORTED BY ELEMENT GRAVITY (PAGE, ARTICLE, BLOCK, COMPONENT) THEN BY ID A-Z
						var typea = orderBy.indexOf(a._id.substr(0, a._id.indexOf("-")));
						var typeto = orderBy.indexOf(to._id.substr(0, to._id.indexOf("-")));

						if (typea < typeto) return -1;
						if (typea > typeto) return 1;

						if (a._id < to._id) return -1;
						if (a._id > to._id) return 1;
						return 0;
					});

					if (settings._sortResultsBanksBy!== undefined) {

						switch (settings._sortResultsBanksBy) {
						case "mostInBank":
							var mostInBank = _.countBy(assocLearn, function(item) { return item._quizBankID; }); 

							var newBankOrder = {};
							var order = 0;
							_.each(banks, function(bank) {
								bank.order = mostInBank[bank._quizBankID]; //_.values(banks).length;
							});
							_.each(assocLearn, function(assoc) {
								if (typeof newBankOrder["b" + assoc._quizBankID] == "undefined") {
									newBankOrder["b"+assoc._quizBankID] = true;
									bank = _.findWhere(banks, { _quizBankID: assoc._quizBankID});
									bank.order = order;
									order++;
								}
							});

							banks.sort(function(a,b) {
								return b.order-a.order;
							});
							break
						case "id":
						default:
							break;
						}
					}					

					this.set("associatedLearning", assocLearn);
				}
			},
			removeChildLearningObjects: function() {
				var associatedLearning = this.get('options').associatedLearning;
				var banks = this.get('options').banks;
				
				var allDescendents = {};

				_.each(associatedLearning, function(contentObject) {
					var type = contentObject._id.substr(0, contentObject._id.indexOf("-"));
					var model = Adapt.findById(contentObject._id);
					for (var i = orderBy.indexOf(type)+1; i < orderBy.length; i++ ) {
						var descendents = model.findDescendants(orderByName[i]).toJSON();
						_.each(descendents, function(item) {
							if (typeof allDescendents[item._id] == "undefined") {
								allDescendents[item._id] = [ contentObject._id ];
							} else {
								allDescendents[item._id].push(contentObject._id);
							}
						});

					}
				});

				_.each(associatedLearning, function(contentObject) {
					if (typeof allDescendents[contentObject._id] != "undefined") {
						var lowest = {
							height: Number.MAX_VALUE,
							id: null
						};
						for (var i = 0 ; i < allDescendents[contentObject._id].length; i++) {
							var id = allDescendents[contentObject._id][i];
							var height = orderBy.indexOf(id.substr(0, id.indexOf("-")));
							if (height < lowest.height) lowest = { height: height, id: id};
						}
						contentObject._lowestParentID = lowest.id;
					} else {
						contentObject._lowestParentID = null;
					}
				});

				_.each(banks, function(bank) {
					var bankAssocLearning = _.where(associatedLearning, { _quizBankID: bank._quizBankID } );
					var lowest = {
							height: Number.MAX_VALUE,
							id: null
						};
					_.each(associatedLearning, function(contentObject) {
							var id = contentObject._lowestParentID;
							if (id === null) return;
							var height = orderBy.indexOf(id.substr(0, id.indexOf("-")));
							if (height < lowest.height) lowest = { height: height, id: id};
					});
					bank._lowestParentID = lowest.id;
				});

				var filteredIds = _.difference(_.keys(associatedLearning), _.keys(allDescendents));
				var rtn = [];
				_.each(filteredIds, function(id) {
					rtn.push(associatedLearning[id]);
				});

				return rtn;

			},

			calculateReviewedAssociatedLearning: function() {
				var resultsViewHandle = this;
				var options = this.get('options');
				options._isReviewComplete = true;
				options._countTotalAssociatedLearning = 0;
				options._countReviewedAssociatedLearning = 0;
				options._countUnreviewedAssociatedLearning = 0;
				_.each(options.questions, function(question) {
					if(_.findWhere(question._associatedLearning, { _interactions: 0 })) {
						question._isReviewComplete = false;
						options._isReviewComplete = false;
					} else {
						question._isReviewComplete = true;
					}
				});
				_.each(options.banks, function(bank) {
					var associatedLearning = _.uniq([].concat.apply([], _.pluck(bank.questions, "_associatedLearning")), function(item) { return item._id; });
					bank._countTotalAssociatedLearning = associatedLearning.length;
					options._countTotalAssociatedLearning+=bank._countTotalAssociatedLearning;
					bank._countReviewedAssociatedLearning = _.filter(associatedLearning, function(item) { return item._interactions > 0 } ).length;
					options._countReviewedAssociatedLearning+=bank._countReviewedAssociatedLearning;
					bank._countUnreviewedAssociatedLearning = _.filter(associatedLearning, function(item) { return item._interactions == 0 } ).length;
					options._countUnreviewedAssociatedLearning+=bank._countUnreviewedAssociatedLearning;
					var notReviewedQuestions = _.findWhere(bank.questions, { _isReviewComplete: false });
					if(notReviewedQuestions) {
						bank._isReviewComplete = false;
					} else {
						bank._isReviewComplete = true;
					}
				});
				options._percentageReviewedAssociateLearning = (100/ options._countTotalAssociatedLearning) * options._countReviewedAssociatedLearning;
			},
			flagBugInteractionsCompletePropagation: function() {
				var resultsViewHandle = this;
				var options = this.get('options');
				_.each(options.associatedLearning, function(assoc) {
					var element = Adapt.findById(assoc._id);
					var type = orderBy.indexOf(assoc._id.substr(0, assoc._id.indexOf("-")));
					if (type == orderBy.length - 1) return;
					var children = element.getChildren();
					if (children) {
						children.each(function(child) {
							if (child.get("_id").substr(0,2) == "co") {
								console.log("WARNING: Learning Assistant: Cannot track interactions with MENU items for associated learning entries. Page, article, block and component are OK, possibly add menu's pages as associated learning entries instead?");
							}
						});
					}
				});
			}
		}
	);

	return LearnerassistantModel;
})