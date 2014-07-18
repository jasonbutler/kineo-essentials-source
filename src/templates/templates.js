this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("buttons", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function";


  buffer += "<a href=\"#\" class=\"button submit\">\r\n    <span>  \r\n        ";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.submit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n    </span>\r\n</a>\r\n<a href=\"#\" class=\"button reset\">\r\n    <span>\r\n        ";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.reset)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n    </span>\r\n</a> \r\n<a href=\"#\" class=\"button model\">\r\n    <span> \r\n        ";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.showCorrectAnswer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n    </span>\r\n</a>\r\n<a href=\"#\" class=\"button user\">\r\n    <span>\r\n        ";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.hideCorrectAnswer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n    </span>\r\n</a>";
  return buffer;
  }));

Handlebars.registerPartial("component", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-title component-title\">\r\n    <h4 class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-title-inner component-title-inner\">\r\n        ";
  if (stack1 = helpers.displayTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </h4>\r\n</div>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-body component-body\">\r\n    <div class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-body-inner component-body-inner\">\r\n        ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n</div>\r\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-instruction component-instruction\">\r\n    <div class=\"";
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-instruction-inner component-instruction-inner\">\r\n        ";
  if (stack1 = helpers.instruction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.instruction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n</div>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.displayTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, depth0.instruction, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }));

