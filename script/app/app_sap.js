var AppModule = angular.module("AppModule", ["ui.bootstrap"])



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
        
        /**************************************************** SAP  *******************************************************/
        // SAP DATA FROM GOOGLE SHEET
        svc.get_sap = function (_data) { // ใน c# หล้งบ้านจะมี function get_sap ให้เรียกใช้งาน อยากได้อะไรส่งกลับมาก็ไปเขียน Linq เอาไว้ในนั้น
            var deferred = $q.defer();
            $http({ 
                method: 'GET', // ถ้าใช้ method: 'GET' จะได้ status code 302 ซึ่งไม่มีอะไรเลยโล่งๆ
                url: 'https://script.google.com/macros/s/AKfycbzDwgi0TvnvzmyailYwHfsW58AjdxcMya8m1YPOomzEhg3cpNEgMsURv1aSfCyPboXL/exec', data: _data }).then(deferred.resolve, deferred.reject)
                ,headers;
            return deferred.promise;
        };
        /* 
url นี้เรียกผ่าน browser ได้ปกติ หลังจากเรียกแล้ว url จะถูกแปลงเป็นอีกชื่อนึง
https://script.google.com/macros/s/AKfycbzDwgi0TvnvzmyailYwHfsW58AjdxcMya8m1YPOomzEhg3cpNEgMsURv1aSfCyPboXL/exec
*/ 
        return svc;
    }]);

    AppModule.controller("ctrlsap", function ($scope,ServiceApp,$uibModal) {
        $scope.Const1 = 0.0042;
        $scope.test = "test";
        $scope.xxx = function () {
         console.log("xxxx")
    
        }

        sap_init($scope, ServiceApp);
    }
    
    );
function sap_init($scope, ServiceApp){
    ServiceApp.get_sap().then(function (res) { }, function () {
        console.log(res);

        alert("ไม่สามารถอ่านข้อมูล ServiceApp.get_sap() ได้");
    });
}
