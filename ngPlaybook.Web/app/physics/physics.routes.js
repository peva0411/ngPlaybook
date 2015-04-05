(function() {
    'use strict';

    angular.module('app.physics').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("physics", { url: '/physics', templateUrl: 'app/physics/physicsMain.html' });
    }

})();