define(function(require) {

	var Backbone = require('backbone');
	var Adapt = require('coreJS/adapt');
	var QuestionBank = require('extensions/adapt-contrib-assessment/js/adapt-contrib-assessment-QuestionBank');

	var AssessmentModel = Backbone.Model.extend({

		className: "AssessmentModel",

		initialize: function() {
			this.listenTo(Adapt, 'questionView:complete', this.onQuestionComplete);
            this.set('_quizCompleteInSession', false);
		},

		setQuizData: function() {
			//console.log(this.className +":setQuizData");
			this.questionBanks = [];
            this.allQuestionBlocks = [];
            this.numberOfQuestionsAnswered = 0;
            this.get('_children').models = this.get('_allChildModels');
            var quizModels;

            // default values are 0 start blocks, 1 end block (results screen)
            this.startBlockCount = (_.isNumber(this.get('_startBlockCount'))) ? this.get('_startBlockCount') : 0;
            this.endBlockCount = (_.isNumber(this.get('_endBlockCount'))) ? this.get('_endBlockCount') : 1;
            this.allQuestionBlocks = this.get('_children').slice(this.startBlockCount, this.get('_children').length - this.endBlockCount);
                
            if(this.get('_quizCompleteInSession')  && !this.get('_isResetOnRevisit')){
                // leave the order as before - previous answers and results will be displayed
                quizModels = this.get('quizModels');
            }
            else if(this.get('_banks') && this.get('_banks')._isEnabled && this.get('_banks')._split.length > 1){
                var banks = this.get('_banks')._split.split(",");
                           
                _.each(banks, _.bind(function(bank, index){
                    this.questionBanks.push(new QuestionBank((index+1), bank));  
                },this));

                this.setAllBlocksUnavailable();
               	this.populateQuestionBanks();
                quizModels = this.buildBankedQuiz();
                this.setFilteredBlocksAvailable(quizModels);
            }
            else if(this.get('_randomisation') && this.get('_randomisation')._isEnabled) {
                this.setAllBlocksUnavailable();
                quizModels = this.setupRandomisation();
                this.setFilteredBlocksAvailable(quizModels);
            }
            else {
            	quizModels = this.get('_children').models;
            }

            this.set({quizModels:quizModels});
            this.allChildComponents = this.getAllChildComponents();
            this.questionComponents = this.getQuestionComponents();
            this.overrideLockedAttributes();

            return quizModels;
		},

		buildBankedQuiz: function() {
            var models = this.get('_children').models;
            var startModels = models.slice(0, this.startBlockCount);
            var endModels = models.slice(models.length-this.endBlockCount); 
            var questionModels = [];
            var bankedModels;
             
            _.each(this.questionBanks, function(questionBank){
                var questions = questionBank.getRandomQuestionBlocks();
                questionModels = questionModels.concat(questions);
            })
          
            if(this.get('_randomisation') && this.get('_randomisation')._isEnabled) questionModels = _.shuffle(questionModels);
            bankedModels = startModels.concat(questionModels).concat(endModels);

            return bankedModels;
        },

         setupRandomisation: function() {
            //console.log(this.className + ":setupRandomisation");

            var randomisationModel = this.get('_randomisation');
            var blockModels = this.get('_children').models;
            var bankedModels;

            var startModels = blockModels.slice(0, this.startBlockCount);
            var numberOfQuestionBlocks = blockModels.length - this.endBlockCount;
            var questionModels = _.shuffle(blockModels.slice(this.startBlockCount, numberOfQuestionBlocks));
            var endModels = blockModels.slice(numberOfQuestionBlocks);
            var randomCount = this.validateRandomCount(randomisationModel._blockCount, numberOfQuestionBlocks) ? randomisationModel._blockCount : numberOfQuestionBlocks;

            questionModels = questionModels.slice(0, randomCount);
            bankedModels = startModels.concat(questionModels).concat(endModels);
            
            return bankedModels;
        },

		setAllBlocksUnavailable: function() {
            _.each(this.get('_children').models, function(block){
                block.set('_isAvailable', false, {pluginName: '_assessment'});
            });
        },

        setFilteredBlocksAvailable: function(quizModels) {
            _.each(quizModels, function(block){
                block.set('_isAvailable', true, {pluginName: '_assessment'});                
             })
        },

        overrideLockedAttributes: function() {
            _.each(this.questionComponents, _.bind(function(component) {
                component.set({
                    '_isResetOnRevisit': this.get('_isResetOnRevisit') || (!this.get('_quizCompleteInSession')),
                    '_canShowFeedback': this.get('_canShowFeedback')
                }, { pluginName: "_assessment" });
            }, this));

            var childComponentModels = [];
                       
            _.each(this.get('_children').models, function(block){
               childComponentModels = childComponentModels.concat(block.getChildren().models);
            }); 

            var componentsCollection = new Backbone.Collection(this.allChildComponents);
            var results = componentsCollection.findWhere({_component: "results"});
            if(results) results.set({'_isResetOnRevisit': this.get('_isResetOnRevisit')}, {pluginName:"_assessment"});
        },

        populateQuestionBanks: function() {        
            //console.log(this.className + ":populateQuestionBanks " + this.allQuestionBlocks.length);

            _.each(this.allQuestionBlocks, _.bind(function(questionBlock){
                var bankID = questionBlock.get('_quizBankID');
                var questionBank = this.getBankByID(bankID);
                questionBank.addBlock(questionBlock); 
            }, this));
        },

        getBankByID: function(id) {
            //console.log(this.className + ":getBankByID: " + id);
            for(var i=0;i<this.questionBanks.length;i++){
                var qb = this.questionBanks[i];
                if(id===qb.getID()) return qb;
            }            
        },

		onQuestionComplete: function(questionView) {
            //console.log(this.className +":onQuestionComplete " + questionView.model.get('_id'));
            if(questionView.model.findAncestor('articles').get('_id') !== this.get('_id')) return;

            this.numberOfQuestionsAnswered++;
            if(this.numberOfQuestionsAnswered >= this.questionComponents.length) {
                this.onQuizComplete();
            }    
        },

        getAllChildComponents: function() {
            var allChildComponents = [];
               
            _.each(this.get('quizModels'), function(block) {
               allChildComponents = allChildComponents.concat(block.getChildren().models);
            });

            return allChildComponents;
        },

         getQuestionComponents: function() {            
            return _.filter(this.allChildComponents, function(componentModel) { 
                if (componentModel.get('_questionWeight')) return componentModel; 
            });
        },


        getQuestionModel: function() {
            var isPercentageBased = this.get('_isPercentageBased');
            var scoreToPass = this.get('_scoreToPass');
            var score = this.getScore();
            var scoreAsPercent = this.getScoreAsPercent();
            
            var isPass = false;

            if (isPercentageBased) isPass = (scoreAsPercent >= scoreToPass) ? true : false; 
            else isPass = (score >= scoreToPass) ? true : false;

            //section for learnerassistant
            var allQuestions = {};
            var allBanks = {};
            _.each(this.getQuestionComponents(), function(item, index) {

                var parent = Adapt.findById(item.get("_parentId"));

                //make array of questionModels
                var questionModel = {
                    _quizBankID: parent.get('_quizBankID'),
                    _isCorrect: item.get("_isCorrect"),
                    title: item.get("title"),
                    _id: item.get("_id"),
                    _associatedLearning: _.clone(item.get("_associatedLearning"))
                };
                //convert associatedlearning id array to element data object array
                if (typeof questionModel._associatedLearning !== "undefined") {
                    for (var al = 0; al < questionModel._associatedLearning.length; al++) {
                        var assoc =  Adapt.findById(questionModel._associatedLearning[al]).toJSON();
                        questionModel._associatedLearning[al] = {
                            _id: assoc._id,
                            title: assoc.title
                        };
                    }
                } else questionModel._associatedLearning = [];
                allQuestions[questionModel._id] = questionModel;
                if (!allBanks[questionModel._quizBankID]) allBanks[questionModel._quizBankID] = { allQuestions: {}, _quizBankID: questionModel._quizBankID };
                allBanks[questionModel._quizBankID].allQuestions[questionModel._id] = questionModel;
            });
            //end of learnerassistant

            return  {
                isPercentageBased: isPercentageBased,
                isPass: isPass,
                score: score,
                scoreAsPercent: scoreAsPercent,
                feedbackMessage: this.get('feedbackMessage'),
                associatedLearning: this.get('_associatedLearning'),
                allQuestions: allQuestions, //addition for learnerassistant
                allBanks: allBanks
            };
        },


        onQuizComplete: function() { 
            var questionModel = this.getQuestionModel();

            this.set('lastAttemptScoreAsPercent', questionModel.scoreAsPercent)
            Adapt.course.set('_isAssessmentPassed', questionModel.isPass);

            this.setFeedbackMessage();
            console.log("this.getFeedbackBand()",this.getFeedbackBand());
            if(this.getFeedbackBand()._showAssociatedLearning) this.setAssociatedLearning();
            
            this.set({
                'feedbackTitle': this.get('_completionMessage').title, 
                'score': questionModel.isPercentageBased ? questionModel.scoreAsPercent + '%' : score
            });
            if(!this.get('_quizCompleteInSession')) this.set({_quizCompleteInSession: true});
            if(!Adapt.course.get('_isAssessmentAttemptComplete')) Adapt.course.set('_isAssessmentAttemptComplete', true);
        
            Adapt.trigger('assessment:complete', this.getQuestionModel());
        },

        setFeedbackMessage: function() {
            var feedback = this.get('_completionMessage').message;

            feedback = feedback.replace("[SCORE]", this.getScore());
            feedback = feedback.replace("[MAXSCORE]", this.getMaxScore().toString());
            feedback = feedback.replace("[PERCENT]", this.getScoreAsPercent().toString());
            feedback = feedback.replace("[FEEDBACK]", this.getFeedbackBand().feedback.toString());
            
            this.set('feedbackMessage', feedback);
        },

        setAssociatedLearning: function() {
            var associatedLearning = [];

            _.each(this.questionComponents, function(component) {
                if (component.has('_associatedLearning')) {
                    var associatedLearningIDs = component.get('_associatedLearning');
                    
                    //console.log(component.get('_id') + " - " + component.get('_isComplete') + " - " + component.get('_isCorrect') + " - " + associatedLearningIDs.length);

                    if (component.get('_isComplete') && !component.get('_isCorrect') && associatedLearningIDs.length > 0) {                    
                        _.each(associatedLearningIDs, function(id) {
                            
                            var model = Adapt.findById(id);
                            //console.log("model",model)
                            
                            if (model && model.has('title')) {
                                var title = model.get('title');
                                //console.log("title: " + title);

                                if (!_.contains(associatedLearning, title)) {
                                   associatedLearning.push({id: id, type: model._siblings, title: title});
                                }
                            }
                        }, this);
                    }
                }
            }, this);
           
           this.set('_associatedLearning', associatedLearning);
        },

        validateRandomCount: function(randomCount, numberOfQuestions) {
        	return (randomCount !== undefined && _.isNumber(randomCount) && randomCount > 0 && randomCount < numberOfQuestions);
        },

        getScore: function() {
            var score = 0;
            _.each(this.questionComponents, function(component) {
                if (component.get('_isCorrect') && component.get('_questionWeight')) score += component.get('_questionWeight');
            });
            return score;
        },
        
        getMaxScore: function() {
            var maxScore = 0;
            _.each(this.questionComponents, function(component) {
                if (component.get('_questionWeight')) maxScore += component.get('_questionWeight');
            });
            return maxScore;
        },
        
        getScoreAsPercent: function() {
            return Math.round((this.getScore() / this.getMaxScore()) * 100);
        },    
        
        resetQuizData: function() {
        	this.numberOfQuestionsAnswered = 0;
        },
        
        getFeedbackBand: function() {
            var bands = this.get('_bands');
            var percent = this.getScoreAsPercent();
            
            for (var i = (bands.length - 1); i >= 0; i--) {
                if (percent >= bands[i]._score) return bands[i];
            }
        },

        getLastAttemptScoreAsPercent: function() {
            return this.get('lastAttemptScoreAsPercent');
        }
	});

	return AssessmentModel;
});
