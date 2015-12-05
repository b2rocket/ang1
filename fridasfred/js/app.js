(function() {



  var app = angular.module('shopStore', ['ngRoute', 'ngResource']);
  app.config(function($routeProvider, $locationProvider, $resourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'template/welcome.html'
      })
      .when('/shop', {
        templateUrl: 'template/shop.html'

      })
      .when('/shop/product:id', {
        templateUrl: 'template/product.html'

      })
      .when('/home', {
        templateUrl: 'template/welcome.html'

      })
      .when('/blog', {
        templateUrl: 'template/welcome.html'

      })
      .when('/about', {
        templateUrl: 'partials/_about.html'

      })

    .when('/login', {
        templateUrl: 'template/product.html'
          /* neue templates */
      })
      .when('/add', {
        controller: 'Add',
        templateUrl: 'template/add.html'
      })
      .when('/single/:id', {
        controler: 'SingleC',
        templateUrl: 'template/single.html'
      })
      .when('/table', {
        controler: 'Table',
        templateUrl: 'template/table.html'
      })

      .when('/todo', {
        controler: 'ToDoController',
        templateUrl: 'template/todo.html'
      })

    /*ENDE neue TEMPLATES*/

    .otherwise({
      redirectTo: '/',
      templateUrl: 'template/welcome.html'
    });

    $locationProvider /*entfernt den # in der URL, benötigt zusätzlich Base parameter*/
      .html5Mode(true);
  });

  app.controller('StoreController', function() {
    this.menuItems = menuItem;
  });

  app.controller('ProductController', function() {
    this.productItems = productItem;
  });

  /* eigenes ab hier*/
  app.controller('ContactController', function($resource) {
    this.contacts = contactItem;
  });

  app.controller('ToDoController', function($scope, $resource) {
    this.toDoLists = toDoList;
  });
  app.controller('Table', function($resource) {
    this.contacts = contactItem;
  });

  app.controller('Add', function($scope, $resource, $location) {
    this.contacts = contactItem;
  });

  app.controller('SingleC', function($scope, $routeParams) {

    $scope.contacts = contactItem;

    var param = $routeParams.id;
    console.log(param);
    $scope.contactList = $scope.contacts[param - 1];
    this.newList = $scope.contactList;
    console.log(this.newList);



  });
//ToDo


var toDoList = [{
  id: '1',
  name: 'ToDo Teil 1',
  worker: {
    first: 'Steve',
    last: 'Heinio'
  },
  content: 'Mache dies oder das'
}, {
  id: '2',
  name: 'ToDo Teil 2',
  worker: {
    first: 'Steve2',
    last: 'Heinio2'
  },
  content: 'Mache dies oder da2'
}]



  var contactItem = [{
    id: '1',
    name: 'Company 1',
    namen: {
      first: 'Steve',
      last: 'Leon'
    },
    email: 'webber@web.de'
  }, {
    id: '2',
    name: 'Company 2',
    namen: {
      first: 'Steve2',
      last: 'Leon2'
    },
    email: 'webber@web.de22'
  }]

  var productItem = [{
      name: 'product1',
      color: 'grey',
      pattern: 'triangle',
      size: '1',
      variation: '1',
      price: '100,00',
      sizeX: '52.32',
      sizeY: '100',
      sizeZ: '20',
      headline: 'lovly handbag lane',
      descriptShort: 'lovely handbag made out of cotton and des....',
      descriptLong: ' This is the long description with a lot of words',
      images: [{
        id: '001',
        name: 'dress1',
        path: 'img/products/dress1'
      }, {
        id: '002',
        name: 'picture2',
        path: 'img/products/product1'
      }, {
        id: '003',
        name: 'picture3',
        path: 'img/products/product1'
      }]
    }, {
      name: 'product2',
      color: 'white',
      pattern: 'triangle',
      size: '1',
      variation: '1',
      price: '100,00',
      sizeX: '52.32',
      sizeY: '100',
      sizeZ: '20',
      headline: 'lovly handbag lane 2',
      descriptShort: 'lovely handbag made out of cotton and des 2....',
      descriptLong: ' This is the long description with a lot of words part2',
      images: [{
        id: '001',
        name: 'dress2',
        path: 'img/products/dress2'
      }, {
        id: '002',
        name: 'picture2',
        path: 'img/products/product2'
      }, {
        id: '003',
        name: 'picture3',
        path: 'img/products/product2'
      }]
    }

  ]

  var menuItem = [{
    name: 'home',
    place: 'header'
  }, {
    name: 'shop',
    place: 'header'
  }, {
    name: 'about',
    place: 'header'
  }, {
    name: 'login',
    place: 'header'
  }, {
    name: 'add',
    place: 'header'
  }, {
    name: 'table',
    place: 'header'
  },{
    name: 'todo',
    place: 'header'
  },  { /*FOOTER AREA Start*/
    name: 'lookbook',
    place: 'footer'
  }, {
    name: 'projects',
    place: 'footer'
  }, {
    name: 'care-instructions',
    place: 'footer'
  }, {
    name: 'returns',
    place: 'footer'
  }, {
    name: 'International_Orders',
    place: 'footer'
  }, {
    name: 'b2b',
    place: 'footer'
  }, { /*Social Media Icons*/
    name: 'twitter',
    place: 'social'
  }, {
    name: 'google-plus',
    place: 'social'
  }, {
    name: 'facebook',
    place: 'social'
  }, {
    name: 'pinterest',
    place: 'social'
  }, {
    name: 'instagram',
    place: 'social'
  }];
})()
