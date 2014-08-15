/*
* adapt-contrib-gmcq
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@gmail.com>
*/
define(function(require) {
    var Mcq = require('components/adapt-contrib-mcq/js/adapt-contrib-mcq');
    var Adapt = require('coreJS/adapt');
    
    var Gmcq = Mcq.extend({

        events: function() {

            var events = {
                'focus .component-item input':'onItemFocus',
                'blur .component-item input':'onItemBlur',
                'change .component-item input':'onItemSelected'
            }

            if ($('html').hasClass('ie8')) {

                var ie8Events = {
                    'click label img':'forceChangeEvent'
                }

                events = _.extend(events, ie8Events);

            }

            return events;
            
        },

        onItemSelected: function(event) {

            var selectedItemObject = this.model.get('_items')[$(event.currentTarget).parent('.component-item').index()];
            
            if(this.model.get('_isEnabled') && !this.model.get('_isSubmitted')){
                this.toggleItemSelected(selectedItemObject, event);
            }

        },

        setupQuestion: function() {

            this.listenTo(Adapt, 'device:changed', this.resizeImage);

        },

        onQuestionRendered: function() {

            this.resizeImage(Adapt.device.screenSize);

            this.$('label').imageready(_.bind(function() {
                this.setReadyStatus();
            }, this));

        },
                
        resizeImage: function(width) {

            this.$('label').each(function( index ) {
                var src = $(this).find('img').attr('data-' + width);
                $(this).find('img').attr('src', src);
            });    

        },

        forceChangeEvent: function(event) {

            $("#" + $(event.currentTarget).closest("label").attr("for")).change();

        }

    });
    
    Adapt.register("gmcq", Gmcq);

    return Gmcq;
    
});