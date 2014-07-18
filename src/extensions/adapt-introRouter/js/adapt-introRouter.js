/*
* adapt-preassessment
* License - ../LICENSE
* Maintainers - Gavin McMaster <gavin.mcmaster@kineo.com>
*/
define(function(require){

    var Adapt = require('coreJS/adapt');
       
    var navigateToIntro = function() {
        Adapt.navigateToElement(Adapt.course.get("_locationIds")._intro, "contentObjects");
    };

    var navigateToMenu = function() {
        Adapt.navigateToElement(Adapt.course.get("_locationIds")._menu, "contentObjects");
    };

    var onRoute = function(location) {
        console.log("adapt-introRouter onRoute: " + location)
    }; 

    Adapt.on('adapt:initialize', function() {
        //console.log("adapt-introRouter, on initialize");
        //console.log(Adapt.course.get("_locationIds") + " - " +  Adapt.course.get("_locationIds")._intro);
        if(Adapt.course.get("_locationIds") && Adapt.course.get("_locationIds")._intro){
            Adapt.hasIntro = true;
            navigateToIntro();  
        } 
        else {
            Adapt.trigger('router:menu', Adapt.course);
        }
    });
});
