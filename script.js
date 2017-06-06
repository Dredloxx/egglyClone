angular.module('myApp',[])
.controller('MainCtrl',['$scope',function($scope){

  $scope.categories = [
    {"id": 0,"type":"Development"},
    {"id": 1,"type":"Design"},
    {"id": 2,"type":"Exercise"},
    {"id": 3,"type":"Humor"}
  ];

  $scope.bookmarks = [
    {"id":0,"title":"AngularJS","url":"http://angularjs.org","category":"Development"},
		{"id":0,"title":"Design Stuff","url":"http://angularjs.org","category":"Design"},
		{"id":0,"title":"Exercise Stuff","url":"http://angularjs.org","category":"Exercise"},
		{"id":0,"title":"Memes","url":"http://angularjs.org","category":"Humor"}
  ];

	$scope.currentCategory=null;

	function setCurrentCategory(category)
	{
		$scope.currentCategory = category;
	}

  function isCurrentCategory(category)
  {
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  }

	$scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;





         $scope.custom = true;
         $scope.toggleCustom = function() {
             $scope.custom = $scope.custom === false ? true: false;
         };


}]);
