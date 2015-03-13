(function() {
    'use strict';
    angular.module('ui').directive('otfRating', otfRating);


    function otfRating() {
        return {
            scope: {
                value:"=",
            },

            link: function (scope, element, attributes) {

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");

                scope.$watch("value", function(newValue) {
                    element.empty();
                    for (var i = 0; i < newValue; i++) {
                        element.append("<button class='btn btn-default btn-xs'><span class='glyphicon glyphicon-star'/></button>");
                    }
                });


                element.on("click", function() {
                    scope.$apply(function() {
                        if (scope.value < max) {
                            scope.value += 1;
                        } else {
                            scope.value = min;
                        }
                    });

                });
            }
        };
    };

})();
