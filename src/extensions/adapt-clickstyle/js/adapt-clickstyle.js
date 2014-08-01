/*
* adapt-clickstyle
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');

	function onClicked(event) {
		$currentTarget = $(event.currentTarget);
		var group = $currentTarget.attr("data-clickstyle-group") || false;
		var clicks = $currentTarget.attr("data-clickstyle") || 0;
		if (group) $currentTarget = $("[data-clickstyle-group='" + group + "']");
		$currentTarget.removeClass("clickstyle-"+clicks);
		clicks++;
		$currentTarget.addClass("clickstyle-"+clicks).attr("data-clickstyle",clicks).removeClass("clickstyle");
		Adapt.trigger("clickstyle:clicked", clicks);
	}

	$("body").on("click", ".clickstyle", onClicked);
	$("body").on("click", "[data-clickstyle]", onClicked);

})