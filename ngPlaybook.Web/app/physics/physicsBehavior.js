(function() {
    'use strict';
    angular.module('app.physics').directive('physicsBehavior', function(Physics) {
        return {
            restrict: "E",
            require: "^physicsCanvas",
            scope: {
                name: "@"
            },
            link: function(scope, element, attributes, canvas) {
                canvas.add(Physics.behavior(scope.name));
            }
        };
    });
})();