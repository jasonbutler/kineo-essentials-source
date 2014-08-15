
define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");

    var Hotgrid = ComponentView.extend({
 
        events: {
            "click .hotgrid-item-image":"showGridItemContent",
            "click .content-popup-icon-close":"closeContent"

        },
        
        preRender: function () {

            var items = this.model.get('_items');
            _.each(items, function(item){
                if(item._graphic.srcHover && item._graphic.srcVisited){
                    item._graphic.hasImageStates = false;
                }
            }, this);
            this.listenTo(Adapt, 'device:changed', this.resizeControl);
            this.setDeviceSize();
        },

        setDeviceSize: function() {
            if (Adapt.device.screenSize === 'large') {
                this.$el.addClass('desktop').removeClass('mobile');
                this.model.set('_isDesktop', true);
            } else {
                this.$el.addClass('mobile').removeClass('desktop');
                this.model.set('_isDesktop', false)
            }
            this.render();
        },

        postRender: function() {
            this.setupGrid();
            this.setReadyStatus();
        },

        resizeControl: function() {
            this.setDeviceSize();
        },

        setupGrid: function() {
            if (this.model.get("_isDesktop")) {
                var columns = this.model.get("_columns");
                var itemWidth = 100 / columns;
                this.$(".hotgrid-grid-item").css({
                    width: itemWidth + "%"
                });
            }
        },

        showGridItemContent: function(event) {
            if (event) event.preventDefault();
            var $item = $(event.currentTarget).parent();
            var index = $item.index();
            $item.addClass("visited");
            this.showContentWithItemIndex(index);
            var currentItem = this.getCurrentItem(index);
            currentItem.visited = true;
            this.evaluateCompletion();
            console.log(this.model.get("_isComplete"))
        },

        showContentWithItemIndex: function(index) {
            this.$(".hotgrid-content-item").css({
                display:"none"
            });
            this.$(".hotgrid-content").fadeIn(500)
            this.$(".hotgrid-content-item").eq(index).css({
                display:"block"
            });
        },

        getCurrentItem: function(index) {
            return this.model.get('_items')[index];
        },
        
        getVisitedItems: function() {
            return _.filter(this.model.get('_items'), function(item) {
                return item.visited;
            });
        },

        evaluateCompletion: function() {
            if (this.getVisitedItems().length == this.model.get('_items').length) {
                this.setCompletionStatus();
            }
        },

        closeContent: function(event) {
            if (event) event.preventDefault();
            this.$(".hotgrid-content").fadeOut(100);
        }
        
    });
    
    Adapt.register("hotgrid", Hotgrid);
    
    return Hotgrid;

});













