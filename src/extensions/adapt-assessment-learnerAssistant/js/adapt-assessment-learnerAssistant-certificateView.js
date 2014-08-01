/*
* adapt-learnerassistant-certificateView
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Oliver Foster <oliver.foster@kineo.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var RollayView = require('extensions/adapt-rollay/js/rollayView');

	var LearnerassistantCertificateView = RollayView.extend(
		{
			//VARIABLES
			certificate: {
	          window: undefined,
	          canvas: undefined,
	          context: undefined,
	          $container: undefined,
	          $image: undefined,
	          $composite: undefined,
	          $text: undefined,
	          onDrawPrint: false,
	          drawn: false,
	          imageLoaded: false
	      	}
		},
		{
			//UI
			className : "la-certificate",
			template : "learnerassistant-certificateView",
			internalOn: false,
			initialize: function() {
				
			},
			preRender: function() {
				if (this.parent.model.get('settings')._certificateTitle.length > 0) {
					this.parent.model.get('settings')._certificateTitleText = this.getCourseTitle() + " - " + this.parent.model.get('settings')._certificateTitle
				} else {
					this.parent.model.get('settings')._certificateTitleText = this.getCourseTitle() + this.parent.model.get('settings')._certificateTitle
				}
				this.parent.views['topnavigation'].reRender();
			},
			postRender: function() {
				this.onCertificateWindowLoaded();
			}
		},
		{
			//INTERACTION
			events : {
				'click .la-close': 'onCloseClick'
			},
			onCloseClick: function(event) {
				event.preventDefault();
				this.parent.certificate.hide();
			},
			onCertificateWindowLoaded: function() {
				if (!this.certificate.onDrawPrint) this.certificate.window = window;
				this.certificate.drawn = false;
				// for CSS give the new doc the same classes as parent
				if (this.internalOn) {
					var windowClasses = $('html', window.document).attr('class');
					$("html", this.certificate.window.document).addClass(windowClasses);
				}

				this.certificate.$container = $('.canvas-container', this.certificate.window.document);
				this.certificate.$image = $('.image-container', this.certificate.window.document);
				this.certificate.$composite = $('#composite-image', this.certificate.window.document);
				this.certificate.$text = $('.canvas-text', this.certificate.window.document);

				this.drawCertificate();
			},
			onCertificateDrawn: function(image, event){
				console.log("onCertificateDrawn");
				this.certificate.drawn = true;
				this.certificate.$image.html("");
				this.certificate.$image.append(image);
				this.certificate.$image.removeClass('hidden');

				/*var height = this.certificate.window.document.getElementById("background-image").naturalHeight;
				var width = this.certificate.window.document.getElementById("background-image").naturalWidth;
				var rheight = this.certificate.$image.height();
				var rwidth = this.certificate.$image.width();

				if (rwidth != width) {

					this.certificate.$image.find("img").css("width",  (rwidth) + "px"  );
					this.certificate.$image.find("img").css("height",  ((rwidth/width)*height) + "px"  );
				}*/



				if (this.certificate.onDrawPrint) {
					this.certificate.window.print();
					this.certificate.onDrawPrint = false;
				}
			}
		},
		{
			createCanvas: function(doc, $container, width, height) {
				var canvas = doc.createElement("canvas");
				$container.append(canvas); 

				if (typeof G_vmlCanvasManager != 'undefined') G_vmlCanvasManager.initElement(canvas); 

				canvas.id = "certificate-canvas";
				canvas.width = width; 
				canvas.style.width = "100%"; 
				canvas.height = height; 
				//canvas.style.height = height + 'px'; 

				return canvas;
	      	},
	      	getDate: function() {
				var dateString = "";
				var date = new Date();
				var day = date.getDate();
				var month = date.getMonth()+1;
				var year = date.getFullYear();

				dateString += day > 9 ? day : "0" + day; 
				dateString +=  " / ";
				dateString +=  month > 9 ? month : "0" + month;
				dateString +=  " / ";
				dateString += year;

				return dateString;
			},
			getUsername: function() {
				var username = require("extensions/adapt-contrib-spoor/js/scormWrapper").instance.getStudentName();
				if(!username) username = "Unknown learner";
				return username;
			},
			getCourseTitle: function() {
				return Adapt.course.get("title");
			},
	    },
	    {
	    	openCertificateWindow: function() {
	    		/*this.certificate = {
		          window: undefined,
		          canvas: undefined,
		          context: undefined,
		          $container: undefined,
		          $image: undefined,
		          $composite: undefined,
		          $text: undefined,
		          onDrawPrint: true,
		          drawn: false,
		          imageLoaded: false
		      	};*/
		      	this.certificate.onDrawPrint = true;

				var nuWindow = undefined;
				var thisHandle = this;
				function run() {
					var callback = _.bind(thisHandle.onCertificateWindowLoaded, thisHandle);
					var isIE = $("html").hasClass("ie");

					if(isIE && nuWindow.document.readyState === "complete") {
						callback(); // bit hacky, need to force callback in IE as load isn't called
					} else if (nuWindow.attachEvent) {
						nuWindow.attachEvent('onload', callback);
					} else {
						$(nuWindow).load(callback);
					}

					if(nuWindow) nuWindow.focus();

					//var event = new Event('onload');
					//nuWindow.dispatchEvent(event);
					//
					setTimeout(callback, 1000);
				}
				if (this.internalOn) {
					nuWindow = this.certificate.window = window.open("", "_blank");
					$(nuWindow.document).find("head").attr('id',"certificate").html('<base href="' + location.protocol + "//" + location.host + location.pathname + '" ><meta http-equiv="X-UA-Compatible" content="IE=edge">		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">		<meta content="utf-8" http-equiv="encoding">		<meta name="apple-mobile-web-app-capable" content="yes" />		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">		<title>Certificate</title>		<link rel="stylesheet" type="text/css" href="adapt/css/adapt.css">');
					$.get(location.protocol + "//" + location.host + location.pathname + "adapt/css/adapt.css",  function(data) {
						$(nuWindow.document).find("head").append("<style>"+data+"</style>");
						$(nuWindow.document).find("body").addClass('certificateLaunch certificateLaunch-print component').html('<div class="wrapper">			<img id="background-image" src="' + thisHandle.model.get("settings")._certificateGraphics._imageURL + '" class="hidden"/>			<div class="wrapper" class="hidden">				<div class="canvas-text hidden"><!-- used to grab the CSS style. remove hidden to for style --></div>				<div class="canvas-container hidden"></div>				<div class="image-container hidden"></div>			</div>		</div>');
						run();
					});
				} else {
					nuWindow = this.certificate.window = window.open("assets/certificate.html", "Certificate");
					run();
				}
				
				
			},
			drawCertificate: function() {
				// TODO: need to grab CSS/other external style
				var isIE = $("html").hasClass("ie");
				if (this.certificate.imageLoaded) {
					this.imageLoaded();
					return;
				}
				$(this.certificate.window.document.getElementById("background-image")).bind("load", _.bind(function () {
					this.imageLoaded();
				}, this));

			},
			imageLoaded: function() {
				this.certificate.imageLoaded = true;

				var height = this.certificate.window.document.getElementById("background-image").naturalHeight;
				var width = this.certificate.window.document.getElementById("background-image").naturalWidth;

				this.certificate.canvas = this.createCanvas(this.certificate.window.document, this.certificate.$container, width, height);
				this.certificate.context = this.certificate.canvas.getContext('2d');
				this.certificate.context.drawImage(this.certificate.window.document.getElementById("background-image"), 0, 0, width, height);


				// text
				var settings = this.model.get("settings");

				this.certificate.context.font = settings._certificateGraphics._textFont;
				this.certificate.context.fillStyle = settings._certificateGraphics._textColor;
				this.certificate.context.textAlign = "center";
				this.certificate.context.fillText(this.getCourseTitle(), settings._certificateGraphics._titleText._left, settings._certificateGraphics._titleText._top,  settings._certificateGraphics._titleText._maxwidth);
				this.certificate.context.fillText(this.getUsername(), settings._certificateGraphics._userText._left, settings._certificateGraphics._userText._top,  settings._certificateGraphics._userText._maxwidth);
				this.certificate.context.fillText(this.getDate(), settings._certificateGraphics._dateText._left, settings._certificateGraphics._dateText._top,  settings._certificateGraphics._dateText._maxwidth);
				
				// create composite image	
				var dataUrl = this.certificate.canvas.toDataURL();
				var img = this.certificate.window.document.createElement("img");
				$(img).bind("load", _.bind(this.onCertificateDrawn, this, img));
				img.setAttribute('src', dataUrl);

				var thisHandle = this;
				setTimeout(function() {
					if (thisHandle.certificate.drawn) return;
					img.setAttribute('src', dataUrl);
				}, 5000);
			}
	    }
	);



	return LearnerassistantCertificateView;
});