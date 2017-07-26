angular.module('testApp').controller('LoginCtrl', ["$scope", "$rootScope", "$http", "$location", "backenddataservice", "$timeout",
    function($scope, $rootScope, $http, $location, backenddataservice, $timeout) {


        function init() {
            console.log("Init function login");
        };
        init();

    }
]);