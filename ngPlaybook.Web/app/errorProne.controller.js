(function() {
    'use strict';
    angular.module('app').controller('errorProneController', errorProneController);

    errorProneController.$inject = ['alerting'];

    function errorProneController(alerting) {

        var model = this;

        model.alertTypes = alerting.alertTypes;
        model.alertType = alerting.alertTypes[0];
        model.alertMessage = "";

        model.createAlert = function() {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertMessage = "";
            model.alertType = alerting.alertTypes[0];
        };

    }

})();