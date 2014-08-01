/*
* adapt-footer
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var FooterView = require('extensions/adapt-footer/js/adapt-footer-view');

	var footer = Backbone.View.extend({
		config: undefined,
		state: {
			lastBlock: undefined,
			currentMenu: undefined,
			currentPage: undefined,
			isFirstPage: false,
			isLastPage: false
		},
		menuStructure: {},
		onRootClicked: function() {
			//Backbone.history.navigate("#/",{trigger:true, "replace": true});
			// single menu and pages only in essentials
			var parentId = footer.state.currentPage.model.get("_parentId");
			Adapt.navigateToElement(parentId, "contentObjects");
			this.state.currentMenu = undefined;
			this.state.currentPage = undefined;
		},
		onPreviousClicked:function() {
			var menus = _.keys(this.menuStructure);
			var indexOfMenu = menus.indexOf(this.state.currentMenu.get("_id"));
			var pages = _.keys(this.menuStructure[this.state.currentMenu.get("_id")]);
			var indexOfPage = pages.indexOf(this.state.currentPage.model.get("_id"));
			if (this.config._isContinuous == "global") {
				if (indexOfPage === 0) { //if page is at the beginning of the menu goto previous menu, last page
					if (this.config._global !== undefined && this.config._global._pagePrevious !== undefined) {
						Backbone.history.navigate("#/id/" + this.config._global._pagePrevious, {trigger: true, replace: true});
						return;
					} else if (indexOfMenu === 0 && indexOfMenu == menus.length - 1) {
						//single menu, last page
					} else if (indexOfMenu === 0) {
						indexOfMenu = menus.length - 1; //last menu
						pages = _.keys(this.menuStructure[menus[indexOfMenu]]); //get menu pages
					} else {
						indexOfMenu-=1; //previous menu
						pages = _.keys(this.menuStructure[menus[indexOfMenu]]); //get menu pages
					}
					indexOfPage = pages.length - 1; //last page
				} else {
					indexOfPage-=1; //previous page
				}
			} else if (this.config._isContinuous == "local") {
				if (indexOfPage === 0 && indexOfPage == pages.length - 1) {
					//single page
				} else if (indexOfPage === 0) {
					indexOfPage = pages.length - 1; //last page
				} else {
					indexOfPage-=1; //previous page
				}
			} else {
				if (indexOfPage === 0) return;
				indexOfPage-=1; //previous page
			}
			Backbone.history.navigate("#/id/" + pages[indexOfPage], {trigger: true, replace: true});
		},
		onUpClicked: function() {
			var parentId = footer.state.currentPage.model.get("_parentId");
			Backbone.history.navigate("#/id/" + parentId, {trigger: true, replace: true});
		},
		onNextClicked: function() {
			var menus = _.keys(this.menuStructure);
			var indexOfMenu = menus.indexOf(this.state.currentMenu.get("_id"));
			var pages = _.keys(this.menuStructure[this.state.currentMenu.get("_id")]);
			var indexOfPage = pages.indexOf(this.state.currentPage.model.get("_id"));
			if (this.config._isContinuous == "global") {
				if (indexOfPage === pages.length - 1) { //if page is at the end of the menu goto next menu, first page
					if (this.config._global !== undefined && this.config._global._pageNext !== undefined) {
						Backbone.history.navigate("#/id/" + this.config._global._pageNext, {trigger: true, replace: true});
						return;
					} else if (indexOfMenu === 0 && indexOfMenu == menus.length - 1) {
						//single menu, first page
					} else if (indexOfMenu == menus.length - 1) {
						indexOfMenu = 0; //first menu
						pages = _.keys(this.menuStructure[menus[indexOfMenu]]); //get menu pages
					} else {
						indexOfMenu+=1; //next menu
						pages = _.keys(this.menuStructure[menus[indexOfMenu]]); //get menu pages
					}
					indexOfPage = 0; //first page
				} else {
					indexOfPage+=1; //next page
				}
			} else if (this.config._isContinuous == "local") {
				if (indexOfPage === 0 && indexOfPage == pages.length - 1) {
					//single page
				} else if (indexOfPage == pages.length - 1) {
					indexOfPage = 0; //first page
				} else {
					indexOfPage+=1; //next page
				}
			} else {
				if (indexOfPage == pages.length - 1) return;
				indexOfPage+=1; //next page
			}
			Backbone.history.navigate("#/id/" + pages[indexOfPage], {trigger: true, replace: true});
		},
		position: function() {
			var pages = _.keys(this.menuStructure[this.state.currentMenu.get("_id")]);
			var indexOfPage = pages.indexOf(this.state.currentPage.model.get("_id"));
			if (this.config._isContinuous == "local" || this.config._isContinuous == "global" ) {
				if (indexOfPage === 0 && indexOfPage == pages.length - 1 && this.config._isContinuous == "local") {
					this.state.isFirstPage = true;
					this.state.isLastPage = true;
				} else {
					this.state.isLastPage = false;
					this.state.isFirstPage = false;
				}
			} else {
				if (indexOfPage === 0) this.state.isFirstPage = true;
				if (indexOfPage == pages.length - 1) this.state.isLastPage = true;
			}
		}
	});
	footer = new footer();

	Adapt.on("app:dataReady", function() {
		var menus = Adapt.contentObjects.where({_type: "menu"});
		_.each(menus, function(menu) {
			var id = menu.get("_id");
			console.log("id: " + id);
			footer.menuStructure[id] = {};
			var pages = Adapt.contentObjects.where({_type: "page", _parentId: id });
			_.each(pages, function(page) {
				footer.menuStructure[id][page.get("_id")] = page;
			});
		});
	});

	Adapt.on("pageView:postRender", function(pageView) {
		var pageModel = pageView.model;
		if (pageModel.get("_footer") === undefined) return;
		var config = pageModel.get("_footer");
		if (config._isEnabled !== true && config._isEnabled !== undefined) return;

		var blocks = pageModel.findDescendants("blocks");

		var parentId = pageModel.get("_parentId");
		footer.state.currentMenu = Adapt.contentObjects.findWhere({_id: parentId});
		footer.state.currentPage = pageView;
		footer.state.lastBlock = blocks.last();
		footer.config = config;
	});

	Adapt.on('blockView:postRender', function(blockView) {
		if (footer.state.lastBlock === undefined) return;
		if (blockView.model.get("_id") !== footer.state.lastBlock.get("_id")) return;

		var element = blockView.$el.parent();

		footer.position();

		var footerView = new FooterView({model:{ config: footer.config, state: footer.state}});
		footerView.parent = footer;
		footerView.undelegateEvents();
		element.append(footerView.$el);
		footerView.delegateEvents();



	});

	return footer;

})