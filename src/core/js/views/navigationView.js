/*
* NavigationView
* License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
* Maintainers - Daryl Hedley
*/

define(function(require) {
    
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var Adapt = require('coreJS/adapt');

    var NavigationView = Backbone.View.extend({
        
        className: "navigation",
        
        initialize: function() {
            this.listenTo(Adapt, 'router:menu router:page', this.hideNavigationButton);
            this.template = "navigation";
            this.preRender();
        },
        
        events: {
            'click a':'triggerEvent'
        },

        preRender: function() {
            Adapt.trigger('navigationView:preRender', this);
            this.render();
        },
        
        render: function() {
            var template = Handlebars.templates[this.template]
            this.$el.html(template(Adapt.course.get('_accessibility')._ariaLabels)).appendTo('#wrapper');
            _.defer(_.bind(function() {
                Adapt.trigger('navigationView:postRender', this);
            }, this));
            return this;
        },
        
        triggerEvent: function(event) {
            event.preventDefault();
            var currentEvent = $(event.currentTarget).attr('data-event');
            Adapt.trigger('navigation:' + currentEvent);
        },

        hideNavigationButton: function(model) {
            var showNav = true;
            if(Adapt.hasIntro) {
                var id = model.get("_id");
                var introId = Adapt.course.get("_locationIds")._intro;
                var menuId = Adapt.course.get("_locationIds")._menu;  
                showNav = (id !== introId) && (id !== menuId);
            }

            if (model.get('_type') === "course" || !showNav) {
                $('.navigation-back-button').addClass('display-none');
            } else {
                this.showNavigationButton();
            }
        },

        showNavigationButton: function() {
            $('.navigation-back-button').removeClass('display-none');
        }
        
    });
    
    return NavigationView;
    
});