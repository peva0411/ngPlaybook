(function() {
    'use strict';

    angular.module('common').factory('alerting', alerting);

    alerting.$inject = ['$timeout'];

    function alerting($timeout) {

        var currentAlerts = [];
        var alertTypes = ["success", "info", 'warning', 'danger'];

        var service = {
            currentAlerts: currentAlerts,
            addAlert: addAlert,
           addWarning: addWarning,
           addDanger: addDanger,
           addInfo: addInfo,
           addSuccess: addSuccess,
           alertTypes: alertTypes,
           removeAlert: removeAlert
        };

        return service;


        function addAlert(type, message) {

            var alert = { type: type, message: message };
            currentAlerts.push(alert);

            $timeout(function() {
                removeAlert(alert);
            }, 5000);
        };

        function addWarning(message) {
            addAlert('warning', message);
        };

        function addDanger(message) {
            addAlert("danger", message);
        }

        function addInfo(message) {
            addAlert("info", message);
        }

        function addSuccess(message) {
            addAlert("success", message);
        }

        function removeAlert(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        }

    };
})();
