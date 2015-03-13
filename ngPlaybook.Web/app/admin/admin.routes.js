(function() {
    'use strict';

    angular.module('app.admin').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("admin", { url: '/admin', templateUrl: 'app/admin/admin.html' });
    }

})();