this["Handlebars"]["templates"]["results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"results-title component-title\">\n        <h4 class=\"results-title-inner component-title-inner\">\n            ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h4>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"results-body component-body\">\n        <div class=\"results-body-inner component-body-inner\">\n            ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"results-feedback component-feedback\">\n        <div class=\"results-feedback-inner component-feedback-inner\">\n            ";
  if (stack1 = helpers.feedbackMessage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.feedbackMessage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"results-associatedLearning component-associatedLearning\">\n        <div class=\"results-associatedLearning-inner component-associatedLearning-inner\">\n            <ul>\n                ";
  stack1 = helpers.each.call(depth0, depth0._associatedLearning, {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        </div>\n    </div>\n    ";
  return buffer;
  }
function program8(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, depth1._linkToAssociatedLearning, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <a href=\"#\" class=\"associatedLearning-link\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><li>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li></a>\n                    ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"results-inner component-inner\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0.feedbackMessage, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, depth0._associatedLearning, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["accordion"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <div class=\"accordion-item\">\r\n            <a href=\"#\" class=\"accordion-item-title ";
  stack1 = helpers['if'].call(depth0, depth0._isVisited, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  if (stack1 = helpers.alt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.alt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n              <div class=\"accordion-item-title-inner\">\r\n                <div class=\"accordion-item-title-icon icon icon-plus\"></div>\r\n                  <h5>\r\n                      ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                  </h5>\r\n              </div>\r\n            </a>\r\n            <div class=\"accordion-item-body\">\r\n                <div class=\"accordion-item-body-inner\">\r\n                    ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </div>\r\n            </div>\r\n        </div>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "visited";
  }

  buffer += "<div class=\"accordion-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.accordion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"accordion-widget component-widget\">\r\n        ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["blank"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n<div class=\"blank-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.blank)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, depth1._isEnabled, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.odd || depth1.odd),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "odd", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "\">\r\n            <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = depth1._id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n            <label for=\""
    + escapeExpression(((stack1 = depth1._id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"component-item-color component-item-text-color component-item-boder ";
  stack2 = helpers['if'].call(depth0, depth0._isSelected, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n            \r\n                <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-large=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-medium=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-small=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.small)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n            \r\n                <div class=\"gmcq-item-checkbox\">\r\n                    <div class=\"gmcq-item-state\">\r\n                        <div class=\"gmcq-item-icon gmcq-answer-icon icon\"></div>\r\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\r\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\r\n                    </div>\r\n                    <h5 class=\"gmcq-item-inner\">\r\n                        ";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                    </h5>\r\n                </div>\r\n            </label>\r\n        </div>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"gmcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.gmcq)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"gmcq-widget component-widget clearfix ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n        ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n    <div class=\"buttons\" role=\"button\">\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["graphic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.graphic)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"graphic-widget component-widget\">\r\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-large=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-medium=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-small=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.small)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n            <div class=\"hotgraphic-item-graphic\">\r\n              <div class=\"hotgraphic-item-graphic-inner\">\r\n                <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"hotgraphic-item-body\">\r\n              <div class=\"hotgraphic-item-body-inner\">\r\n                <h5>\r\n                  ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </h5>\r\n                <p>\r\n                  ";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.body; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n      <a href=\"#\" class=\"hotgraphic-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, depth0._isVisited, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"top:";
  if (stack2 = helpers._top) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._top; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "%; left:";
  if (stack2 = helpers._left) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._left; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "%;\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin\"></div>\r\n      </a>\r\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "visited";
  }

  buffer += "\r\n<div class=\"hotgraphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.hotGraphic)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n  <div class=\"hotgraphic-widget component-widget\">\r\n\r\n    <div class=\"hotgraphic-graphic\">\r\n\r\n      <div class=\"hotgraphic-popup\" role=\"dialog\">\r\n\r\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\r\n          <div class=\"hotgraphic-popup-nav component-item-color\">\r\n            <a href=\"#\" class=\"hotgraphic-popup-controls back\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.previous)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\" role=\"button\"></div>\r\n            </a>\r\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\r\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\r\n            </div>\r\n            <a href=\"#\" class=\"hotgraphic-popup-controls next\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.next)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" role=\"button\">\r\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\r\n            </a>\r\n          </div>\r\n          <a href=\"#\" class=\"hotgraphic-popup-done\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.closePopup)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" role=\"button\">\r\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"hotgraphic-popup-inner clearfix\">\r\n          ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n      ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n  </div>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["matching"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, depth1._isEnabled, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n      <div class=\"matching-item-title\">";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\r\n      <div class=\"matching-select-container component-item-color\">\r\n        <div class=\"matching-select-state\" role=\"option\">\r\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\r\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\r\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\r\n        </div>\r\n        <select class=\"matching-select component-text-color\">\r\n          <option value=\"inital\">\r\n            "
    + escapeExpression(((stack1 = depth1.placeholder),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n          </option>\r\n          ";
  stack2 = helpers.each.call(depth0, depth0._options, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        </select>\r\n      </div>\r\n    </div>\r\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n          <option>\r\n            ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n          </option>\r\n          ";
  return buffer;
  }

  buffer += "\r\n<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.matching)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n  <div class=\"matching-widget component-widget ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n    ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n  </div>\r\n  <div class=\"buttons\" role=\"button\">\r\n  </div>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["mcq"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, depth1._isEnabled, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = depth1._id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n            <label for=\""
    + escapeExpression(((stack1 = depth1._id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"component-item-text-color component-item-border";
  stack2 = helpers['if'].call(depth0, depth0._isSelected, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n                <div class=\"mcq-item-state\">\r\n                    <div class=\"mcq-item-icon mcq-answer-icon component-item-text-color icon\"></div>\r\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\r\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\r\n                </div>\r\n                <h5 class=\"mcq-item-inner\">\r\n                    ";
  if (stack2 = helpers.text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.text; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </h5>\r\n            </label>\r\n        </div>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return " correct";
  }

function program9(depth0,data) {
  
  
  return " incorrect";
  }

function program11(depth0,data) {
  
  
  return " selected";
  }

  buffer += "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.mcq)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"mcq-widget component-widget ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n        ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n    <div class=\"buttons\">\r\n    </div>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["media"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n      <audio src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.mp3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"audio/mp3\"/>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.ogg), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <audio src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.ogg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"audio/ogg\"/>\r\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n        <video preload=\"none\" width=\"640px\" height=\"360px\" poster=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.poster)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"width:100%; height:100%;\">\r\n          ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.source), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        </video>\r\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.source)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n          ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.mp4)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"video/mp4\"/>\r\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.ogv)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"video/ogg\"/>\r\n          ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    <div class=\"media-transcript-container\" role=\"document\">\r\n      <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.transcriptLink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"media-transcript\">\r\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.transcriptText), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n      </a>\r\n    </div>\r\n    ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n          "
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.transcriptText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n          "
    + escapeExpression(((stack1 = ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.transcriptLink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"media-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.media)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"media-widget component-widget\">\r\n\r\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.mp3), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._media),stack1 == null || stack1 === false ? stack1 : stack1.transcriptLink), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["narrative"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <div class=\"narrative-strapline-title\">\r\n                        <h5 class=\"narrative-strapline-title-inner\">\r\n                           ";
  if (stack1 = helpers.strapline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strapline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n                        </h5>\r\n                    </div>\r\n                    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, depth0.visited, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._graphic),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n                </div>\r\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "visited";
  }

function program6(depth0,data) {
  
  
  return "\r\n                <div class=\"narrative-progress component-item-color component-item-border\"></div>\r\n                ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"narrative-content-item\">\r\n                    <div class=\"narrative-content-title\">\r\n                        <h5 class=\"narrative-content-title-inner\">\r\n                           ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n                        </h5>\r\n                    </div>\r\n                    <div class=\"narrative-content-body\">\r\n                        <div class=\"narrative-content-body-inner\">\r\n                            ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }

  buffer += "\r\n<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.narrative)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"narrative-widget component-widget clearfix\">\r\n        \r\n        <div class=\"narrative-strapline\">\r\n            <div class=\"narrative-strapline-header\">\r\n                <div class=\"narrative-strapline-header-inner clearfix\">\r\n                    ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </div>\r\n            </div>\r\n            <a href=\"#\" class=\"narrative-popup-open\" tabindex=\"-1\">\r\n                <div class=\"icon icon-plus\"></div>\r\n            </a>\r\n        </div>\r\n        \r\n        <div class=\"narrative-slide-container\">\r\n  \r\n            <a href=\"#\" class=\"narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.previous)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                <div class=\"icon icon-controls-left\"></div>\r\n            </a>\r\n            <a href=\"#\" class=\"narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.next)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                <div class=\"icon icon-controls-right\"></div>\r\n            </a>\r\n            \r\n            <div class=\"narrative-slider clearfix\">\r\n                ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n            <div class=\"narrative-indicators\">\r\n                ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"narrative-content\">\r\n            <div class=\"narrative-content-inner\">\r\n                ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n        </div>\r\n\r\n    </div>    \r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["slider"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, depth0.correct, {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program6(depth0,data) {
  
  
  return "incorrect";
  }

  buffer += "<div class=\"slider-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.slider)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"slider-widget component-widget ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n        <div class=\"slider-holder clearfix\">\r\n            <div class=\"slider-scale-labels\">\r\n                <div class=\"slider-scale-start\">";
  if (stack2 = helpers.labelStart) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.labelStart; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\r\n                <div class=\"slider-scale-end\">";
  if (stack2 = helpers.labelEnd) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.labelEnd; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\r\n            </div>\r\n            <div class=\"slider-scaler component-item-color\">\r\n                <div class=\"slider-modelranges\"></div>\r\n                <div class=\"slider-markers\"></div>\r\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\r\n                <div class=\"slider-scale-marker component-item-color component-item-text-color\"></div>\r\n            </div>\r\n            <div class=\"slider-background\">\r\n                <div class=\"slider-item component-item ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n                    <div class=\"slider-sliderange\">\r\n                        <a href=\"#\" class=\"slider-handle component-item-color component-item-text-color\"></a>\r\n                        <div class=\"slider-bar component-item-color\"></div>\r\n                    </div>\r\n                    <div class=\"slider-outer-bar\">\r\n                    <div class=\"slider-item-state\">\r\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\r\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\r\n                    </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"buttons\" role=\"button\">\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["text"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["textinput"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, depth0._isCorrect, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers.unless.call(depth0, depth1._isEnabled, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.prefix, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, depth1._isEnabled, {hash:{},inverse:self.programWithDepth(13, program13, data, depth0),fn:self.programWithDepth(11, program11, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.suffix, {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            <div class=\"textinput-item-state\">\r\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\r\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\r\n            </div>\r\n        </div>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, depth0.correct, {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <label class=\"textinput-item-prefix component-item-text-color\">";
  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\r\n            ";
  return buffer;
  }

function program11(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = depth1.placeholder),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"\" role=\"textbox\">\r\n            ";
  return buffer;
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n                <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = depth1.placeholder),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (stack2 = helpers.userAnswer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.userAnswer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" disabled=\"true\" role=\"textbox\">\r\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <label class=\"textinput-item-suffix component-item-text-color\">";
  if (stack1 = helpers.suffix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.suffix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\r\n            ";
  return buffer;
  }

  buffer += "\r\n<div class=\"component-inner textinput-inner\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.textInput)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    "
    + "\r\n    <div class=\"component-widget textinput-widget ";
  stack2 = helpers.unless.call(depth0, depth0._isEnabled, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n        ";
  stack2 = helpers.each.call(depth0, depth0._items, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        "
    + "\r\n        <div class=\"buttons\"  role=\"button\">\r\n            ";
  stack2 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["adapt-article-reveal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n<div class=\"article-reveal-inner "
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._classes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"height:"
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px; background: url('"
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._backgroundImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "') center top no-repeat;\" role=\"region\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.articleReveal)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	  <div class=\"article-reveal-content-container\">\r\n		  <div class=\"article-reveal-content-container-inner\">\r\n		    <div class=\"article-reveal-graphic-container\">\r\n		  		<div class=\"article-reveal-graphic\"></div>\r\n		  	</div>\r\n		  	<div class=\"article-reveal-text-container\">\r\n			  	<div class=\"article-reveal-text-container-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._revealTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n			  	<div class=\"article-reveal-text-container-body\">"
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._revealBody)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n		  	</div>\r\n			  	<a href=\"#\" class=\"article-reveal-open-button\" style=\"top:"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._triggerPosition)),stack1 == null || stack1 === false ? stack1 : stack1._top)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%; left:"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._triggerPosition)),stack1 == null || stack1 === false ? stack1 : stack1._left)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%;\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.openArticle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n					  <span class=\"article-reveal-open-button-text\">"
    + escapeExpression(((stack1 = ((stack1 = depth0._articleReveal),stack1 == null || stack1 === false ? stack1 : stack1['_icon-text'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n				</a>\r\n		  </div>\r\n	  </div>\r\n</div>\r\n ";
  return buffer;
  });

this["Handlebars"]["templates"]["learnerassistant-PageLevelProgressView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "complete";
  }

function program3(depth0,data) {
  
  
  return "incomplete";
  }

function program5(depth0,data) {
  
  
  return "incrementalMarking";
  }

function program7(depth0,data) {
  
  
  return "not-incrementalMarking";
  }

function program9(depth0,data) {
  
  
  return "show-progress";
  }

function program11(depth0,data) {
  
  
  return "hide-progress";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	    ";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	            <a class=\"learnerassistant-page-level-progress-item ";
  if (stack1 = helpers.assessmentPageLevelProgressMark) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.assessmentPageLevelProgressMark; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, depth0._isInteractionsComplete, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" data-learnerassistant-page-level-progress-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"answered icon icon-plus\"></span><span class=\"unanswered icon icon-minus\"></span><span class=\"incorrect icon icon-cross\"></span><span class=\"correct icon icon-tick\"></span></a>\r\n	    ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	        ";
  stack1 = helpers['if'].call(depth0, depth0._isVisible, {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<span class=\"answered icon icon-plus\"></span><span class=\"unanswered icon icon-minus\"></span><span class=\"incorrect icon icon-cross\"></span><span class=\"correct icon icon-tick\"></span>";
  stack1 = helpers['if'].call(depth0, depth0._isVisible, {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	    ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	            <a class=\"learnerassistant-page-level-progress-item ";
  if (stack1 = helpers.assessmentPageLevelProgressMark) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.assessmentPageLevelProgressMark; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, depth0._isInteractionsComplete, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\" data-learnerassistant-page-level-progress-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return " <span>";
  }

function program22(depth0,data) {
  
  
  return "</a>";
  }

function program24(depth0,data) {
  
  
  return "</span>\r\n	        ";
  }

  buffer += "<div class=\"learnerassistant-page-level-progress-inner ";
  stack1 = helpers['if'].call(depth0, depth0.isComplete, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.incrementalMarking, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.showProgress, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n	";
  stack1 = helpers['if'].call(depth0, depth0.showInvisible, {hash:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["learnerassistant-navigationView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "is-resultsshown";
  }

function program3(depth0,data) {
  
  
  return "not-resultsshown";
  }

function program5(depth0,data) {
  
  
  return "is-reviewed";
  }

function program7(depth0,data) {
  
  
  return "not-reviewed";
  }

function program9(depth0,data) {
  
  
  return "disabled";
  }

  buffer += "<div class=\"learnerassistant-navigationView-inner block-inner\">\r\n	<div class=\"buttongroup ";
  stack1 = helpers['if'].call(depth0, depth0.isResultsShown, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1._isReviewComplete), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n		<button id=\"learnerassistant-revision\" class=\"buttons-action\" tabindex=\"0\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._buttons)),stack1 == null || stack1 === false ? stack1 : stack1._start)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n		<button id=\"learnerassistant-next\" class=\"buttons-action\" ";
  stack2 = helpers.unless.call(depth0, depth0.isInteractionsComplete, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " tabindex=\"0\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._buttons)),stack1 == null || stack1 === false ? stack1 : stack1._next)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n		<button id=\"learnerassistant-finish\" class=\"buttons-action\" ";
  stack2 = helpers.unless.call(depth0, depth0.isInteractionsComplete, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " tabindex=\"0\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._buttons)),stack1 == null || stack1 === false ? stack1 : stack1._finish)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n	</div>\r\n	<div class=\"learnerassistant-navigation-completion\" role=\"progressbar\">\r\n		<div class=\"learnerassistant-navigation-bar\" style=\"width:"
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1._percentageReviewedAssociateLearning)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\">\r\n		</div>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["learnerassistant-resultsView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				";
  stack1 = helpers.each.call(depth0, depth0.banks, {hash:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n					<div class=\"row clearfix\">\r\n						<div id=\"status\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"cell\"><div class=\"cell-inner\">";
  stack1 = helpers['if'].call(depth0, depth0._isReviewComplete, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div></div>\r\n							</div>\r\n						</div>\r\n						<div id=\"question\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"cell\"><div class=\"cell-inner\"><span class=\"mobile-only icon icon-question\"></span>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\r\n							</div>\r\n						</div>\r\n						<div id=\"tutorialcontent\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"cell\"><div class=\"cell-inner\"><span class=\"mobile-only icon icon-eye\"></span>";
  if (stack1 = helpers._countUnreviewedAssociatedLearning) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._countUnreviewedAssociatedLearning; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " left or alternatively you're at ";
  if (stack1 = helpers._countReviewedAssociatedLearning) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._countReviewedAssociatedLearning; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers._countTotalAssociatedLearning) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._countTotalAssociatedLearning; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "<span class=\"mobile-only icon icon-flag\"></span><span class=\"icon icon-star\"></span><span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.learnerAssistantSettings || depth0.learnerAssistantSettings),stack1 ? stack1.call(depth0, "settings._results._reviewed", options) : helperMissing.call(depth0, "learnerAssistantSettings", "settings._results._reviewed", options)))
    + "</span>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "<span class=\"mobile-only icon icon-flag\"></span><span class=\"icon icon-star-hollow not-mobile\"></span><span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.learnerAssistantSettings || depth0.learnerAssistantSettings),stack1 ? stack1.call(depth0, "settings._results._toReview", options) : helperMissing.call(depth0, "learnerAssistantSettings", "settings._results._toReview", options)))
    + "</span>";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n					<div class=\"row clearfix\">\r\n						<div id=\"status\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"not-mobile cell\"><div class=\"cell-inner\"><span class=\"mobile-only icon icon-flag\"></span>-</div></div>\r\n							</div>\r\n						</div>\r\n						<div id=\"question\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"cell\"><div class=\"cell-inner\"><span class=\"icon icon-question\"></span>-</div></div>\r\n							</div>\r\n						</div>\r\n						<div id=\"tutorialcontent\" class=\"col table-threetooone\">\r\n							<div class=\"table-threetoone-inner\">\r\n								<div class=\"cell\"><div class=\"cell-inner\"><span class=\"icon icon-eye\"></span>-</div></div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				";
  }

  buffer += "<div class=\"learnerassistant-resultsView-inner block-inner\">\r\n	<div class=\"learnerassistant-banner\">\r\n		<span class=\"banner-guided\">\r\n			<span><h5>Guided Learning</h5></span>\r\n		</span>\r\n	</div>\r\n	<div class=\"learnerassistant-resultsView-filter-container\">\r\n	</div>\r\n	<div class=\"content-container\">\r\n		\r\n		<div class=\"begin-instructions\">\r\n			<div class=\"begin-instructions-inner\">\r\n				<h4 class=\"title\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._start)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\r\n				<div class=\"body\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._start)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n			</div>\r\n		</div>\r\n	\r\n		<div class=\"content\">\r\n			<div class=\"row-content-header clearfix\">\r\n				\r\n				<div id=\"status\" class=\"col not-mobile table-threetooone\">\r\n					<div class=\"table-threetoone-inner\">\r\n					<span class=\"icon icon-flag\"></span><span>\r\n						<div class=\"cell col-header\"><div class=\"cell-inner\">";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._results)),stack1 == null || stack1 === false ? stack1 : stack1._status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span></div></div>\r\n					</div>\r\n				</div>\r\n				\r\n				<div id=\"question\" class=\"col not-mobile table-threetooone\">\r\n					<span class=\"icon icon-question\"></span>\r\n					<div class=\"table-threetoone-inner\">\r\n						<div class=\"cell col-header\"><div class=\"cell-inner\"><span>";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._results)),stack1 == null || stack1 === false ? stack1 : stack1._bank)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span></div></div>\r\n					</div>\r\n				</div>\r\n				\r\n				<div id=\"tutorialcontent\" class=\"col not-mobile table-threetooone\">\r\n					<span class=\"icon icon-eye\"></span>\r\n					<div class=\"table-threetoone-inner\">\r\n						<div class=\"cell col-header\"><div class=\"cell-inner\"><span>";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1._results)),stack1 == null || stack1 === false ? stack1 : stack1._associateLearnings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span></div></div>\r\n					</div>\r\n				</div>\r\n				\r\n			</div>\r\n			";
  stack2 = helpers['with'].call(depth0, depth0.options, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		</div>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["bottomnavigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"bottomnavigation-inner\">\r\n	\r\n</div>";
  });

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"page-level-progress-item drawer-item\">\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0._isVisible, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        	<h5 class=\"page-level-progress-item-title-inner\" aria-label=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n            ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </h5>\r\n            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                <div class=\"page-level-progress-indicator-bar\">\r\n                </div>\r\n            </div>\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0._isVisible, {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <a class=\"page-level-progress-item-title clearfix drawer-item-open\" href=\"#\" data-page-level-progress-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n        <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\r\n        ";
  }

function program6(depth0,data) {
  
  
  return "complete";
  }

function program8(depth0,data) {
  
  
  return "incomplete";
  }

function program10(depth0,data) {
  
  
  return "\r\n        </a>\r\n        ";
  }

function program12(depth0,data) {
  
  
  return "\r\n        </div>\r\n        ";
  }

  buffer += "<div class=\"page-level-progress-inner\" role=\"progressbar\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page-level-progress-navigation-completion\" role=\"progressbar\">\r\n	<div class=\"page-level-progress-navigation-bar\">\r\n	</div>\r\n</div>";
  });

this["Handlebars"]["templates"]["resources"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\r\n		";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n			<a href=\"#\" class=\"resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterAria)),stack1 == null || stack1 === false ? stack1 : stack1.allAria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.all)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n			</a>\r\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.if_collection_contains || depth0.if_collection_contains),stack1 ? stack1.call(depth0, depth0.resources, "_type", "document", options) : helperMissing.call(depth0, "if_collection_contains", depth0.resources, "_type", "document", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.if_collection_contains || depth0.if_collection_contains),stack1 ? stack1.call(depth0, depth0.resources, "_type", "media", options) : helperMissing.call(depth0, "if_collection_contains", depth0.resources, "_type", "media", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.if_collection_contains || depth0.if_collection_contains),stack1 ? stack1.call(depth0, depth0.resources, "_type", "link", options) : helperMissing.call(depth0, "if_collection_contains", depth0.resources, "_type", "link", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<a href=\"#\" class=\"resources-show-document\" data-filter=\"document\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterAria)),stack1 == null || stack1 === false ? stack1 : stack1.documentAria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.document)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n			</a>\r\n			";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<a href=\"#\" class=\"resources-show-media\" data-filter=\"media\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterAria)),stack1 == null || stack1 === false ? stack1 : stack1.mediaAria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.media)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n			</a>\r\n			";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<a href=\"#\" class=\"resources-show-link\" data-filter=\"link\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterAria)),stack1 == null || stack1 === false ? stack1 : stack1.linkAria)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n			</a>\r\n			";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<div class=\"resources-item drawer-item ";
  if (stack1 = helpers._type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		<a class=\"resources-item-open drawer-item-open\" target=\"_blank\" href=\"";
  if (stack1 = helpers._link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			<div class=\"drawer-item-title\">\r\n				<h5 class=\"drawer-item-title-inner\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\r\n			</div>\r\n			<div class=\"drawer-item-description\">\r\n				<div class=\"drawer-item-description-inner\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n			</div>\r\n		</a>\r\n	</div>\r\n	";
  return buffer;
  }

  buffer += "<div class=\"resources-inner\" role=\"complementary\">\r\n	<div class=\"resources-filter clearfix resources-col-";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.return_column_layout_from_collection_length || depth0.return_column_layout_from_collection_length),stack1 ? stack1.call(depth0, depth0.resources, "_type", options) : helperMissing.call(depth0, "return_column_layout_from_collection_length", depth0.resources, "_type", options)))
    + "\">\r\n		"
    + "\r\n		";
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_collection_contains_only_one_item || depth0.if_collection_contains_only_one_item),stack1 ? stack1.call(depth0, depth0.resources, "_type", options) : helperMissing.call(depth0, "if_collection_contains_only_one_item", depth0.resources, "_type", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	</div>\r\n	";
  stack2 = helpers.each.call(depth0, depth0.resources, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n      ";
  stack2 = ((stack1 = ((stack1 = depth0._trickle),stack1 == null || stack1 === false ? stack1 : stack1.button)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n      Continue\r\n    ";
  }

  buffer += "\r\n<a href=\"#\" class=\"trickle-button\">\r\n  <h6>\r\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._trickle),stack1 == null || stack1 === false ? stack1 : stack1.button), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n  </h6>\r\n</a>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["tutor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"tutor-title\">\r\n                    <h5 class=\"tutor-title-inner\">\r\n                    ";
  if (stack1 = helpers.feedbackTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.feedbackTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </h5>\r\n                </div>\r\n                ";
  return buffer;
  }

  buffer += "\r\n<div class=\"tutor\" role=\"dialog\">\r\n    <div class=\"tutor-toolbar\">\r\n        <a href=\"#\" class=\"tutor-done\">\r\n            <span class=\"tutor-icon-close icon icon-cross\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.closePopup)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\r\n        </a>\r\n    </div>\r\n    <div class=\"tutor-content\">\r\n        <div class=\"tutor-inner\">\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0.feedbackTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            <div class=\"tutor-body\">\r\n                <div class=\"tutor-body-inner\">";
  if (stack2 = helpers.feedbackMessage) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.feedbackMessage; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"tutor-shadow\"></div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["inspector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "Parent: ";
  if (stack1 = helpers._parentId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._parentId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\nClasses: ";
  stack1 = helpers['if'].call(depth0, depth0._classes, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, depth0._component, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  if (stack1 = helpers._classes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._classes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "<none>";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "Layout: ";
  if (stack1 = helpers._layout) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._layout; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\nShow progress: ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._pageLevelProgress),stack1 == null || stack1 === false ? stack1 : stack1._isEnabled), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\nProgress title: ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "true";
  }

function program9(depth0,data) {
  
  
  return "false";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers._component) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._component; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

  buffer += "\r\n<div class=\"inspector\">\r\n	<a href=\"#\" class=\"inspector-inner\" title=\"";
  stack1 = helpers['if'].call(depth0, depth0._parentId, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n		";
  stack1 = helpers['if'].call(depth0, depth0._component, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers._type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span class=\"inspector-id\">";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n	</a>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["rollay"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"rollay-inner\">\r\n	\r\n</div>";
  });

this["Handlebars"]["templates"]["searchBox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"drawer-item-open search\">\r\n	<div class=\"drawer-item-title\">\r\n		<h5 class=\"drawer-item-title-inner\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	</div>\r\n    <div class=\"list-item search\">\r\n        <input type=\"text\" placeholder=\"\" class=\"search-box\">\r\n        <a href=\"#\" class=\"start-search icon icon-search\"></a>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["searchResults"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"search-result\">\r\n        <div class=\"search-result-inner\">\r\n            <p class=\"no-results\">";
  if (stack1 = helpers.noResultsMessage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.noResultsMessage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.searchResults, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <div class=\"search-result\">\r\n            <div class=\"search-result-inner\">\r\n                ";
  stack1 = helpers['if'].call(depth0, depth0.visible, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <div class=\"relevance-indicator\">\r\n                    <div class=\"relevance-indicator-inner\" style=\"width:";
  if (stack1 = helpers.searchPercentage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.searchPercentage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "%\"></div>    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <a href=\"#\" class=\"result-title\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <div class=\"result-title content-hidden\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"search-results-inner\">\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.noResults, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["cover-item-indicator"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, depth0._assessment, {hash:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n				";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._assessment),stack1 == null || stack1 === false ? stack1 : stack1.isPassed), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				   <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._isComplete)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n				 ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				 	<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._isVisited)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n				 ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._isComplete)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n			";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, depth0._isVisited, {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._isVisited)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n			";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				";
  stack1 = helpers['if'].call(depth0, depth0._isLocked, {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._isLocked)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n				";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n					";
  stack1 = helpers['if'].call(depth0, depth0._accessibilityEnabled, {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n					<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._accessibilityEnabled)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n					";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n					<img class=\"accessibility-indicator-graphic\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._coverMenu),stack1 == null || stack1 === false ? stack1 : stack1._indicatorGraphic)),stack1 == null || stack1 === false ? stack1 : stack1._default)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\r\n					";
  return buffer;
  }

  buffer += "<div class=\"menu-item-indicator-inner\" role=\"menuitem\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = depth0._ariaLabels),stack1 == null || stack1 === false ? stack1 : stack1.menuItemPage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	<a href=\"#\" class=\"menu-item-indicator-graphic\">\r\n		";
  stack2 = helpers['if'].call(depth0, depth0._isComplete, {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		<span class=\"menu-item-indicator-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\r\n	</a>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["cover-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n	<a class=\"menu-item-route\" href=\"#/id/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, depth0._isVisited, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.menuViewButton)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		";
  if (stack2 = helpers.linkText) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.linkText; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	</a>\r\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "visited";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n	<div class=\"menu-item-assement-details\">\r\n		<div class=\"menu-item-assement-details-inner\">\r\n			<div><b>Assessment Info:</b></div>\r\n			<div><b>Completion status:</b> ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._assessment),stack1 == null || stack1 === false ? stack1 : stack1.isComplete), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div>\r\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._assessment),stack1 == null || stack1 === false ? stack1 : stack1.hasScore), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			<div><b>Passed status:</b> ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0._assessment),stack1 == null || stack1 === false ? stack1 : stack1.isPassed), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div>\r\n		</div>\r\n	</div>\r\n	";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "Complete";
  }

function program7(depth0,data) {
  
  
  return "Not Completed";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<div><b>Last Attempt Score:</b> "
    + escapeExpression(((stack1 = ((stack1 = depth0._assessment),stack1 == null || stack1 === false ? stack1 : stack1.scoreAsPercentage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</div>\r\n			";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "Passed";
  }

function program13(depth0,data) {
  
  
  return "Not Passed";
  }

  buffer += "<div class=\"menu-item-inner\">\r\n	<div class=\"menu-item-title\">\r\n		<h2 class=\"menu-item-title-inner\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\r\n	</div>\r\n	<div class=\"menu-item-body\">\r\n		<div class=\"menu-item-body-inner\">";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	</div>\r\n	<div class=\"menu-item-button\">\r\n		<span class=\"menu-item-duration\">Duration: ";
  if (stack1 = helpers.duration) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.duration; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\r\n	</div>\r\n	";
  stack1 = helpers.unless.call(depth0, depth0._isLocked, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	";
  stack1 = helpers['if'].call(depth0, depth0._assessment, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<div class=\"menu-item-spacer\"></div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["cover"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"menu-title\">\r\n				<h1 class=\"menu-title-inner\">\r\n					";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</h1>\r\n			</div>\r\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"menu-body\">\r\n				<div class=\"menu-body-inner\">\r\n					";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			</div>\r\n			";
  return buffer;
  }

  buffer += "<div class=\"menu-container\" role=\"region\">\r\n	<div class=\"menu-intro-screen\">\r\n		<div class=\"menu-intro-screen-inner\">\r\n			";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			<a href=\"#\" class=\"menu-reveal-items\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaRegions)),stack1 == null || stack1 === false ? stack1 : stack1.coverFlowMenuStart)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Start</a>\r\n		</div>\r\n	</div>\r\n	<div class=\"menu-item-container\" role=\"menu\">\r\n		<div class=\"menu-item-container-inner clearfix\">\r\n		"
    + "\r\n		</div>\r\n		<div class=\"menu-item-indicator-container\">		\r\n			<div class=\"menu-item-indicator-container-inner clearfix\">\r\n				"
    + "\r\n			</div>\r\n		</div>\r\n		<a href=\"#\" class=\"menu-item-control menu-item-control-left icon-controls-left icon\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.previous)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\r\n		<a href=\"#\" class=\"menu-item-control menu-item-control-right icon-controls-right icon\" role=\"button\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.next)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["article"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"article-title\">\r\n        <h2 class=\"article-title-inner\">\r\n            ";
  if (stack1 = helpers.displayTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </h2>\r\n    </div>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"article-body\">\r\n        <div class=\"article-body-inner\">\r\n            ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }

  buffer += "\r\n"
    + "\r\n<div class=\"article-inner block-container\">\r\n    "
    + "\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.displayTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    "
    + "\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["block"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"block-title\">\r\n        <h3 class=\"block-title-inner\">\r\n            ";
  if (stack1 = helpers.displayTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </h3>\r\n    </div>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"block-body\">\r\n        <div class=\"block-body-inner\">\r\n            ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }

  buffer += "\r\n"
    + "\r\n<div class=\"block-inner\">\r\n    "
    + "\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.displayTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    "
    + "\r\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <div class=\"component-container\">\r\n    </div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["buttons"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\r\n        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n        ";
  }

function program3(depth0,data) {
  
  
  return "\r\n    <div class=\"buttons-display\">\r\n        <div class=\"buttons-marking-icon icon display-none\">\r\n        </div>\r\n        <div class=\"buttons-display-inner\">\r\n        </div>\r\n    </div>\r\n    ";
  }

  buffer += "<div class=\"buttons-inner\">\r\n    <div class=\"buttons-cluster clearfix\">\r\n        ";
  stack1 = helpers.unless.call(depth0, depth0._shouldDisplayAttempts, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <button class=\"buttons-action\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._buttonAria)),stack1 == null || stack1 === false ? stack1 : stack1.submitLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.submit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\r\n        <button class=\"buttons-feedback\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._buttonAria)),stack1 == null || stack1 === false ? stack1 : stack1.disabledLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" disabled=\"true\">";
  stack2 = ((stack1 = ((stack1 = depth0._buttons),stack1 == null || stack1 === false ? stack1 : stack1.showFeedback)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\r\n    </div>\r\n    ";
  stack2 = helpers['if'].call(depth0, depth0._shouldDisplayAttempts, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["drawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"drawer-inner\" role=\"complementary\">\r\n	<div class=\"drawer-toolbar clearfix\">\r\n		<div class=\"drawer-back-button\">\r\n		<a href=\"#\" class=\"drawer-back icon icon-controls-small-left\" aria-label=\"";
  if (stack1 = helpers.previous) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		</a>\r\n		</div>\r\n		<div class=\"drawer-close-button\">\r\n		<a href=\"#\" class=\"drawer-close icon icon-cross\" aria-label=\"";
  if (stack1 = helpers.drawer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.drawer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		</a>\r\n		</div>\r\n	</div>\r\n	<div class=\"drawer-holder\">\r\n	</div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"drawer-item-open ";
  if (stack1 = helpers.className) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\r\n	<div class=\"drawer-item-title\">\r\n		<h5 class=\"drawer-item-title-inner\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\r\n	</div>\r\n	<div class=\"drawer-item-description\">\r\n		<div class=\"drawer-item-description-inner\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n	</div>\r\n</a>";
  return buffer;
  });

this["Handlebars"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\r\n"
    + "\r\n<div class=\"loading\">\r\n    <div class=\"loading-image\"><h3>Loading...</h3></div>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n"
    + "\r\n<div class=\"navigation-inner clearfix\" role=\"navigation\">\r\n    <a href=\"#\" class=\"navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" aria-label=\"";
  if (stack1 = helpers.previous) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.previous; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n    <a href=\"#\" class=\"navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" aria-label=\"";
  if (stack1 = helpers.navigationDrawer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.navigationDrawer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["notify"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\r\n    <div class=\"notify-popup-toolbar\">\r\n        <a href=\"#\" class=\"notify-popup-done\">\r\n            <div class=\"notify-popup-icon-close icon icon-cross\"></div>\r\n        </a>\r\n    </div>\r\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                <div class=\"notify-popup-icon\">\r\n                    <div class=\"icon";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.if_value_equals || depth0.if_value_equals),stack1 ? stack1.call(depth0, depth0._type, "prompt", options) : helperMissing.call(depth0, "if_value_equals", depth0._type, "prompt", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.if_value_equals || depth0.if_value_equals),stack1 ? stack1.call(depth0, depth0._type, "alert", options) : helperMissing.call(depth0, "if_value_equals", depth0._type, "alert", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\r\n                    </div>\r\n                </div>\r\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " icon-question";
  }

function program6(depth0,data) {
  
  
  return " icon-warning";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"notify-popup-title\">\r\n                    <h5 class=\"notify-popup-title-inner\">\r\n                    ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </h5>\r\n                </div>\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <div class=\"notify-popup-body\">\r\n                    <div class=\"notify-popup-body-inner\">";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n                </div>\r\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n                <div class=\"notify-popup-buttons\" role=\"button\">\r\n\r\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.if_value_equals || depth0.if_value_equals),stack1 ? stack1.call(depth0, depth0._type, "alert", options) : helperMissing.call(depth0, "if_value_equals", depth0._type, "alert", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                    ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  stack2 = ((stack1 = helpers.if_value_equals || depth0.if_value_equals),stack1 ? stack1.call(depth0, depth0._type, "prompt", options) : helperMissing.call(depth0, "if_value_equals", depth0._type, "prompt", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n                </div>\r\n                ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <a href=\"#\" class=\"notify-popup-button notify-popup-alert-button\">";
  if (stack1 = helpers.confirmText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.confirmText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n                    ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers.each.call(depth0, depth0._prompts, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <a href=\"#\" class=\"notify-popup-button notify-popup-prompt-button\" data-event=\"";
  if (stack1 = helpers._callbackEvent) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._callbackEvent; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.promptText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.promptText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\r\n                        ";
  return buffer;
  }

  buffer += "\r\n<div class=\"notify-popup notify-type-";
  if (stack1 = helpers._type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" role=\"alertdialog\">\r\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_value_equals || depth0.if_value_equals),stack1 ? stack1.call(depth0, depth0._type, "popup", options) : helperMissing.call(depth0, "if_value_equals", depth0._type, "popup", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    <div class=\"notify-popup-inner\">\r\n        <div class=\"notify-popup-content\">\r\n            <div class=\"notify-popup-content-inner\">\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0._showIcon, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                ";
  stack2 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"notify-shadow\"></div>";
  return buffer;
  });

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"notify-push-inner\" role=\"dialog\">\r\n	<div class=\"notify-push-title\">\r\n		<div class=\"notify-push-title-inner\">\r\n			";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n	<div class=\"notify-push-body\">\r\n		<div class=\"notify-push-body-inner\">\r\n			";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n</div>\r\n<a href=\"#\" class=\"notify-push-close\" role=\"button\">\r\n	<span class=\"icon icon-cross\"></span>\r\n</a>";
  return buffer;
  });

this["Handlebars"]["templates"]["page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <div class=\"page-title\" role=\"heading\">\r\n        <h1 class=\"page-title-inner\">\r\n            ";
  if (stack1 = helpers.displayTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.displayTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </h1>\r\n    </div>\r\n    ";
  return buffer;
  }

  buffer += "\r\n"
    + "\r\n<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0._accessibility),stack1 == null || stack1 === false ? stack1 : stack1._ariaLabels)),stack1 == null || stack1 === false ? stack1 : stack1.page)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    "
    + "\r\n    ";
  stack2 = helpers['if'].call(depth0, depth0.displayTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["shadow"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });