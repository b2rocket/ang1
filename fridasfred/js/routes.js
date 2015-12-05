angular.module('NoteWrangler')
  .config(function($routeProvider)
  {
    $routeProvider.when('/shop',
    {
      templateUrl:'/template/shop.html',
    })
    .when('#/basket',
    {
      templateUrl: '/template/basket.html',
    })
    .otherwise({ redirectTo: '/'});
  });
