window.DangNhapController = function($scope,$http){
    $scope.valueInput = function(){
        $scope.init = {
            userName: '',
            passWord: ''
        }
    }
    $scope.valueInput();
    $scope.login = function () {

        let check = true;
        $scope.validate = {
            userName: false,
            passWord: false
        }
        if ($scope.init.userName == '') {
            check = false;
            $scope.validate.userName = true;
        }
        if ($scope.init.passWord == '') {
            check = false;
            $scope.validate.passWord = true;
        }
        if (check) {
            var dem =0 ;
            $scope.Users.forEach(element => {
                if (element.tenND == $scope.init.userName && element.passND == $scope.init.passWord) {
                    if(element.quyenND == '1'){
                        return window.location.href = '#!/admin';
                    }
                    else if(element.quyenND == '2'){
                        return window.location.href = '#!/';
                    }
                }else{
                    dem++;
                }
                
            });
            if(dem > 2){
                alert('sai tài khoản mật khẩu');
            }
        }
    }
    $http.get('http://localhost:3000/users')
        .then(function(response){
            console.log($scope.valueInput.userName);
            $scope.Users = response.data;
            $scope.login();
        })
}
