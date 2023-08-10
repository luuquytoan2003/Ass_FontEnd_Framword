var app = angular.module('myApp',['ngRoute']);
    app.filter('role',function(){
        return function(input){
            return input == 1 ? 'Admin' : 'User'
        }
    })

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'views/sanpham.html',
                controller: SanPhamController
            })
            .when('/dang-ki',{
                templateUrl: 'views/dangki.html',
                controller: DangKiController
            })
            .when('/dang-nhap',{
                templateUrl: 'views/dangnhap.html',
                controller: DangNhapController
            })
            .when('/admin',{
                templateUrl: 'views/admin.html',
            })
            .when('/admin/sanpham',{
                templateUrl: 'views/adminSanpham.html',
                controller: SanPhamController
            })
            .when('/admin/nguoidung',{
                templateUrl: 'views/adminNguoiDung.html',
                controller:UserController
            })
    })
