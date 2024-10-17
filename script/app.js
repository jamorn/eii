var AppModule = angular.module("AppModule", ["ui.bootstrap"])

AppModule.controller("ctrl2", function ($scope,$http,$uibModal) {
  // https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec
/*   $http.get('https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec').then(
      function successCallback(res){
        //  $scope.give_away = res.data.give_away;
          console.log("data น้ำมัน =>");
          console.log(res.data);
         $scope.fuel=res.data.fuel;
      },
      function errorCallback(res){
          console.log(" Unable to perform get request");
      }
  ); */
  $scope.fuel=[]

  $scope.modal1 = function (msize) {
     //alert(msize);
    
    var modalsize=(msize == null)? 'size90':msize;
    var objnew = {};
    objnew.chk = "add";
    objnew.title = "Modal size "+msize;
    
   
    // var parentElem = parentSelector ? 
    //   angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        backdrop: 'static',
        keyboard: false,
        backdropClass: 'fadeInRight', // ใส่ชื่อ style ที่ต้องการอ้างถึง 
     //   windowClass: 'fadeInRight',// animate.css
        templateUrl: 'script/modal/modal.html?_=' + new Date() + '', // แบบนี้เรียกได้ 
        controller: 'ctrl_modal',
       // size: 'lg', // ถ้า bootstrap ใช้ แบบนี้
        size: modalsize,
        // appendTo: parentElem,
        resolve: {
            items: function () {
                return objnew;
            }
        }
    });

    modalInstance.result.then(function (resolvedResponse) {
        // $scope.selected = selectedItem;


        if ("บันทึกข้อมูลเรียบร้อย" == resolvedResponse) {
          console.log("บันทึกข้อมูลเรียบร้อย")
        }
       
       // alert(selectedItem);
    }, function (resolvedResponse) {
       // swal(resolvedResponse); // กดปุ่ม close จะทำงานแสดงข้อความ cancel
        // $log.info('Modal dismissed at: ' + new Date());
    });
};

}

);

AppModule.controller("ctrl_modal", function ($scope,$uibModalInstance,items) {
  $scope.data=items;
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
// AppModule.controller("eiictrl", function ($scope, ServiceApp, $uibModal, $timeout) {
AppModule.controller("eiictrl", function ($scope, ServiceApp) {

 // var xxx =ServiceApp.get_oil()
  //console.log("xxx =",xxx)


    async function makeRequest() {
        try {
          const response = await fetch('script/data.json');         
         console.log('status code: ', response.status); // 👉️ 200
         console.log("ข้อมูลคือ :")
      
      
      
         if (!response.ok) {
            console.log(response);
            throw new Error(`Error! status: ${response.status}`);
          }
      
      
      
         const result = await response.json();
         console.log("data=",result)
          return result;
          
        } catch (err) {
          console.log(err);
        }
      }
      
      
      
      //JSON.stringify(myResult)
    //   makeRequest();
   //    $scope.test= makeRequest();
 //console.log("$scope.test :",$scope.test)
 

 /// test cal from googleAPI
 async function makeRequestGoogleAPI() {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyP3MpJsFigZAjWaMw4FxNTTdxbuJ5D-0QxsnnpL2glYKsStdejzGv3_nt2JCZ6SkFI0A/exec');
  
  
  
     console.log('status code: ', response.status); // 👉️ 200
     console.log("ข้อมูลจาก google คือ :")
  
  
  
     if (!response.ok) {
        console.log(response);
        throw new Error(`Error! status from google: ${response.status}`);
      }
  
  
  
     const result = await response.json();
     console.log("data from google=",result)
      return result;
      
    } catch (err) {
      console.log(err);
    }
  }

//  makeRequestGoogleAPI()
////////////////////////////
 $scope.alldata = getdata();

/*     ServiceApp.get_oil().then(function (res) {
        console.log("res.data in ServiceApp.get_dashboard_action_monitering " + res.data);
        $scope.data =( res.data);
        console.log($scope.data)
    }, function () {
        alert('Fail to data ');
    }); */

   // $scope.data=get_oil()

 // https://script.google.com/macros/s/AKfycbwsxg-xzCVFkNQAftTcLkKbMtAUrmT3TWk8nC_I4nmXBYiyd3AO5mJ83e_nnfjHDrRu/exec
})
AppModule.controller("ctrl_sap", function ($scope,$uibModal) {
  $scope.sapdata=ibom();
  })
  