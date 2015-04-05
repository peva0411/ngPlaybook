(function() {
    'use strict';
    angular.module('app.physics')
        .controller('movingObjectController', MovingObjectController);

    MovingObjectController.$inject = [];

    function MovingObjectController() {

        var vm = this;

        vm.box1 = null;
        vm.box2 = null;

        vm.kick = function() {
            vm.box1.applyForce({ x: 0.1, y: -0.2 });
            vm.box2.applyForce({ x: -0.1, y: -0.2 });

        };

        vm.resize = function(value) {
            vm.box1.geometry.width = value;
            vm.box1.geometry.height = value;
            vm.box1.view = null;
            vm.box1.recalc();
        };

    }

})();
