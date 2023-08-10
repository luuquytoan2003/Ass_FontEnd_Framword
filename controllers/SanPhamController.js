window.SanPhamController = function($scope,$http){
    $http.get('http://localhost:3000/products')
        .then(response =>{
            $scope.listSP = response.data
        })
    $scope.init = {
        productName: '',
        productType: '',
        productPrice: '',
        productDescription: ''
    }
    //--------------------create------------
    $scope.onCreate = function(){
        let check = true;
        $scope.validate = {
            productName: false,
            productType: false,
            productPrice: false,
            productDescription: false,
            productValuePrice: false
        }
        if (!$scope.init.productName || !$scope.init){
            check = false;
            $scope.validate.productName = true;
        }
        if (!$scope.init.productPrice){
            check = false;
            $scope.validate.productPrice = true;
        }
        else if ($scope.init.productPrice <= 1000){
            check = false;
            $scope.validate.productValuePrice = true;
        }
        if (!$scope.init.productType){
            check = false;
            $scope.validate.productType = true;
        }
        if (!$scope.init.productDescription){
            check=false;
            $scope.validate.productDescription = true;
        }
        //console.log(check);
        if(check){
            $scope.newItem = {
                tenSP: $scope.init.productName,
                loaiSP: $scope.init.productType,
                giaSP: $scope.init.productPrice,
                motaSP: $scope.init.productDescription
            }
            $http.post('http://localhost:3000/products', $scope.newItem)
                .then(response => {
                    $scope.listSP = response.data
                })
        }
    }
    //------------------update--------------
    $scope.confirmUpdate = function(id){
        $scope.id=id;
        console.log(id);
        $http.get(`http://localhost:3000/products/${id}`)
            .then(response => {
                $scope.init.productName = response.data.tenSP,
                $scope.init.productDescription = response.data.motaSP,
                $scope.init.productType = response.data.loaiSP,
                $scope.init.productPrice = response.data.giaSP
            })
    }
    $scope.onUpdate = function(){
        let check = true;
        $scope.validate = {
            productName: false,
            productType: false,
            productPrice: false,
            productDescription: false,
            productValuePrice: false
        }
        if (!$scope.init.productName || !$scope.init) {
            check = false;
            $scope.validate.productName = true;
        }
        if (!$scope.init.productPrice) {
            check = false;
            $scope.validate.productPrice = true;
        }
        else if ($scope.init.productPrice <= 1000) {
            check = false;
            $scope.validate.productValuePrice = true;
        }
        if (!$scope.init.productType) {
            check = false;
            $scope.validate.productType = true;
        }
        if (!$scope.init.productDescription) {
            check = false;
            $scope.validate.productDescription = true;
        }
        //console.log(check);
        if (check) {
            var newItem = {
                tenSP: $scope.init.productName,
                loaiSP: $scope.init.productType,
                giaSP: $scope.init.productPrice,
                motaSP: $scope.init.productDescription
            }
            $http.put(`http://localhost:3000/products/${$scope.id}`, newItem)
                .then(response => {
                    $scope.listSP = response.data
                })
        }
    }
    //-------------------delete---------------
    $scope.confirmDelete = function(id){
        $scope.idDel = id
        console.log(id);
    }
    $scope.onDelete = function(){
        $http.delete(`http://localhost:3000/products/${$scope.idDel}`).then(response =>{})
    }
    
    
}