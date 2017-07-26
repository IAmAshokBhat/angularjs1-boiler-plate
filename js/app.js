'use strict';

angular.module('testApp', [
        'ngRoute'
    ], function($httpProvider) {

        // Use x-www-form-urlencoded Content-Type
        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        // $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        //$httpProvider.defaults.headers.common ['Authorization'] = 'Basic YWRtaW46UkByM00hbDM=';
        // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '',
                name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };


        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];



    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './views/home.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: './views/about.html',
                controller: 'MainCtrl'
            })
            .when('/unautorized', {
                templateUrl: './views/404.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: './views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/',
                controller: 'MainCtrl'
            });
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    })
    .run(function($rootScope) {
        //adding underscore to rootscope
        $rootScope._ = _;

    });