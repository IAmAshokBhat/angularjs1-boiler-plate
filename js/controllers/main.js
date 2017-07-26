angular.module('testApp').controller('MainCtrl', ["$scope", "$rootScope", "$http", "$location", "backenddataservice", "$timeout",
    function($scope, $rootScope, $http, $location, backenddataservice, $timeout) {


        function init() {
            console.log("Init function Main");
        };
        init();

    }
]);