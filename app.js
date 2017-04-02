angular.module('flappyNews', [])
.controller('MainCtrl', [
	'$scope',
	($scope) => {
		$scope.test = "Hello World"
		$scope.pId = 0;
		function Post(title) {
			this.title = title
			this.upvotes = 0;
			this.id = $scope.pId
			this.link = $scope.link
			$scope.pId ++
		}
		$scope.posts = [
		]
		$scope.addPost = function() {
			if($scope.title){
				$scope.posts.push(new Post($scope.title, $scope.link))
				$scope.title = ''
				$scope.link = ''
			}
		}
		$scope.increment = function(post){
			post.upvotes ++
		}
		$scope.decrement = function(post){
			post.upvotes --
		}
	}
])