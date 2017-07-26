'use strict';

angular.module('testApp').factory('backenddataservice', function($http, $q) {

    var backenddata = {};
    var backendHost = '';

    var oneOffTransform = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        transformRequest: false
    };

    return backenddata;
});