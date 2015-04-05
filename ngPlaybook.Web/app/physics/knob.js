(function() {
    'use strict';
    angular.module('app.physics').directive('knob', function() {

        return {
            scope: {
                min: '@',
                max: "@",
                width: "@",
                change: '&',
            },
            link: function(scope, element) {
                element.knob({
                    min: scope.min,
                    max: scope.max,
                    width: scope.width,
                    change: function (value) {
                        scope.$apply(function() {
                            scope.change({ 'value': value });
                        });
                    }
                });
            }
        };
    });
})();