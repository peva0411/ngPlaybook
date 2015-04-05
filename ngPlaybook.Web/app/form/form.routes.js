(function () {
    'use strict';

    angular.module('app.form').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("form", { url: '/form', templateUrl: 'app/form/formInput.html' });
    }

})();