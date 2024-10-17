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
    // SAP from API
    svc.get_oil = function (_data) {
        var deferred = $q.defer();// https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec
        $http({ 
            method: 'POST', 
            url: 'https://script.google.com/macros/s/AKfycbzDwgi0TvnvzmyailYwHfsW58AjdxcMya8m1YPOomzEhg3cpNEgMsURv1aSfCyPboXL/exec', data: _data }).then(deferred.resolve, deferred.reject)
            ,headers;
        return deferred.promise;
    };
    
    return svc;
}]);
/* 
url นี้เรียกผ่าน browser ได้ปกติ หลังจากเรียกแล้ว url จะถูกแปลงเป็นอีกชื่อนึง
https://script.google.com/macros/s/AKfycbzDwgi0TvnvzmyailYwHfsW58AjdxcMya8m1YPOomzEhg3cpNEgMsURv1aSfCyPboXL/exec
*/ 