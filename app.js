
var myApp=angular.module("myApp",["ngRoute"]);

 myApp.config(function($routeProvider){
    
      $routeProvider
         .when("/",{
                templateUrl:"welcome.html",
                controller:"appCtrl"
         })
         .when("/country",{
                templateUrl:"countryList.html",
                controller:"ctrl_1"

         })
         .when("/country/:countryName",{
               templateUrl:"showPage.html",
               controller:"ctrl_1"
      })
 });

 myApp.service("countryService",function($http){

         this.getList=function(){
             
               return $http({
                     method:"get",
                     url:"countries.json"
                     
               })
         };
     
      
 });

 myApp.controller("appCtrl",function($scope){
   
    
 });

myApp.controller("ctrl_1",function($scope,countryService,$routeParams){
    
        countryService.getList().then(function(response){
               $scope.ctrList=response.data;
        });
       console.log($routeParams.countryName);
       countryService.getList().then(function(response){
           
               $scope.newCountry=response.data.filter(function(entry){
                    return entry.name=== $routeParams.countryName;
               });
       });
           
       
    
        
});