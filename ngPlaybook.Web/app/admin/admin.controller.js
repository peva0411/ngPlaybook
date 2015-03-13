(function() {
    'use strict';
    angular.module('app.admin').controller('adminController', Admin);

    Admin.$inject = [];

    function Admin() {
        var vm = this;

        vm.employees = [{ firstName: "Phil", lastName: "Evans", rating: 1 },
                        {firstName: "Dempsey", lastName:"Dixon", rating:4}];

        vm.promote = promote;

        function promote(employee) {
            for (var i = 0; i < vm.employees.length; i++) {
                if (vm.employees[i] === employee) {
                    vm.employees.splice(i, 1);
                }
            }
        }
    }

})();
