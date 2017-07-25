define( ["text!./cust-comp-ng.html",
	'angular'], function (template,angular){
	"use strict";
	  var $injector = angular.injector( ['ng'] );
      var $http = $injector.get( "$http" );


	return {
		componentName: "custComp",
		restrict: "E",
		template: template,
		link: function( scope, element, attrs ){
      		scope.title="the title is something";
      		scope.likes=0;
      		scope.showSocial=false;

      		scope.qlikLike=function(){
      			if( scope.likes ===0 )
      				scope.likes++;
      		};
      		scope.qlikSocial=function()
      		{
      			
      			if(!scope.showSocial)
      				scope.showSocial=true;
      			else
      				scope.showSocial=false;

      		};

      		scope.refresh=function(){
      			scope.showSocial=false;
      		};
        }	
	};

});