window.UserController = function($scope,$http){
    $http.get('http://localhost:3000/users')
        .then(function(response){
            $scope.listU = response.data
        })
    $scope.init = function(){
        $scope.dataInput = {
            userName: '',
            passWord: '',
            email: '',
            role: ''
        }
    }
    $scope.init();
    $scope.onCreate = function(){
        let check = true;
        $scope.validate = {
            userName: false,
            passWord: false,
            email: false,
            role: false
        }
        if($scope.dataInput.userName == ''){
            $scope.validate.userName = true;
            check = false
        }
        else if($scope.dataInput.passWord == ''){
            $scope.validate.passWord = true;
            check = false
        }
        else if($scope.dataInput.email == ''){
            $scope.validate.email = true;
            check = false
        }
        else if($scope.dataInput.role ==''){
            $scope.validate.role = true;
            check = false
        }
        console.log($scope.dataInput.role);
        if(check){
            
            var item = {
                tenND: $scope.dataInput.userName,
                passND: $scope.dataInput.passWord,
                quyenND: $scope.dataInput.role,
                emailND: $scope.dataInput.email
            }
            $http.post('http://localhost:3000/users',item).then(function(response){

            }).catch(error => {
                console.log(error);
            })
        }
    }
    $scope.confirmUpdate = function (id) {
        $scope.id = id;
        console.log(id);
        $http.get(`http://localhost:3000/users/${id}`)
            .then(response => {
                $scope.dataInput.userName = response.data.tenND,
                    $scope.dataInput.passWord = response.data.passND,
                    $scope.dataInput.email = response.data.emailND,
                    $scope.dataInput.role = response.data.quyenND
            })
    }
    $scope.onUpdate = function () {
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
        else if ($scope.dataInput.role == '') {
            $scope.validate.role = true;
            check = false
        }
        //console.log(check);
        if (check) {
            var item = {
                tenND: $scope.dataInput.userName,
                passND: $scope.dataInput.passWord,
                quyenND: $scope.dataInput.role,
                emailND: $scope.dataInput.email
            }
            $http.put(`http://localhost:3000/users/${$scope.id}`, item)
                .then(response => {
                    $scope.listSP = response.data
                })
        }
    }



    $scope.confirmDelete = function (id) {
        $scope.idDel = id
        console.log(id);
    }
    $scope.onDelete = function () {
        $http.delete(`http://localhost:3000/users/${$scope.idDel}`).then(response => { })
    }
}