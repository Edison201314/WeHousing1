/**
 * Created by xinxie on 1/14/17.
 */


    var app = angular.module('myRoom', []);

    app.filter('paging',function(){
        return function(apartments,start){

            return apartments.slice(start);
        };
    });

    app.controller('RoomController',
        function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/controller/apartment.json'
        }).success(function (data,status,headers,config
       ){
        $scope.apartments = data.apartments;

            $scope.showByPopular=function(){

                $scope.$orderBy = 'popularity';
            }

            $scope.showByPrice=function(){

                $scope.$orderBy = 'price';
            }

    }).error(function (data,status,headers,config) {
        console.log(data);
    });


        $scope.dataNum =  $scope.apartments[0].name.length;
        $scope.pages = Math.ceil($scope.dataNum/5);
        $scope.pageNum = [];

        for(var i=0;i<$scope.pages;i++){
                 $scope.pageNum.push(i);
                 }

        $scope.currentPage = 0;
        $scope.listsPerPage = 5;

        $scope.setPage = function(num){
                $scope.currentPage = num;
        }

        $scope.prevPage = function(){
                     if($scope.currentPage > 0){
                         $scope.currentPage--;
                          }
                   }
        $scope.nextPage = function(){
                    if ($scope.currentPage < $scope.pages-1){
                               $scope.currentPage++;
                           }
                  }
    });









