/*
* adapt-bookmarking
* License - https://github.com/cgkineo/adapt-bookmarking/LICENSE
* Maintainers - Dan Ghost <daniel.ghost@kineo.com>
*/

define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var BookmarkingDialog = require('extensions/adapt-bookmarking/js/adapt-bookmarking-dialog');
    var ScormWrapper = require('extensions/adapt-contrib-spoor/js/scormWrapper').getInstance();
    var courseBookmarkModel;
    var bookmarkLevel;

    function initialize() {
        Adapt.on('menuView:ready', resetLocationID);
        Adapt.on('pageView:preRender', setupBookmarkLevel);       
    }

    function setupBookmarkLevel(pageView) {
        var hasPageBookmarkObject = pageView.model.has('_bookmarking');
        var bookmarkModel = (hasPageBookmarkObject) ? new Backbone.Model(pageView.model.get('_bookmarking')) : courseBookmarkModel;
        bookmarkLevel = bookmarkModel.get('_level');

        if (!bookmarkModel.get('_isEnabled')) {
            resetLocationID();
        } else {
            if (bookmarkLevel === 'page') {
                setLocationID(pageView.model.get('_id'));
            } else {
                Adapt.on(bookmarkLevel + 'View:postRender', addInViewListeners);
                Adapt.on('remove', removeInViewListeners);
            }
        }
    }

    function addInViewListeners(view) {
        var element = view.$el;
        element.data('locationID', view.model.get('_id'));
        element.on('inview', inview);
    }

    function removeInViewListeners() {
        Adapt.off('remove', removeInViewListeners);
        Adapt.off(bookmarkLevel + 'View:postRender', addInViewListeners);
    }

    function resetLocationID() {
        setLocationID('');
    }

    function setLocationID(id) {
        ScormWrapper.setLessonLocation(id);
    }

    function inview(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            if (visiblePartY === 'top') {
                var id = $(this).data('locationID');
                setLocationID(id);
            }
        }
    }

    Adapt.once('introRouter:menu', function() {
        courseBookmarkModel = new Backbone.Model(Adapt.course.get('_bookmarking'));   

        if (courseBookmarkModel.get('_isEnabled')) {
            initialize();

            var locationID = ScormWrapper.getLessonLocation();
            

            if (locationID && locationID !== "") {
                courseBookmarkModel.set('_locationID', locationID);
                new BookmarkingDialog({model: courseBookmarkModel});
            }
        }
    });
});