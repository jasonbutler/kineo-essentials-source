/*
* adapt-contrib-article-reveal
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Stuart Nicholls <stuart@stuartnicholls.com>, Mohammed Salamat Ali <Mohammed.SalamatAli@kineo.com>
*/
define(function(require) {

  var Adapt = require('coreJS/adapt');
  var Backbone = require('backbone');

  var ArticleRevealView = Backbone.View.extend({

    className: "article-reveal",

    initialize: function () {
      this.render();
      this.setup();
      this.listenTo(Adapt, "remove", this.remove);
      Adapt.on("page:scrollTo", _.bind(this.onProgressBarScrollTo, this));
    },

    events: {
      "click .article-reveal-open-button":"revealArticle"
    },

    render: function () {
      var data = this.model.toJSON();
      var template = Handlebars.templates["adapt-article-reveal"];
      $(this.el).html(template(data)).prependTo('.' + this.model.get("_id"));
      return this;
    },
	
	setup: function(event) {
      if (event) event.preventDefault();
      //prevent drag on buttons
      this.preventDrag();
      //hide articles
      var $articleInner = $("." + this.model.get("_id") + " > .article-inner ");
      $articleInner.css({display:"none"});    
      //set components to isVisible false
      this.toggleisVisible( false );
      this.$el.parent().addClass("article-reveal-enabled");
    },
    
    closeArticle: function(event) {
      if (event) event.preventDefault();

	  //set article not showing in css
      this.$(".article-reveal-open-button").removeClass('show');
      
      //animate Close..
      this.$(".article-reveal-close-button").fadeOut(500)
      var $articleInner = $("." + this.model.get("_id") + " > .article-inner ");
      
      $articleInner.slideUp( 1000, _.bind(function() {
         //..and set components to isVisible false
         this.toggleisVisible( false );
      }, this));
      // focus on this article reveal button
      this.$(".article-reveal-open-button").focus();

    },

    revealArticle: function(event) {
      if (event) event.preventDefault();
      if(this.$el.closest(".article").hasClass("locked")) return; // in conjunction with pageLocking
      
      //set article visited and article showing in css
      this.$(".article-reveal-open-button").addClass('visited');
      this.$(".article-reveal-open-button").addClass('show');
      
      //animate reveal 
      var $currentTarget = $("." + this.model.get("_id") + " .article-reveal-open-button" );
      var top = $currentTarget.offset().top - $(".navigation").height() - ( $currentTarget.height()*0.01 );
      $("html, body").animate({ scrollTop: top + "px" }, 1200 );
      var $articleInner = $("." + this.model.get("_id") + " > .article-inner " );
      $articleInner.css({
        display:"block"
      });

      $(window).resize();
     
      //hide open button
      this.$(".article-reveal-open-button").addClass('hide-button');
      // $activeElement = $(document.activeElement);
      // $activeElement.next().focus();
      $(".mejs-play button").focus();
      
      //set components to isVisible true
      this.toggleisVisible( true );
      $articleInner.addClass("show");
    },

  	revealObject: function(objectSelector, isArticle) {
        console.log("revealObject " + objectSelector + " - " + isArticle);
        this.$(".article-reveal-open-button").addClass('visited');
        this.$(".article-reveal-open-button").addClass('show');
        
        this.toggleisVisible(true);
        
        var $articleInner = $("." + this.model.get("_id") + " > .article-inner " );
          $articleInner.css({
          display:"block"
        });
        $articleInner.addClass("show");
        $(window).resize();
        this.$(".article-reveal-open-button").addClass('hide-button');
        $(".mejs-play button").focus();

        $("." + this.model.get("_id") + " > .article-inner ").slideDown(0);
        
        if(!isArticle) $(window).scrollTo($(objectSelector), {offset:{top:-$('.navigation').height()}});

    },

    toggleisVisible: function(view) {
      //console.log("toggleisVisible " + this.model.get('_id') + " - " + view);

      //this.model.set("_isVisible", view, {pluginName:"adapt-article-reveal"});
  		
      var allComponents = this.model.findDescendants('components');
  		  allComponents.each(function(component) {
          //console.log(component.get('_id') + " set to visible: " +view);
  				component.set("_isVisible", view, {pluginName:"adapt-article-reveal"});
  				//var id = component.get("_id");
  		  });

        var allBlocks = this.model.findDescendants('blocks');
        allBlocks.each(function(block) {
         //console.log(block.get('_id') + " set to visible " + view);
          block.set("_isVisible", view, {pluginName:"adapt-article-reveal"});
          //var id = component.get("_id");
        });
    },
    
    toggleReveal: function(view) {
    
    },
    
    preventDrag: function() {
      $(".article-reveal-open-button").on("dragstart", function(event) { event.preventDefault(); });
      $(".article-reveal-close-button").on("dragstart", function(event) { event.preventDefault(); });
    },

    onProgressBarScrollTo: function(objectSelector) {

        console.log("adapt-article-reveal.js,onProgressBarScrollTo " + objectSelector);
        var objectID = objectSelector;
        if(objectID.indexOf('.') === 0) objectID = objectID.slice(1);
        var objectModel = Adapt.findById(objectID);
        console.log("objectModel type: " + objectModel.get('_type'));

        if(objectModel.get('_type') === 'article') {
          this.revealObject(objectID, true);
          return;
        }

        // if not article will be block or component
        var objectSiblingTypes = (objectModel.get('_type') === 'block') ? 'blocks' : 'components';
        var allObjects = this.model.findDescendants(objectSiblingTypes);
    
        
        console.log("objectID: " + objectID);

        allObjects.each(_.bind(function(object){
            console.log(object.get('_id') + " - " + object.get('_isVisible'));
            if(object.get('_id') === objectID && !object.get('_isVisible')){
                this.revealObject(objectSelector, false);
                return;
            }
        }, this));
    }
  });

  Adapt.on('articleView:postRender', function(view) {
    if (view.model.get("_articleReveal")) {
      new ArticleRevealView({model:view.model});
    }
  });
});