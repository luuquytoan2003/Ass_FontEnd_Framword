window.DangKiController=function($http,$scope){
    $scope.dataInput = {
        userName: '',
        passWord: '',
        email: '',
        role: '2'
    }
    $scope.onCreate = function () {
        let check = true;
        $scope.validate = {
            userName: false,
            passWord: false,
            email: false,
            role: false
        }
        if ($scope.dataInput.userName == '') {
            $scope.validate.userName = true;
            check = false
        }
        else if ($scope.dataInput.passWord == '') {
            $scope.validate.passWord = true;
            check = false
        }
        else if ($scope.dataInput.email == '') {
            $scope.validate.email = true;
            check = false
        }
        console.log($scope.dataInput.role);
        if (check) {
            
            var item = {
                tenND: $scope.dataInput.userName,
                passND: $scope.dataInput.passWord,
                quyenND: $scope.dataInput.role,
                emailND: $scope.dataInput.email
            }
            $http.post('http://localhost:3000/users', item).then(function (response) {
                $scope.check = true;
                alert('Đăng kí thành công');
            }).catch(error => {
                console.log(error);
            })
        }
    }
}