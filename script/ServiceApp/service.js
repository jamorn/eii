var AppModule = angular.module("AppModule", ['ngResource']) // ["ui.bootstrap"]
    AppModule.factory("ServiceApp", ["$http", "$q",
function ($http, $q) {


    var headers = {
        // 'Authorization': 'Basic ' + btoa(username + ":" + password),
       'Access-Control-Allow-Origin': true,
       'Content-Type': 'application/json; charset=utf-8',
       "X-Requested-With": "XMLHttpRequest"
         }
    var svc = {};
    var deferred = $q.defer();
    
    /**************************************************** fuel  *******************************************************/
    // get_oil
    svc.get_oil = function (_data) {
        var deferred = $q.defer();// https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec
        $http({ 
            method: 'POST', // มีสองอย่าง method: 'POST', หรือ method: 'GET',
            url: 'https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec', data: _data }).then(deferred.resolve, deferred.reject)
            ,headers;
        return deferred.promise;
    };
    
    return svc;
}]);