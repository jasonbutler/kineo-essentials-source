define(function(require) {
    
   var QuestionBank = function(id, numQuestionBlocks){
    
        this.initialise(id, numQuestionBlocks);
    };

    QuestionBank.prototype = {
        
        initialise: function(id, numQuestionBlocks){
            //console.log('QuestionBank.initialize: ' + id + " - " + numQuestionBlocks); 
            this._id = id;
            this._numQuestionBlocks = numQuestionBlocks; 
            this.questionBlocks = [];
            this.unUsedQuestionBlocks = undefined;
        },
        
        getID: function(){ 
            return this._id; 
        },
        
        addBlock: function(block){
            //console.log("QuestionBank::addBlock " + block.get('_id') + " added to Bank ID: " + this._id);  
            this.questionBlocks.push(block);    
        },
        
       getRandomQuestionBlocks: function(){
            
            var questionBlocks = [];
            
            //console.log("getRandomQuestionBlocks: " + this._id +  " - " + this._numQuestionBlocks);
            for (var i = 0; i < this._numQuestionBlocks; i++) {
                var question = this.getRandomQuestion();
                if (question !== undefined) questionBlocks.push(question);
            }
                
            return questionBlocks;
        },
        
        getRandomQuestion: function(){          
            if (this.unUsedQuestionBlocks === undefined) {
                this.unUsedQuestionBlocks = this.questionBlocks.slice(0);
            }        
            
            if (this.unUsedQuestionBlocks !== undefined && this.unUsedQuestionBlocks.length < 1) {
               console.error("QuestionBank::getRandomQuestionBlock: Error, no more unused screens. Please check blocks.json that there are sufficient question blocks with _quizBankID " + this._id);
               return undefined;
            }
            
            var index = Math.round(Math.random() * (this.unUsedQuestionBlocks.length-1));
            var questionBlock = this.unUsedQuestionBlocks[index];
            
            // remove the question so we don't get it again
            this.unUsedQuestionBlocks.splice(index,1);
            
            return questionBlock;
        }
    }

    return QuestionBank;

});