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
		{"id":1,"title":"Design Stuff","url":"http://angularjs.org","category":"Design"},
		{"id":2,"title":"Exercise Stuff","url":"http://angularjs.org","category":"Exercise"},
		{"id":3,"title":"Memes","url":"http://angularjs.org","category":"Humor"}
  ];

	$scope.currentCategory=null;

	function setCurrentCategory(category)
	{
		$scope.currentCategory = category;

    cancelCreating();
    cancelEditing();
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




/*
  Create Update Delete
*/
function resetCreateForm()
{
  $scope.newBookmark={
      title:'',
      url:'',
      category:$scope.currentCategory
  }
}

function createBookmark(bookmark){
  bookmark.id = $scope.bookmarks.length + 1;
  $scope.bookmarks.push(bookmark);

  resetCreateForm();
}

$scope.createBookmark = createBookmark;


/*
/ Creating and Editing States
*/

$scope.isCreating = false;
$scope.isEditing = false;

function startCreating() {
  $scope.isCreating = true;
  $scope.isEditing = false;
  resetCreateForm();
}

function cancelCreating() {
  $scope.isCreating = false;
}

function startEditing() {
  $scope.isCreating = false;
  $scope.isEditing = true;
}

function cancelEditing(){
  $scope.isEditing = false;
}

function shouldShowCreate(){
   return $scope.currentCategory && !$scope.isEditing;
}

function shouldShowEditing(){
  return $scope.isEditing && !$scope.isCreating;
}

$scope.startCreating = startCreating;
$scope.cancelCreating = cancelCreating;
$scope.startEditing = startEditing;
$scope.cancelEditing = cancelEditing;
$scope.shouldShowEditing = shouldShowEditing;
$scope.shouldShowCreate = shouldShowCreate;

}]);
