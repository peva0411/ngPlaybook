﻿(function() {
    'use strict';
    angular.module('common').config(config);

    config.$inject = ['$provide'];

    function config($provide) {
        $provide.decorator("$interpolate", function($delegate, $log) {

            var serviceWrapper = function () {
                var bindingFunction = $delegate.apply(this, arguments);

                if (angular.isFunction(bindingFunction) && arguments[0]) {
                    return bindingWrapper(bindingFunction, arguments[0].trim());
                }

                return bindingFunction;
            };

            var bindingWrapper = function(bindingFunction, bindingExpression) {
                return function() {
                    var result = bindingFunction.apply(this, arguments);

                    var trimmedResult = result.trim();
                    var log = trimmedResult ? $log.info : $log.warn;
                    log.call($log, bindingExpression + "=" + trimmedResult);

                    return result;
                };
            };

            angular.extend(serviceWrapper, $delegate);

            return serviceWrapper;
        });
    };

})();