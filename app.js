(function(){
'use strict' 
angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    
    $scope.foodItem='';
    $scope.msg='';
    
    
  $scope.foodCount= function(){
      
     $scope.itemss= $scope.foodItem.split(',');
      
      if ($scope.itemss.length <= 3 && $scope.itemss !=''){
        $scope.msg="Enjoy!";
         
      }
      else if ($scope.itemss.length>3){
        $scope.msg="Too Much!";
                  
      }
      else if ($scope.itemss=='') {
        $scope.msg="Please enter data first";
      }
  }
  
  
    
}
    
    
    
  
})();