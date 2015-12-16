var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _indexConfig = __webpack_require__(2);

	var _indexConfig2 = _interopRequireDefault(_indexConfig);

	var _indexRoute = __webpack_require__(3);

	var _indexRoute2 = _interopRequireDefault(_indexRoute);

	var _indexRun = __webpack_require__(5);

	var _indexRun2 = _interopRequireDefault(_indexRun);

	var _usersUsersModule = __webpack_require__(7);

	var _usersUsersModule2 = _interopRequireDefault(_usersUsersModule);

	var _mailBoxMailboxModule = __webpack_require__(27);

	var _mailBoxMailboxModule2 = _interopRequireDefault(_mailBoxMailboxModule);

	var _authAuthModule = __webpack_require__(44);

	var _authAuthModule2 = _interopRequireDefault(_authAuthModule);

	var _apiCoreApiCoreModule = __webpack_require__(51);

	var _apiCoreApiCoreModule2 = _interopRequireDefault(_apiCoreApiCoreModule);

	angular.module('myApp', ['restangular', 'ui.router', _apiCoreApiCoreModule2['default'], _authAuthModule2['default'], _mailBoxMailboxModule2['default'], _usersUsersModule2['default']]).config(_indexConfig2['default']).config(_indexRoute2['default']).run(function ($rootScope, $state, $stateParams, AuthToken) {
	    return new _indexRun2['default']($rootScope, $state, $stateParams, AuthToken);
		});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function config(RestangularProvider) {
	    RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com');
	}

	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = routerConfig;

	var _viewsMainPageHtml = __webpack_require__(4);

	var _viewsMainPageHtml2 = _interopRequireDefault(_viewsMainPageHtml);

	function routerConfig($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('main', {
	        abstract: true,
	        template: _viewsMainPageHtml2['default']
	    });

	    $urlRouterProvider.otherwise("/login");
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <nav class=\"navbar navbar-inverse navbar-fixed-top\"> <div class=\"container-fluid\"> <div id=\"navbar\"> <a class=\"navbar-brand\" ui-sref=\"folders.letters({ folderId: 1 })\">E-Mail</a>\n<a class=\"navbar-brand\" ui-sref=\"usersList\">Users</a> <form class=\"navbar-form navbar-right\"> <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"> </form> </div> </div> </nav> <div ui-view class=\"row\"></div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("app/views/main-page.html",v1)}]);
	module.exports=v1;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var RunController = function RunController($rootScope, $state, $stateParams, AuthToken) {
	  _classCallCheck(this, RunController);

	  $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
	    $rootScope.toState = toState;
	    $rootScope.toStateParams = toStateParams;

	    if ($rootScope.toState.url != '/login') {
	      AuthToken.tokenCheck();
	    }
	  });
	};

	exports['default'] = RunController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _usersRoute = __webpack_require__(8);

	var _usersRoute2 = _interopRequireDefault(_usersRoute);

	var _usersService = __webpack_require__(18);

	var _usersService2 = _interopRequireDefault(_usersService);

	var _usersApiConfig = __webpack_require__(19);

	var _usersApiConfig2 = _interopRequireDefault(_usersApiConfig);

	var _userAvatarDirective = __webpack_require__(20);

	var _userAvatarDirective2 = _interopRequireDefault(_userAvatarDirective);

	var _userCardUserCardDirectiveJs = __webpack_require__(22);

	var _userCardUserCardDirectiveJs2 = _interopRequireDefault(_userCardUserCardDirectiveJs);

	var _userEditUserCardEditDirectiveJs = __webpack_require__(24);

	var _userEditUserCardEditDirectiveJs2 = _interopRequireDefault(_userEditUserCardEditDirectiveJs);

	var users = angular.module('users', []).config(_usersRoute2['default']).service('Users', _usersService2['default']).service('UsersRestangular', _usersApiConfig2['default']).directive('avatar', function () {
	    return new _userAvatarDirective2['default']();
	}).directive('userCard', function () {
	    return new _userCardUserCardDirectiveJs2['default']();
	}).directive('userCardEdit', function () {
	    return new _userEditUserCardEditDirectiveJs2['default']();
	});

	exports['default'] = users = users.name;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = usersRouterConfig;

	var _usersController = __webpack_require__(9);

	var _usersController2 = _interopRequireDefault(_usersController);

	var _userEditUsersEditControllerJs = __webpack_require__(10);

	var _userEditUsersEditControllerJs2 = _interopRequireDefault(_userEditUsersEditControllerJs);

	var _viewsUsersHtml = __webpack_require__(15);

	var _viewsUsersHtml2 = _interopRequireDefault(_viewsUsersHtml);

	var _viewsUsersListHtml = __webpack_require__(16);

	var _viewsUsersListHtml2 = _interopRequireDefault(_viewsUsersListHtml);

	var _userEditViewsUserEditHtml = __webpack_require__(17);

	var _userEditViewsUserEditHtml2 = _interopRequireDefault(_userEditViewsUserEditHtml);

	function usersRouterConfig($stateProvider) {
	    $stateProvider.state('users', {
	        abstract: true,
	        parent: 'main',
	        template: _viewsUsersHtml2['default']
	    }).state('usersList', {
	        parent: 'users',
	        url: '/users',
	        template: _viewsUsersListHtml2['default'],
	        controller: _usersController2['default'],
	        controllerAs: 'usersCtrl'
	    }).state('userEdit', {
	        parent: 'users',
	        url: '/users/:userId/edit',
	        template: _userEditViewsUserEditHtml2['default'],
	        controller: _userEditUsersEditControllerJs2['default'],
	        controllerAs: 'userEditCtrl'
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(6)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var UsersController = function UsersController(Users) {
	    var _this = this;

	    _classCallCheck(this, UsersController);

	    Users.getUsers().then(function (response) {
	        _this.users = response;
	    });
	};

	exports["default"] = UsersController;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(11)["default"];

	var _classCallCheck = __webpack_require__(6)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var UserEditController = (function () {
	    function UserEditController(Users, $stateParams) {
	        _classCallCheck(this, UserEditController);

	        this.Users = Users;

	        this.user = {};
	        this.getUser(+$stateParams.userId);
	    }

	    _createClass(UserEditController, [{
	        key: "getUser",
	        value: function getUser(userId) {
	            var _this = this;

	            if (!!userId) {
	                this.Users.getOne(userId).then(function (user) {
	                    _this.user = user;
	                });
	            }
	        }
	    }]);

	    return UserEditController;
	})();

	exports["default"] = UserEditController;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(12)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div ui-view></div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("users/views/users.html",v1)}]);
	module.exports=v1;

/***/ },
/* 16 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<user-card ng-repeat=\"user in usersCtrl.users\" user=\"user\"> </user-card>";
	ngModule.run(["$templateCache",function(c){c.put("users/views/users-list.html",v1)}]);
	module.exports=v1;

/***/ },
/* 17 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<user-card-edit user=\"userEditCtrl.user\"></user-card-edit>";
	ngModule.run(["$templateCache",function(c){c.put("user-edit/views/user-edit.html",v1)}]);
	module.exports=v1;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var Users = (function () {
	    function Users(UsersRestangular) {
	        _classCallCheck(this, Users);

	        this.route = UsersRestangular.all('users');
	    }

	    _createClass(Users, [{
	        key: 'getUsers',
	        value: function getUsers() {
	            return this.route.getList();
	        }
	    }, {
	        key: 'getOne',
	        value: function getOne(id) {
	            return this.route.get(id);
	        }
	    }, {
	        key: 'update',
	        value: function update(user) {
	            return this.route.post({ user: user });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(user) {
	            return user.remove();
	        }
	    }]);

	    return Users;
	})();

	exports['default'] = Users;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = UsersRestangular;

	function UsersRestangular(RestangularWithAuth) {
	    function processingData(item) {
	        if (!('fullAddress' in item)) {
	            item.fullAddress = item.address.city + ', ' + item.address.street + ', ' + item.address.suite;
	            item.website = ! ~item.website.indexOf('http') ? 'http://' + item.website : item.website;
	            item.avatarUrl = 'https://randomuser.me/api/portraits/thumb/women/' + item.id + '.jpg';
	        }
	    }
	    return RestangularWithAuth.withConfig(function (RestangularConfigurer) {
	        RestangularConfigurer.addResponseInterceptor(function (data, operation, what) {
	            if (operation != 'post' && operation != 'remove') {
	                if (data.length) {
	                    data.forEach(function (item) {
	                        processingData(item);
	                    });
	                } else {
	                    processingData(data);
	                }
	            }

	            return data;
	        });
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsUserAvatarHtml = __webpack_require__(21);

	var _viewsUserAvatarHtml2 = _interopRequireDefault(_viewsUserAvatarHtml);

	var UserAvatarDirective = function UserAvatarDirective() {
	    _classCallCheck(this, UserAvatarDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {
	        avatarUrl: '='
	    };

	    this.template = _viewsUserAvatarHtml2['default'];
	};

	exports['default'] = UserAvatarDirective;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <img ng-src=\"{{avatarUrl || 'http://psdexport.com/storage/avatars/default.png'}}\" class=\"img-circle img-responsive\"> <br/> </div>";
	ngModule.run(["$templateCache",function(c){c.put("users/views/user-avatar.html",v1)}]);
	module.exports=v1;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsUserCardHtml = __webpack_require__(23);

	var _viewsUserCardHtml2 = _interopRequireDefault(_viewsUserCardHtml);

	var UserCardDirective = function UserCardDirective() {
	    _classCallCheck(this, UserCardDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {
	        user: '='
	    };

	    this.template = _viewsUserCardHtml2['default'];
	};

	exports['default'] = UserCardDirective;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-info\" style=\"margin-top: 20px\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\"> <a ui-sref=\"user({userId: user.id})\" ng-bind=\"user.username\"></a> </h3> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-3 col-lg-3\" align=\"center\"> <avatar avatar-url=\"user.avatarUrl\"></avatar> </div> <div class=\"col-md-9 col-lg-9\"> <table class=\"table table-user-information\"> <tbody> <tr> <td>Имя</td> <td ng-bind=\"user.name\"></td> </tr> <tr> <td>Телефон</td> <td ng-bind=\"user.phone\"></td> </tr> <tr> <td>Website</td> <td><a ng-href=\"{{user.website}}\" target=\"_blank\" ng-bind=\"user.website\"></a></td> </tr> <tr> <td>Адрес</td> <td ng-bind=\"user.fullAddress\"></td> </tr> <tr> <td>Email</td> <td><a ng-href=\"mailto:{{user.email}}\" ng-bind=\"user.email\"></a></td> </tr> </tbody> </table> </div> </div> </div> <div class=\"panel-footer\"> <div class=\"text-right\"> <a ui-sref=\"userEdit({userId: user.id})\">&#9997; Edit</a> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("user-card/views/user-card.html",v1)}]);
	module.exports=v1;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsUserCardEditHtml = __webpack_require__(25);

	var _viewsUserCardEditHtml2 = _interopRequireDefault(_viewsUserCardEditHtml);

	var _userCardEditControllerJs = __webpack_require__(26);

	var _userCardEditControllerJs2 = _interopRequireDefault(_userCardEditControllerJs);

	var UserCardEditDirective = function UserCardEditDirective() {
	    _classCallCheck(this, UserCardEditDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {
	        user: '='
	    };

	    this.controller = _userCardEditControllerJs2['default'];
	    this.controllerAs = 'userCardEditCtrl';

	    this.template = _viewsUserCardEditHtml2['default'];
	};

	exports['default'] = UserCardEditDirective;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-info\" ng-show=\"!!(user && user.id)\"> <form> <div class=\"panel-heading\"> <h3 class=\"panel-title\"> <input ng-model=\"user.name\">\n<a ng-if=\"user.id\" href=\"#\" class=\"pull-right bg-danger\" ng-click=\"userCardEditCtrl.delete(user)\">&#10008; Delete</a> </h3> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-3 col-lg-3\" align=\"center\"> <avatar avatar-url=\"user.avatarUrl\"></avatar> </div> <div class=\"col-md-9 col-lg-9\"> <table class=\"table table-user-information\"> <tbody> <tr> <td>Телефон</td> <td><input style=\"width: 100%\" ng-model=\"user.phone\"></td> </tr> <tr> <td>Website</td> <td><input style=\"width: 100%\" ng-model=\"user.website\"></td> </tr> <tr> <td>Адрес</td> <td><input style=\"width: 100%\" ng-model=\"user.fullAddress\"></td> </tr> <tr> <td>Email</td> <td><input style=\"width: 100%\" ng-model=\"user.email\"></td> </tr></tbody> </table> </div> </div> </div> <div class=\"panel-footer\"> <div class=\"text-right\"> <a href=\"#\" ng-click=\"userCardEditCtrl.save(user)\">&#10004; Save</a> </div> </div> </form> </div>";
	ngModule.run(["$templateCache",function(c){c.put("user-edit/views/user-card-edit.html",v1)}]);
	module.exports=v1;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var UserCardEditController = (function () {
	    function UserCardEditController(Users, $state) {
	        _classCallCheck(this, UserCardEditController);

	        this.Users = Users;
	        this.$state = $state;
	    }

	    _createClass(UserCardEditController, [{
	        key: 'save',
	        value: function save(user) {
	            var _this = this;

	            var userSavePromise = undefined;

	            if (user.id) {
	                userSavePromise = this.Users.update(user);
	            } else {
	                userSavePromise = this.Users.create(user);
	            }

	            userSavePromise.then(function () {
	                _this.isEdit = false;
	                _this.$state.go('usersList');
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(user) {
	            var _this2 = this;

	            this.Users['delete'](user).then(function () {
	                _this2.$state.go('usersList');
	            });
	        }
	    }]);

	    return UserCardEditController;
	})();

	exports['default'] = UserCardEditController;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _mailboxRoute = __webpack_require__(28);

	var _mailboxRoute2 = _interopRequireDefault(_mailboxRoute);

	var _foldersFoldersService = __webpack_require__(29);

	var _foldersFoldersService2 = _interopRequireDefault(_foldersFoldersService);

	var _foldersFoldersListDirective = __webpack_require__(30);

	var _foldersFoldersListDirective2 = _interopRequireDefault(_foldersFoldersListDirective);

	var _foldersFolderItemDirective = __webpack_require__(33);

	var _foldersFolderItemDirective2 = _interopRequireDefault(_foldersFolderItemDirective);

	var _lettersLettersService = __webpack_require__(35);

	var _lettersLettersService2 = _interopRequireDefault(_lettersLettersService);

	var _lettersLettersListDirective = __webpack_require__(36);

	var _lettersLettersListDirective2 = _interopRequireDefault(_lettersLettersListDirective);

	var _lettersLetterShortViewDirective = __webpack_require__(39);

	var _lettersLetterShortViewDirective2 = _interopRequireDefault(_lettersLetterShortViewDirective);

	var _lettersLetterFullViewDirective = __webpack_require__(41);

	var _lettersLetterFullViewDirective2 = _interopRequireDefault(_lettersLetterFullViewDirective);

	var mailbox = angular.module('mailbox', []).config(_mailboxRoute2['default']).service('Folders', _foldersFoldersService2['default']).directive('foldersList', function () {
	    return new _foldersFoldersListDirective2['default']();
	}).directive('folderItem', function () {
	    return new _foldersFolderItemDirective2['default']();
	}).service('Letters', _lettersLettersService2['default']).directive('lettersList', function () {
	    return new _lettersLettersListDirective2['default']();
	}).directive('letterShortView', function () {
	    return new _lettersLetterShortViewDirective2['default']();
	}).directive('letterFullview', function () {
	    return new _lettersLetterFullViewDirective2['default']();
	});

	exports['default'] = mailbox = mailbox.name;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = mailboxRouterConfig;

	function mailboxRouterConfig($stateProvider) {
	    $stateProvider.state('folders', {
	        parent: 'main',
	        url: '/folders/:folderId',
	        template: '<folders-list></folders-list>',
	        params: {
	            folderId: '1'
	        }
	    }).state('folders.letters', {
	        //parent: 'folders',
	        url: '/letters',
	        template: '<letters-list></letters-list>'
	    }).state('folders.letters.letter', {
	        //parent: 'letters',
	        url: '/:letterId',
	        template: '<letter-fullview></letter-fullview>'
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var Folders = (function () {
	    function Folders() {
	        _classCallCheck(this, Folders);

	        this._folders = [{
	            id: 1,
	            name: 'Inbox',
	            count: 8
	        }, {
	            id: 2,
	            name: 'Sent',
	            count: 5
	        }, {
	            id: 3,
	            name: 'Spam',
	            count: 8
	        }];
	    }

	    _createClass(Folders, [{
	        key: 'getFolders',
	        value: function getFolders() {
	            return this._folders;
	        }
	    }]);

	    return Folders;
	})();

	exports['default'] = Folders;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _foldersListController = __webpack_require__(31);

	var _foldersListController2 = _interopRequireDefault(_foldersListController);

	var _viewsFoldersListHtml = __webpack_require__(32);

	var _viewsFoldersListHtml2 = _interopRequireDefault(_viewsFoldersListHtml);

	var FoldersListDirective = function FoldersListDirective() {
	    _classCallCheck(this, FoldersListDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {};
	    this.controller = _foldersListController2['default'];
	    this.controllerAs = 'foldersCtrl';

	    this.template = _viewsFoldersListHtml2['default'];
	};

	exports['default'] = FoldersListDirective;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(6)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var FoldersListController = function FoldersListController(Folders, $stateParams, $state) {
	    _classCallCheck(this, FoldersListController);

	    this.activeFolder = $stateParams.folderId || 1;

	    this.folders = Folders.getFolders();
	};

	exports["default"] = FoldersListController;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"row\"> <div class=\"col-2 sidebar\"> <ul class=\"nav nav-sidebar\">  <folder-item ng-repeat=\"folder in foldersCtrl.folders\" folder=\"folder\" active=\"foldersCtrl.activeFolder == folder.id\" ui-sref=\"folders.letters({ folderId: folder.id })\"> </folder-item> </ul> </div> <div ui-view></div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("folders/views/folders-list.html",v1)}]);
	module.exports=v1;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsFolderItemHtml = __webpack_require__(34);

	var _viewsFolderItemHtml2 = _interopRequireDefault(_viewsFolderItemHtml);

	var FolderItemDirective = function FolderItemDirective() {
	    _classCallCheck(this, FolderItemDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {
	        folder: "=",
	        active: "="
	    };

	    this.template = _viewsFolderItemHtml2['default'];
	};

	exports['default'] = FolderItemDirective;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<li ng-class=\"{'active': active}\"> <a href=\"#\"> <span ng-bind=\"folder.name\"></span>\n<span class=\"badge\" ng-bind=\"folder.count\"></span> </a> </li>";
	ngModule.run(["$templateCache",function(c){c.put("folders/views/folder-item.html",v1)}]);
	module.exports=v1;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var Letters = (function () {
	    function Letters(RestangularWithAuth) {
	        _classCallCheck(this, Letters);

	        this.RestangularWithAuth = RestangularWithAuth;
	    }

	    _createClass(Letters, [{
	        key: 'getLetters',
	        value: function getLetters(folderId) {
	            return this.RestangularWithAuth.one('users', folderId).getList('posts');
	        }
	    }, {
	        key: 'getLetter',
	        value: function getLetter(letterId) {
	            return this.RestangularWithAuth.one('posts', letterId).get();
	        }
	    }]);

	    return Letters;
	})();

	exports['default'] = Letters;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _lettersListController = __webpack_require__(37);

	var _lettersListController2 = _interopRequireDefault(_lettersListController);

	var _viewsLettersListHtml = __webpack_require__(38);

	var _viewsLettersListHtml2 = _interopRequireDefault(_viewsLettersListHtml);

	var LettersListDirective = function LettersListDirective() {
	    _classCallCheck(this, LettersListDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {};
	    this.controller = _lettersListController2['default'];
	    this.controllerAs = 'lettersCtrl';

	    this.template = _viewsLettersListHtml2['default'];
	};

	exports['default'] = LettersListDirective;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var LettersListController = function LettersListController(Letters, $stateParams, $state) {
	    var _this = this;

	    _classCallCheck(this, LettersListController);

	    this.activeFolder = $stateParams.folderId || 1;

	    Letters.getLetters(this.activeFolder).then(function (response) {
	        _this.letters = response;

	        $state.go('folders.letters.letter', { folderId: _this.activeFolder, letterId: _this.letters[0].id });
	    });
	};

	exports['default'] = LettersListController;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <div class=\"col-3 col-offset-2 letters-list sidebar\">  <ul class=\"list-unstyled\"> <letter-short-view ng-repeat=\"letter in lettersCtrl.letters\" letter=\"letter\" ui-sref=\"folders.letters.letter({ letterId: letter.id })\"> </letter-short-view> </ul> </div> <div ui-view class=\"col-7 col-offset-5\"></div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("letters/views/letters-list.html",v1)}]);
	module.exports=v1;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsLetterShortViewHtml = __webpack_require__(40);

	var _viewsLetterShortViewHtml2 = _interopRequireDefault(_viewsLetterShortViewHtml);

	var LettersShortViewDirective = function LettersShortViewDirective() {
	    _classCallCheck(this, LettersShortViewDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {
	        letter: "="
	    };

	    this.template = _viewsLetterShortViewHtml2['default'];
	};

	exports['default'] = LettersShortViewDirective;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<li class=\"bs-callout bs-callout-info\"> <h4 ng-bind=\"letter.title\"></h4> <p ng-bind=\"letter.body\"></p> </li>";
	ngModule.run(["$templateCache",function(c){c.put("letters/views/letter-short-view.html",v1)}]);
	module.exports=v1;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _letterFullViewController = __webpack_require__(42);

	var _letterFullViewController2 = _interopRequireDefault(_letterFullViewController);

	var _viewsLetterFullViewHtml = __webpack_require__(43);

	var _viewsLetterFullViewHtml2 = _interopRequireDefault(_viewsLetterFullViewHtml);

	var LetterFullViewDirective = function LetterFullViewDirective() {
	    _classCallCheck(this, LetterFullViewDirective);

	    this.restrict = 'E';
	    this.replace = true;

	    this.scope = {};
	    this.controller = _letterFullViewController2['default'];
	    this.controllerAs = 'letterCtrl';

	    this.template = _viewsLetterFullViewHtml2['default'];
	};

	exports['default'] = LetterFullViewDirective;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(6)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var LetterFullViewController = function LetterFullViewController(Letters, $stateParams) {
	    var _this = this;

	    _classCallCheck(this, LetterFullViewController);

	    this.activeLetter = $stateParams.letterId || 1;

	    Letters.getLetter(this.activeLetter).then(function (response) {
	        _this.letter = response;
	    });
	};

	exports["default"] = LetterFullViewController;
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"letter-fullview\">  <div class=\"jumbotron\" ng-show=\"letterCtrl.letter && letterCtrl.letter.body && letterCtrl.letter.body.length\"> <h2 ng-bind=\"letterCtrl.letter.title\"></h2> <p ng-bind=\"letterCtrl.letter.body\"></p> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("letters/views/letter-full-view.html",v1)}]);
	module.exports=v1;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _authRoute = __webpack_require__(45);

	var _authRoute2 = _interopRequireDefault(_authRoute);

	var _authMock = __webpack_require__(48);

	var _authMock2 = _interopRequireDefault(_authMock);

	var _authService = __webpack_require__(49);

	var _authService2 = _interopRequireDefault(_authService);

	var _authTokenService = __webpack_require__(50);

	var _authTokenService2 = _interopRequireDefault(_authTokenService);

	var auth = angular.module('auth', ['ngMockE2E']).config(_authRoute2['default']).run(function ($httpBackend, AuthToken) {
	    return new _authMock2['default']($httpBackend, AuthToken);
	}).service('Auth', _authService2['default']).service('AuthToken', _authTokenService2['default']);

	exports['default'] = auth = auth.name;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = authRouterConfig;

	var _viewsLoginHtml = __webpack_require__(46);

	var _viewsLoginHtml2 = _interopRequireDefault(_viewsLoginHtml);

	var _authRouteController = __webpack_require__(47);

	var _authRouteController2 = _interopRequireDefault(_authRouteController);

	function authRouterConfig($stateProvider) {
	    $stateProvider.state('login', {
	        url: '/login',
	        template: _viewsLoginHtml2['default'],
	        controllerAs: 'loginCtrl',
	        controller: _authRouteController2['default']
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"container\"> <form class=\"form-signin\"> <p style=\"padding: 10px 20px\" class=\"bg-danger\" ng-show=\"loginCtrl.loginError\">Ошибка авторизации!</p> <h2 class=\"form-signin-heading\">Please sign in</h2> <label for=\"inputEmail\" class=\"sr-only\">Email address</label> <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\" ng-model=\"loginCtrl.email\"/> <label for=\"inputPassword\" class=\"sr-only\">Password</label> <br/> <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" ng-model=\"loginCtrl.password\"/> <br/> <div class=\"checkbox\"> <label> <input type=\"checkbox\" value=\"remember-me\"> Remember me </label> </div> <br/> <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" ng-click=\"loginCtrl.login(loginCtrl.email, loginCtrl.password)\">Sign in</button> </form> </div>";
	ngModule.run(["$templateCache",function(c){c.put("auth/views/login.html",v1)}]);
	module.exports=v1;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var AuthRouteController = (function () {
	    function AuthRouteController(Auth, $state) {
	        _classCallCheck(this, AuthRouteController);

	        this.Auth = Auth;
	        this.$state = $state;
	    }

	    _createClass(AuthRouteController, [{
	        key: 'login',
	        value: function login(email, password) {
	            var _this = this;

	            this.Auth.checkAuth(email, password).then(function () {
	                _this.$state.go('folders.letters', { folderId: 1 });
	            })['catch'](function () {
	                _this.loginError = true;
	            });
	        }
	    }]);

	    return AuthRouteController;
	})();

	exports['default'] = AuthRouteController;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var AuthMock = function AuthMock($httpBackend, AuthToken) {
	    _classCallCheck(this, AuthMock);

	    $httpBackend.whenPOST(/sessions.*/).respond(function (method, url, data) {
	        var credentials = JSON.parse(data);

	        if (credentials.email === 'xz@xz.ru' && credentials.password === '123') {
	            AuthToken.tokenSet();
	            return [200, { message: 'Auth Success' }, {}];
	        } else {
	            return [401, { error: 'Login or password are not correct' }, {}];
	        }
	    });

	    $httpBackend.whenDELETE(/sessions.*/).respond(function () {
	        if (!AuthToken.tokenCheck()) {
	            return [401, { error: 'Login or password are not correct' }, {}];
	        }

	        AuthToken.deleteCookie('authToken');
	        return [200, {}, {}];
	    });
	};

	exports['default'] = AuthMock;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var Auth = (function () {
	    function Auth(RestangularWithAuth, $q) {
	        _classCallCheck(this, Auth);

	        this.RestangularWithAuth = RestangularWithAuth;
	        this.currentSession = null;
	        this.$q = $q;
	    }

	    _createClass(Auth, [{
	        key: 'checkAuth',
	        value: function checkAuth(email, password) {
	            var _this = this;

	            var defer = this.$q.defer();

	            this.RestangularWithAuth.all('sessions').post({
	                email: email,
	                password: password
	            }).then(function (session) {
	                _this.currentSession = session;
	                defer.resolve();
	            }, function () {
	                defer.reject();
	            });

	            return defer.promise;
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            return this.currentSession.remove();
	        }
	    }]);

	    return Auth;
	})();

	exports['default'] = Auth;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(11)['default'];

	var _classCallCheck = __webpack_require__(6)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var AuthToken = (function () {
	    function AuthToken($state, $timeout) {
	        _classCallCheck(this, AuthToken);

	        this.$state = $state;
	        this.$timeout = $timeout;
	    }

	    _createClass(AuthToken, [{
	        key: 'tokenSet',
	        value: function tokenSet() {
	            this.setCookie('authToken', 'bd2e932a03a19217ab5a1dfb5aa93340');
	        }
	    }, {
	        key: 'tokenCheck',
	        value: function tokenCheck() {
	            var _this = this;

	            if (this.getCookie('authToken') !== 'bd2e932a03a19217ab5a1dfb5aa93340') {
	                this.$timeout(function () {
	                    _this.$state.go('login');
	                }, 0, false);
	            }

	            return true;
	        }
	    }, {
	        key: 'setCookie',
	        value: function setCookie(name, value, options) {
	            options = options || {};

	            var expires = options.expires;

	            if (typeof expires == "number" && expires) {
	                var d = new Date();
	                d.setTime(d.getTime() + expires * 1000);
	                expires = options.expires = d;
	            }
	            if (expires && expires.toUTCString) {
	                options.expires = expires.toUTCString();
	            }

	            value = encodeURIComponent(value);

	            var updatedCookie = name + "=" + value;

	            for (var propName in options) {
	                updatedCookie += "; " + propName;
	                var propValue = options[propName];
	                if (propValue !== true) {
	                    updatedCookie += "=" + propValue;
	                }
	            }

	            document.cookie = updatedCookie;
	        }
	    }, {
	        key: 'getCookie',
	        value: function getCookie(name) {
	            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	            return matches ? decodeURIComponent(matches[1]) : undefined;
	        }
	    }, {
	        key: 'deleteCookie',
	        value: function deleteCookie(name) {
	            setCookie(name, "", {
	                expires: -1
	            });
	        }
	    }]);

	    return AuthToken;
	})();

	exports['default'] = AuthToken;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _apiMock = __webpack_require__(52);

	var _apiMock2 = _interopRequireDefault(_apiMock);

	var _apiRestangular = __webpack_require__(53);

	var _apiRestangular2 = _interopRequireDefault(_apiRestangular);

	var api = angular.module('api-core', ['ngMockE2E', 'restangular']).run(function ($httpBackend) {
	    return new _apiMock2['default']($httpBackend);
	}).service('RestangularWithAuth', _apiRestangular2['default']);

	exports['default'] = api = api.name;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(6)["default"];

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ApiMock = function ApiMock($httpBackend) {
	    _classCallCheck(this, ApiMock);

	    $httpBackend.whenGET(/^http:\/\/jsonplaceholder\.typicode\.com/).passThrough();

	    $httpBackend.whenPOST(/^http:\/\/jsonplaceholder\.typicode\.com\/users/).respond(function () {
	        return [200, {}, {}];
	    });
	    $httpBackend.whenDELETE(/^http:\/\/jsonplaceholder\.typicode\.com\/users/).respond(function () {
	        return [200, {}, {}];
	    });
	};

	exports["default"] = ApiMock;
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = RestangularWithAuth;

	function RestangularWithAuth(Restangular, $injector, $http) {
	    return Restangular.withConfig(function (RestangularConfigurer) {
	        RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
	            if (response.status === 401) {
	                $injector.get('$state').go('login');
	                $http(response.config).then(responseHandler, deferred.reject);
	                return false;
	            }

	            return true;
	        });
	    });
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjlmMThlNTRjMjY1MjNjZTRjZjEiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9tYWluLXBhZ2UuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9pbmRleC5ydW4uanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlcnMubW9kdWxlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXJzLnJvdXRlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlci1lZGl0L3VzZXJzLmVkaXQuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIndlYnBhY2s6Ly8vLi91c2Vycy92aWV3cy91c2Vycy5odG1sIiwid2VicGFjazovLy8uL3VzZXJzL3ZpZXdzL3VzZXJzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi91c2Vycy91c2VyLWVkaXQvdmlld3MvdXNlci1lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlcnMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC91c2Vycy91c2Vycy5hcGkuY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXIuYXZhdGFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi91c2Vycy92aWV3cy91c2VyLWF2YXRhci5odG1sIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXItY2FyZC91c2VyLmNhcmQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3VzZXJzL3VzZXItY2FyZC92aWV3cy91c2VyLWNhcmQuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC91c2Vycy91c2VyLWVkaXQvdXNlci5jYXJkLmVkaXQuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3VzZXJzL3VzZXItZWRpdC92aWV3cy91c2VyLWNhcmQtZWRpdC5odG1sIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L21haWxib3gubW9kdWxlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L21haWxib3gucm91dGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvZm9sZGVycy9mb2xkZXJzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvZm9sZGVycy9mb2xkZXJzLmxpc3QuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5saXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC1ib3gvZm9sZGVycy92aWV3cy9mb2xkZXJzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9tYWlsLWJveC9mb2xkZXJzL2ZvbGRlci5pdGVtLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWlsLWJveC9mb2xkZXJzL3ZpZXdzL2ZvbGRlci1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLmxpc3QuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVycy5saXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC1ib3gvbGV0dGVycy92aWV3cy9sZXR0ZXJzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9tYWlsLWJveC9sZXR0ZXJzL2xldHRlci5zaG9ydC52aWV3LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWlsLWJveC9sZXR0ZXJzL3ZpZXdzL2xldHRlci1zaG9ydC12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9tYWlsLWJveC9sZXR0ZXJzL2xldHRlci5mdWxsLnZpZXcuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tYWlsLWJveC9sZXR0ZXJzL3ZpZXdzL2xldHRlci1mdWxsLXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hdXRoL2F1dGgubW9kdWxlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2F1dGgvYXV0aC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hdXRoL3ZpZXdzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvYXV0aC9hdXRoLnJvdXRlLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvYXV0aC9hdXRoLm1vY2suanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvYXV0aC9hdXRoLnRva2VuLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvYXBpLWNvcmUvYXBpLmNvcmUubW9kdWxlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2FwaS1jb3JlL2FwaS5tb2NrLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2FwaS1jb3JlL2FwaS5yZXN0YW5ndWxhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY5ZjE4ZTU0YzI2NTIzY2U0Y2YxXG4gKiovIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2luZGV4LmNvbmZpZyc7XHJcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCBSdW5Db250cm9sbGVyIGZyb20gJy4vaW5kZXgucnVuJztcclxuXHJcbmltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XHJcbmltcG9ydCBtYWlsYm94IGZyb20gJy4vbWFpbC1ib3gvbWFpbGJveC5tb2R1bGUnO1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpLWNvcmUvYXBpLmNvcmUubW9kdWxlJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsncmVzdGFuZ3VsYXInLCAndWkucm91dGVyJywgYXBpLCBhdXRoLCBtYWlsYm94LCB1c2Vyc10pXHJcbiAgICAuY29uZmlnKGNvbmZpZylcclxuICAgIC5jb25maWcocm91dGVyQ29uZmlnKVxyXG4gICAgLnJ1bigoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEF1dGhUb2tlbikgPT5cclxuICAgICAgICAgICAgbmV3IFJ1bkNvbnRyb2xsZXIoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEF1dGhUb2tlbikpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gY29uZmlnIChSZXN0YW5ndWxhclByb3ZpZGVyKSB7XHJcbiAgICBSZXN0YW5ndWxhclByb3ZpZGVyLnNldEJhc2VVcmwoJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9pbmRleC5jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgbWFpblBhZ2VUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL21haW4tcGFnZS5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ21haW4nLCB7XHJcbiAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbWFpblBhZ2VUZW1wbGF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvbG9naW5cIik7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgaWQ9XFxcIm5hdmJhclxcXCI+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHVpLXNyZWY9XFxcImZvbGRlcnMubGV0dGVycyh7IGZvbGRlcklkOiAxIH0pXFxcIj5FLU1haWw8L2E+XFxuPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgdWktc3JlZj1cXFwidXNlcnNMaXN0XFxcIj5Vc2VyczwvYT4gPGZvcm0gY2xhc3M9XFxcIm5hdmJhci1mb3JtIG5hdmJhci1yaWdodFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoLi4uXFxcIj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvbmF2PiA8ZGl2IHVpLXZpZXcgY2xhc3M9XFxcInJvd1xcXCI+PC9kaXY+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJhcHAvdmlld3MvbWFpbi1wYWdlLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmlld3MvbWFpbi1wYWdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSdW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIEF1dGhUb2tlbikge1xyXG4gICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvU3RhdGVQYXJhbXMpIHtcclxuICAgICAgJHJvb3RTY29wZS50b1N0YXRlID0gdG9TdGF0ZTtcclxuICAgICAgJHJvb3RTY29wZS50b1N0YXRlUGFyYW1zID0gdG9TdGF0ZVBhcmFtcztcclxuXHJcbiAgICAgIGlmICgkcm9vdFNjb3BlLnRvU3RhdGUudXJsICE9ICcvbG9naW4nKSB7XHJcbiAgICAgICAgQXV0aFRva2VuLnRva2VuQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9pbmRleC5ydW4uanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdXNlcnNSb3V0ZXJDb25maWcgZnJvbSAnLi91c2Vycy5yb3V0ZSc7XHJcblxyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcclxuaW1wb3J0IFVzZXJzUmVzdGFuZ3VsYXIgZnJvbSAnLi91c2Vycy5hcGkuY29uZmlnJztcclxuXHJcbmltcG9ydCBVc2VyQXZhdGFyRGlyZWN0aXZlIGZyb20gJy4vdXNlci5hdmF0YXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IFVzZXJDYXJkRGlyZWN0aXZlIGZyb20gJy4vdXNlci1jYXJkL3VzZXIuY2FyZC5kaXJlY3RpdmUuanMnO1xyXG5pbXBvcnQgVXNlckNhcmRFZGl0RGlyZWN0aXZlIGZyb20gJy4vdXNlci1lZGl0L3VzZXIuY2FyZC5lZGl0LmRpcmVjdGl2ZS5qcyc7XHJcblxyXG5sZXQgdXNlcnMgPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd1c2VycycsIFtdKVxyXG4gICAgLmNvbmZpZyh1c2Vyc1JvdXRlckNvbmZpZylcclxuXHJcbiAgICAuc2VydmljZSgnVXNlcnMnLCBVc2VycylcclxuICAgIC5zZXJ2aWNlKCdVc2Vyc1Jlc3Rhbmd1bGFyJywgVXNlcnNSZXN0YW5ndWxhcilcclxuXHJcbiAgICAuZGlyZWN0aXZlKCdhdmF0YXInLCAoKSA9PiBuZXcgVXNlckF2YXRhckRpcmVjdGl2ZSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgndXNlckNhcmQnLCAoKSA9PiBuZXcgVXNlckNhcmREaXJlY3RpdmUoKSlcclxuICAgIC5kaXJlY3RpdmUoJ3VzZXJDYXJkRWRpdCcsICgpID0+IG5ldyBVc2VyQ2FyZEVkaXREaXJlY3RpdmUoKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VycyA9IHVzZXJzLm5hbWU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlcnMubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFVzZXJzQ29udHJvbGxlciBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgVXNlckVkaXRDb250cm9sbGVyIGZyb20gJy4vdXNlci1lZGl0L3VzZXJzLmVkaXQuY29udHJvbGxlci5qcyc7XHJcblxyXG5pbXBvcnQgdXNlcnNUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL3VzZXJzLmh0bWwnO1xyXG5pbXBvcnQgdXNlcnNMaXN0VGVtcGxhdGUgZnJvbSAnLi92aWV3cy91c2Vycy1saXN0Lmh0bWwnO1xyXG5pbXBvcnQgdXNlckVkaXRUZW1wbGF0ZSBmcm9tICcuL3VzZXItZWRpdC92aWV3cy91c2VyLWVkaXQuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc1JvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCd1c2VycycsIHtcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdXNlcnNUZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgndXNlcnNMaXN0Jywge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiAndXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB1c2Vyc0xpc3RUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFVzZXJzQ29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzQ3RybCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCd1c2VyRWRpdCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogJ3VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy91c2Vycy86dXNlcklkL2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHVzZXJFZGl0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBVc2VyRWRpdENvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VyRWRpdEN0cmwnXHJcbiAgICAgICAgICAgIH0pO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC91c2Vycy91c2Vycy5yb3V0ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihVc2Vycykge1xyXG4gICAgICAgIFVzZXJzLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlcnMuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJFZGl0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihVc2VycywgJHN0YXRlUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5Vc2VycyA9IFVzZXJzO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmdldFVzZXIoKyRzdGF0ZVBhcmFtcy51c2VySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIodXNlcklkKSB7XHJcbiAgICAgICAgaWYgKCEhdXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVXNlcnMuZ2V0T25lKHVzZXJJZCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2Vycy5lZGl0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgdWktdmlldz48L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcInVzZXJzL3ZpZXdzL3VzZXJzLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdmlld3MvdXNlcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjx1c2VyLWNhcmQgbmctcmVwZWF0PVxcXCJ1c2VyIGluIHVzZXJzQ3RybC51c2Vyc1xcXCIgdXNlcj1cXFwidXNlclxcXCI+IDwvdXNlci1jYXJkPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJ1c2Vycy92aWV3cy91c2Vycy1saXN0Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdmlld3MvdXNlcnMtbGlzdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPHVzZXItY2FyZC1lZGl0IHVzZXI9XFxcInVzZXJFZGl0Q3RybC51c2VyXFxcIj48L3VzZXItY2FyZC1lZGl0PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJ1c2VyLWVkaXQvdmlld3MvdXNlci1lZGl0Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdXNlci1lZGl0L3ZpZXdzL3VzZXItZWRpdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKFVzZXJzUmVzdGFuZ3VsYXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlID0gVXNlcnNSZXN0YW5ndWxhci5hbGwoJ3VzZXJzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9uZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLmdldChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wb3N0KHt1c2VyOiB1c2VyfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXJzLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vyc1Jlc3Rhbmd1bGFyKFJlc3Rhbmd1bGFyV2l0aEF1dGgpIHtcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NpbmdEYXRhKGl0ZW0pIHtcclxuICAgICAgICBpZighKCdmdWxsQWRkcmVzcycgaW4gaXRlbSkpIHtcclxuICAgICAgICAgICAgaXRlbS5mdWxsQWRkcmVzcyA9IGl0ZW0uYWRkcmVzcy5jaXR5ICsgJywgJyArIGl0ZW0uYWRkcmVzcy5zdHJlZXQgKyAnLCAnICsgaXRlbS5hZGRyZXNzLnN1aXRlO1xyXG4gICAgICAgICAgICBpdGVtLndlYnNpdGUgPSAoIX5pdGVtLndlYnNpdGUuaW5kZXhPZignaHR0cCcpKSA/ICdodHRwOi8vJyArIGl0ZW0ud2Vic2l0ZSA6IGl0ZW0ud2Vic2l0ZTtcclxuICAgICAgICAgICAgaXRlbS5hdmF0YXJVcmwgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvdGh1bWIvd29tZW4vJyArIGl0ZW0uaWQgKyAnLmpwZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBSZXN0YW5ndWxhcldpdGhBdXRoLndpdGhDb25maWcoZnVuY3Rpb24oUmVzdGFuZ3VsYXJDb25maWd1cmVyKSB7XHJcbiAgICAgICAgUmVzdGFuZ3VsYXJDb25maWd1cmVyLmFkZFJlc3BvbnNlSW50ZXJjZXB0b3IoZnVuY3Rpb24oZGF0YSwgb3BlcmF0aW9uLCB3aGF0KSB7XHJcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiAhPSAncG9zdCcgJiYgb3BlcmF0aW9uICE9ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvdXNlcnMvdXNlcnMuYXBpLmNvbmZpZy5qc1xuICoqLyIsImltcG9ydCB1c2VyQXZhdGFyVGVtcGxhdGUgZnJvbSAnLi92aWV3cy91c2VyLWF2YXRhci5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJBdmF0YXJEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdFJztcclxuICAgICAgICB0aGlzLnJlcGxhY2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlID0ge1xyXG4gICAgICAgICAgICBhdmF0YXJVcmw6ICc9J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB1c2VyQXZhdGFyVGVtcGxhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXIuYXZhdGFyLmRpcmVjdGl2ZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdj4gPGltZyBuZy1zcmM9XFxcInt7YXZhdGFyVXJsIHx8ICdodHRwOi8vcHNkZXhwb3J0LmNvbS9zdG9yYWdlL2F2YXRhcnMvZGVmYXVsdC5wbmcnfX1cXFwiIGNsYXNzPVxcXCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXFxcIj4gPGJyLz4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcInVzZXJzL3ZpZXdzL3VzZXItYXZhdGFyLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdmlld3MvdXNlci1hdmF0YXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdXNlckNhcmRUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL3VzZXItY2FyZC5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDYXJkRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgdXNlcjogJz0nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHVzZXJDYXJkVGVtcGxhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXItY2FyZC91c2VyLmNhcmQuZGlyZWN0aXZlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1pbmZvXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMjBweFxcXCI+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPiA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj4gPGEgdWktc3JlZj1cXFwidXNlcih7dXNlcklkOiB1c2VyLmlkfSlcXFwiIG5nLWJpbmQ9XFxcInVzZXIudXNlcm5hbWVcXFwiPjwvYT4gPC9oMz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBjb2wtbGctM1xcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+IDxhdmF0YXIgYXZhdGFyLXVybD1cXFwidXNlci5hdmF0YXJVcmxcXFwiPjwvYXZhdGFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTkgY29sLWxnLTlcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXVzZXItaW5mb3JtYXRpb25cXFwiPiA8dGJvZHk+IDx0cj4gPHRkPtCY0LzRjzwvdGQ+IDx0ZCBuZy1iaW5kPVxcXCJ1c2VyLm5hbWVcXFwiPjwvdGQ+IDwvdHI+IDx0cj4gPHRkPtCi0LXQu9C10YTQvtC9PC90ZD4gPHRkIG5nLWJpbmQ9XFxcInVzZXIucGhvbmVcXFwiPjwvdGQ+IDwvdHI+IDx0cj4gPHRkPldlYnNpdGU8L3RkPiA8dGQ+PGEgbmctaHJlZj1cXFwie3t1c2VyLndlYnNpdGV9fVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIG5nLWJpbmQ9XFxcInVzZXIud2Vic2l0ZVxcXCI+PC9hPjwvdGQ+IDwvdHI+IDx0cj4gPHRkPtCQ0LTRgNC10YE8L3RkPiA8dGQgbmctYmluZD1cXFwidXNlci5mdWxsQWRkcmVzc1xcXCI+PC90ZD4gPC90cj4gPHRyPiA8dGQ+RW1haWw8L3RkPiA8dGQ+PGEgbmctaHJlZj1cXFwibWFpbHRvOnt7dXNlci5lbWFpbH19XFxcIiBuZy1iaW5kPVxcXCJ1c2VyLmVtYWlsXFxcIj48L2E+PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxhIHVpLXNyZWY9XFxcInVzZXJFZGl0KHt1c2VySWQ6IHVzZXIuaWR9KVxcXCI+JiM5OTk3OyBFZGl0PC9hPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJ1c2VyLWNhcmQvdmlld3MvdXNlci1jYXJkLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdXNlci1jYXJkL3ZpZXdzL3VzZXItY2FyZC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB1c2VyQ2FyZEVkaXRUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL3VzZXItY2FyZC1lZGl0Lmh0bWwnO1xyXG5pbXBvcnQgVXNlckNhcmRFZGl0Q29udHJvbGxlciBmcm9tICcuL3VzZXIuY2FyZC5lZGl0LmNvbnRyb2xsZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNhcmRFZGl0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgdXNlcjogJz0nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gVXNlckNhcmRFZGl0Q29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICd1c2VyQ2FyZEVkaXRDdHJsJztcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHVzZXJDYXJkRWRpdFRlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC91c2Vycy91c2VyLWVkaXQvdXNlci5jYXJkLmVkaXQuZGlyZWN0aXZlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1pbmZvXFxcIiBuZy1zaG93PVxcXCIhISh1c2VyICYmIHVzZXIuaWQpXFxcIj4gPGZvcm0+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPiA8aDMgY2xhc3M9XFxcInBhbmVsLXRpdGxlXFxcIj4gPGlucHV0IG5nLW1vZGVsPVxcXCJ1c2VyLm5hbWVcXFwiPlxcbjxhIG5nLWlmPVxcXCJ1c2VyLmlkXFxcIiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwicHVsbC1yaWdodCBiZy1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJ1c2VyQ2FyZEVkaXRDdHJsLmRlbGV0ZSh1c2VyKVxcXCI+JiMxMDAwODsgRGVsZXRlPC9hPiA8L2gzPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGNvbC1sZy0zXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj4gPGF2YXRhciBhdmF0YXItdXJsPVxcXCJ1c2VyLmF2YXRhclVybFxcXCI+PC9hdmF0YXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOSBjb2wtbGctOVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtdXNlci1pbmZvcm1hdGlvblxcXCI+IDx0Ym9keT4gPHRyPiA8dGQ+0KLQtdC70LXRhNC+0L08L3RkPiA8dGQ+PGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCIgbmctbW9kZWw9XFxcInVzZXIucGhvbmVcXFwiPjwvdGQ+IDwvdHI+IDx0cj4gPHRkPldlYnNpdGU8L3RkPiA8dGQ+PGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCIgbmctbW9kZWw9XFxcInVzZXIud2Vic2l0ZVxcXCI+PC90ZD4gPC90cj4gPHRyPiA8dGQ+0JDQtNGA0LXRgTwvdGQ+IDx0ZD48aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIiBuZy1tb2RlbD1cXFwidXNlci5mdWxsQWRkcmVzc1xcXCI+PC90ZD4gPC90cj4gPHRyPiA8dGQ+RW1haWw8L3RkPiA8dGQ+PGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCIgbmctbW9kZWw9XFxcInVzZXIuZW1haWxcXFwiPjwvdGQ+IDwvdHI+PC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxhIGhyZWY9XFxcIiNcXFwiIG5nLWNsaWNrPVxcXCJ1c2VyQ2FyZEVkaXRDdHJsLnNhdmUodXNlcilcXFwiPiYjMTAwMDQ7IFNhdmU8L2E+IDwvZGl2PiA8L2Rpdj4gPC9mb3JtPiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwidXNlci1lZGl0L3ZpZXdzL3VzZXItY2FyZC1lZGl0Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdXNlcnMvdXNlci1lZGl0L3ZpZXdzL3VzZXItY2FyZC1lZGl0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckNhcmRFZGl0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihVc2VycywgJHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5Vc2VycyA9IFVzZXJzO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUodXNlcil7XHJcbiAgICAgICAgbGV0IHVzZXJTYXZlUHJvbWlzZTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIuaWQpIHtcclxuICAgICAgICAgICAgdXNlclNhdmVQcm9taXNlID0gdGhpcy5Vc2Vycy51cGRhdGUodXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXNlclNhdmVQcm9taXNlID0gdGhpcy5Vc2Vycy5jcmVhdGUodXNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VyU2F2ZVByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCd1c2Vyc0xpc3QnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodXNlcikge1xyXG4gICAgICAgIHRoaXMuVXNlcnMuZGVsZXRlKHVzZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbygndXNlcnNMaXN0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5jb250cm9sbGVyLmpzXG4gKiovIiwiaW1wb3J0IG1haWxib3hSb3V0ZXJDb25maWcgZnJvbSAnLi9tYWlsYm94LnJvdXRlJztcclxuXHJcbmltcG9ydCBGb2xkZXJzIGZyb20gJy4vZm9sZGVycy9mb2xkZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgRm9sZGVyc0xpc3REaXJlY3RpdmUgZnJvbSAnLi9mb2xkZXJzL2ZvbGRlcnMubGlzdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgRm9sZGVySXRlbURpcmVjdGl2ZSBmcm9tICcuL2ZvbGRlcnMvZm9sZGVyLml0ZW0uZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCBMZXR0ZXJzIGZyb20gJy4vbGV0dGVycy9sZXR0ZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgTGV0dGVyc0xpc3REaXJlY3RpdmUgZnJvbSAnLi9sZXR0ZXJzL2xldHRlcnMubGlzdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgTGV0dGVyc1Nob3J0Vmlld0RpcmVjdGl2ZSBmcm9tICcuL2xldHRlcnMvbGV0dGVyLnNob3J0LnZpZXcuZGlyZWN0aXZlJztcclxuaW1wb3J0IExldHRlckZ1bGxWaWV3RGlyZWN0aXZlIGZyb20gJy4vbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxubGV0IG1haWxib3ggPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdtYWlsYm94JywgW10pXHJcbiAgICAuY29uZmlnKG1haWxib3hSb3V0ZXJDb25maWcpXHJcblxyXG4gICAgLnNlcnZpY2UoJ0ZvbGRlcnMnLCBGb2xkZXJzKVxyXG4gICAgLmRpcmVjdGl2ZSgnZm9sZGVyc0xpc3QnLCAoKSA9PiBuZXcgRm9sZGVyc0xpc3REaXJlY3RpdmUoKSlcclxuICAgIC5kaXJlY3RpdmUoJ2ZvbGRlckl0ZW0nLCAoKSA9PiBuZXcgRm9sZGVySXRlbURpcmVjdGl2ZSgpKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdMZXR0ZXJzJywgTGV0dGVycylcclxuICAgIC5kaXJlY3RpdmUoJ2xldHRlcnNMaXN0JywgKCkgPT4gbmV3IExldHRlcnNMaXN0RGlyZWN0aXZlKCkpXHJcbiAgICAuZGlyZWN0aXZlKCdsZXR0ZXJTaG9ydFZpZXcnLCAoKSA9PiBuZXcgTGV0dGVyc1Nob3J0Vmlld0RpcmVjdGl2ZSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgnbGV0dGVyRnVsbHZpZXcnLCAoKSA9PiBuZXcgTGV0dGVyRnVsbFZpZXdEaXJlY3RpdmUoKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWlsYm94ID0gbWFpbGJveC5uYW1lO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L21haWxib3gubW9kdWxlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbGJveFJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdmb2xkZXJzJywge1xyXG4gICAgICAgICAgICBwYXJlbnQ6ICdtYWluJyxcclxuICAgICAgICAgICAgdXJsOiAnL2ZvbGRlcnMvOmZvbGRlcklkJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8Zm9sZGVycy1saXN0PjwvZm9sZGVycy1saXN0PicsXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgZm9sZGVySWQ6ICcxJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdmb2xkZXJzLmxldHRlcnMnLCB7XHJcbiAgICAgICAgICAgICAgICAvL3BhcmVudDogJ2ZvbGRlcnMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2xldHRlcnMnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8bGV0dGVycy1saXN0PjwvbGV0dGVycy1saXN0PidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGF0ZSgnZm9sZGVycy5sZXR0ZXJzLmxldHRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3BhcmVudDogJ2xldHRlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy86bGV0dGVySWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGxldHRlci1mdWxsdmlldz48L2xldHRlci1mdWxsdmlldz4nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9tYWlsLWJveC9tYWlsYm94LnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9mb2xkZXJzID0gW3tcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJveCcsXHJcbiAgICAgICAgICAgIGNvdW50OiA4XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogJ1NlbnQnLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTcGFtJyxcclxuICAgICAgICAgICAgY291bnQ6IDhcclxuICAgICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb2xkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJzO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvZm9sZGVycy9mb2xkZXJzLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgRm9sZGVyc0xpc3RDb250cm9sbGVyIGZyb20gJy4vZm9sZGVycy5saXN0LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgZm9sZGVyc0xpc3RUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2ZvbGRlcnMtbGlzdC5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlcnNMaXN0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IEZvbGRlcnNMaXN0Q29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICdmb2xkZXJzQ3RybCc7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBmb2xkZXJzTGlzdFRlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9tYWlsLWJveC9mb2xkZXJzL2ZvbGRlcnMubGlzdC5kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xkZXJzTGlzdENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoRm9sZGVycywgJHN0YXRlUGFyYW1zLCAkc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUZvbGRlciA9ICRzdGF0ZVBhcmFtcy5mb2xkZXJJZCB8fCAxO1xyXG5cclxuICAgICAgICB0aGlzLmZvbGRlcnMgPSBGb2xkZXJzLmdldEZvbGRlcnMoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5saXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC0yIHNpZGViYXJcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtc2lkZWJhclxcXCI+ICA8Zm9sZGVyLWl0ZW0gbmctcmVwZWF0PVxcXCJmb2xkZXIgaW4gZm9sZGVyc0N0cmwuZm9sZGVyc1xcXCIgZm9sZGVyPVxcXCJmb2xkZXJcXFwiIGFjdGl2ZT1cXFwiZm9sZGVyc0N0cmwuYWN0aXZlRm9sZGVyID09IGZvbGRlci5pZFxcXCIgdWktc3JlZj1cXFwiZm9sZGVycy5sZXR0ZXJzKHsgZm9sZGVySWQ6IGZvbGRlci5pZCB9KVxcXCI+IDwvZm9sZGVyLWl0ZW0+IDwvdWw+IDwvZGl2PiA8ZGl2IHVpLXZpZXc+PC9kaXY+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJmb2xkZXJzL3ZpZXdzL2ZvbGRlcnMtbGlzdC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWwtYm94L2ZvbGRlcnMvdmlld3MvZm9sZGVycy1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGZvbGRlckl0ZW1UZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2ZvbGRlci1pdGVtLmh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVySXRlbURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAge1xyXG4gICAgICAgICAgICBmb2xkZXI6IFwiPVwiLFxyXG4gICAgICAgICAgICBhY3RpdmU6IFwiPVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZvbGRlckl0ZW1UZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvZm9sZGVycy9mb2xkZXIuaXRlbS5kaXJlY3RpdmUuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxsaSBuZy1jbGFzcz1cXFwieydhY3RpdmUnOiBhY3RpdmV9XFxcIj4gPGEgaHJlZj1cXFwiI1xcXCI+IDxzcGFuIG5nLWJpbmQ9XFxcImZvbGRlci5uYW1lXFxcIj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBuZy1iaW5kPVxcXCJmb2xkZXIuY291bnRcXFwiPjwvc3Bhbj4gPC9hPiA8L2xpPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJmb2xkZXJzL3ZpZXdzL2ZvbGRlci1pdGVtLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC1ib3gvZm9sZGVycy92aWV3cy9mb2xkZXItaXRlbS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlcnMge1xyXG4gICAgY29uc3RydWN0b3IoUmVzdGFuZ3VsYXJXaXRoQXV0aCkge1xyXG4gICAgICAgIHRoaXMuUmVzdGFuZ3VsYXJXaXRoQXV0aCA9IFJlc3Rhbmd1bGFyV2l0aEF1dGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGV0dGVycyhmb2xkZXJJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlJlc3Rhbmd1bGFyV2l0aEF1dGgub25lKCd1c2VycycsIGZvbGRlcklkKS5nZXRMaXN0KCdwb3N0cycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExldHRlcihsZXR0ZXJJZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlJlc3Rhbmd1bGFyV2l0aEF1dGgub25lKCdwb3N0cycsIGxldHRlcklkKS5nZXQoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVycy5zZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IExldHRlcnNMaXN0Q29udHJvbGxlciBmcm9tICcuL2xldHRlcnMubGlzdC5jb250cm9sbGVyJztcclxuaW1wb3J0IGxldHRlcnNMaXN0VGVtcGxhdGUgZnJvbSAnLi92aWV3cy9sZXR0ZXJzLWxpc3QuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXJzTGlzdERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBMZXR0ZXJzTGlzdENvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnbGV0dGVyc0N0cmwnO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gbGV0dGVyc0xpc3RUZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLmxpc3QuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyc0xpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKExldHRlcnMsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVGb2xkZXIgPSAkc3RhdGVQYXJhbXMuZm9sZGVySWQgfHwgMTtcclxuXHJcbiAgICAgICAgTGV0dGVycy5nZXRMZXR0ZXJzKHRoaXMuYWN0aXZlRm9sZGVyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlcnMgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZm9sZGVycy5sZXR0ZXJzLmxldHRlcicsIHsgZm9sZGVySWQ6IHRoaXMuYWN0aXZlRm9sZGVyLCBsZXR0ZXJJZDogdGhpcy5sZXR0ZXJzWzBdLmlkIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLmxpc3QuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdj4gPGRpdiBjbGFzcz1cXFwiY29sLTMgY29sLW9mZnNldC0yIGxldHRlcnMtbGlzdCBzaWRlYmFyXFxcIj4gIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCI+IDxsZXR0ZXItc2hvcnQtdmlldyBuZy1yZXBlYXQ9XFxcImxldHRlciBpbiBsZXR0ZXJzQ3RybC5sZXR0ZXJzXFxcIiBsZXR0ZXI9XFxcImxldHRlclxcXCIgdWktc3JlZj1cXFwiZm9sZGVycy5sZXR0ZXJzLmxldHRlcih7IGxldHRlcklkOiBsZXR0ZXIuaWQgfSlcXFwiPiA8L2xldHRlci1zaG9ydC12aWV3PiA8L3VsPiA8L2Rpdj4gPGRpdiB1aS12aWV3IGNsYXNzPVxcXCJjb2wtNyBjb2wtb2Zmc2V0LTVcXFwiPjwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibGV0dGVycy92aWV3cy9sZXR0ZXJzLWxpc3QuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYWlsLWJveC9sZXR0ZXJzL3ZpZXdzL2xldHRlcnMtbGlzdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBsZXR0ZXJTaG9ydFZpZXdUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2xldHRlci1zaG9ydC12aWV3Lmh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyc1Nob3J0Vmlld0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7XHJcbiAgICAgICAgICAgIGxldHRlcjogXCI9XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gbGV0dGVyU2hvcnRWaWV3VGVtcGxhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVyLnNob3J0LnZpZXcuZGlyZWN0aXZlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8bGkgY2xhc3M9XFxcImJzLWNhbGxvdXQgYnMtY2FsbG91dC1pbmZvXFxcIj4gPGg0IG5nLWJpbmQ9XFxcImxldHRlci50aXRsZVxcXCI+PC9oND4gPHAgbmctYmluZD1cXFwibGV0dGVyLmJvZHlcXFwiPjwvcD4gPC9saT5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibGV0dGVycy92aWV3cy9sZXR0ZXItc2hvcnQtdmlldy5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWwtYm94L2xldHRlcnMvdmlld3MvbGV0dGVyLXNob3J0LXZpZXcuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgTGV0dGVyRnVsbFZpZXdDb250cm9sbGVyIGZyb20gJy4vbGV0dGVyLmZ1bGwudmlldy5jb250cm9sbGVyJztcclxuaW1wb3J0IGxldHRlckZ1bGxWaWV3VGVtcGxhdGUgZnJvbSAnLi92aWV3cy9sZXR0ZXItZnVsbC12aWV3Lmh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyRnVsbFZpZXdEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdFJztcclxuICAgICAgICB0aGlzLnJlcGxhY2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlID0ge307XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTGV0dGVyRnVsbFZpZXdDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ2xldHRlckN0cmwnO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gbGV0dGVyRnVsbFZpZXdUZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1leGFtcGxlL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlckZ1bGxWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihMZXR0ZXJzLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUxldHRlciA9ICRzdGF0ZVBhcmFtcy5sZXR0ZXJJZCB8fCAxO1xyXG5cclxuICAgICAgICBMZXR0ZXJzLmdldExldHRlcih0aGlzLmFjdGl2ZUxldHRlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXIgPSByZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVyLmZ1bGwudmlldy5jb250cm9sbGVyLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJsZXR0ZXItZnVsbHZpZXdcXFwiPiAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIiBuZy1zaG93PVxcXCJsZXR0ZXJDdHJsLmxldHRlciAmJiBsZXR0ZXJDdHJsLmxldHRlci5ib2R5ICYmIGxldHRlckN0cmwubGV0dGVyLmJvZHkubGVuZ3RoXFxcIj4gPGgyIG5nLWJpbmQ9XFxcImxldHRlckN0cmwubGV0dGVyLnRpdGxlXFxcIj48L2gyPiA8cCBuZy1iaW5kPVxcXCJsZXR0ZXJDdHJsLmxldHRlci5ib2R5XFxcIj48L3A+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwibGV0dGVycy92aWV3cy9sZXR0ZXItZnVsbC12aWV3Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC1ib3gvbGV0dGVycy92aWV3cy9sZXR0ZXItZnVsbC12aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGF1dGhSb3V0ZXJDb25maWcgZnJvbSAnLi9hdXRoLnJvdXRlJztcclxuaW1wb3J0IEF1dGhNb2NrIGZyb20gJy4vYXV0aC5tb2NrJztcclxuXHJcbmltcG9ydCBBdXRoIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IEF1dGhUb2tlbiBmcm9tICcuL2F1dGgudG9rZW4uc2VydmljZSc7XHJcblxyXG5sZXQgYXV0aCA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2F1dGgnLCBbJ25nTW9ja0UyRSddKVxyXG4gICAgLmNvbmZpZyhhdXRoUm91dGVyQ29uZmlnKVxyXG4gICAgLnJ1bigoJGh0dHBCYWNrZW5kLCBBdXRoVG9rZW4pID0+IG5ldyBBdXRoTW9jaygkaHR0cEJhY2tlbmQsIEF1dGhUb2tlbikpXHJcblxyXG4gICAgLnNlcnZpY2UoJ0F1dGgnLCBBdXRoKVxyXG4gICAgLnNlcnZpY2UoJ0F1dGhUb2tlbicsIEF1dGhUb2tlbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoID0gYXV0aC5uYW1lO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUuanNcbiAqKi8iLCJpbXBvcnQgbG9naW5UZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2xvZ2luLmh0bWwnO1xyXG5pbXBvcnQgQXV0aFJvdXRlQ29udHJvbGxlciBmcm9tICcuL2F1dGgucm91dGUuY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoUm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2xvZ2luJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbG9naW5UZW1wbGF0ZSxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW5DdHJsJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogQXV0aFJvdXRlQ29udHJvbGxlclxyXG4gICAgICAgIH0pXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2F1dGgvYXV0aC5yb3V0ZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPGZvcm0gY2xhc3M9XFxcImZvcm0tc2lnbmluXFxcIj4gPHAgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHggMjBweFxcXCIgY2xhc3M9XFxcImJnLWRhbmdlclxcXCIgbmctc2hvdz1cXFwibG9naW5DdHJsLmxvZ2luRXJyb3JcXFwiPtCe0YjQuNCx0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4ITwvcD4gPGgyIGNsYXNzPVxcXCJmb3JtLXNpZ25pbi1oZWFkaW5nXFxcIj5QbGVhc2Ugc2lnbiBpbjwvaDI+IDxsYWJlbCBmb3I9XFxcImlucHV0RW1haWxcXFwiIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBpZD1cXFwiaW5wdXRFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsIGFkZHJlc3NcXFwiIHJlcXVpcmVkPVxcXCJcXFwiIG5nLW1vZGVsPVxcXCJsb2dpbkN0cmwuZW1haWxcXFwiLz4gPGxhYmVsIGZvcj1cXFwiaW5wdXRQYXNzd29yZFxcXCIgY2xhc3M9XFxcInNyLW9ubHlcXFwiPlBhc3N3b3JkPC9sYWJlbD4gPGJyLz4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwiaW5wdXRQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiByZXF1aXJlZD1cXFwiXFxcIiBuZy1tb2RlbD1cXFwibG9naW5DdHJsLnBhc3N3b3JkXFxcIi8+IDxici8+IDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj4gPGxhYmVsPiA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHZhbHVlPVxcXCJyZW1lbWJlci1tZVxcXCI+IFJlbWVtYmVyIG1lIDwvbGFiZWw+IDwvZGl2PiA8YnIvPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBuZy1jbGljaz1cXFwibG9naW5DdHJsLmxvZ2luKGxvZ2luQ3RybC5lbWFpbCwgbG9naW5DdHJsLnBhc3N3b3JkKVxcXCI+U2lnbiBpbjwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJhdXRoL3ZpZXdzL2xvZ2luLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXV0aC92aWV3cy9sb2dpbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhSb3V0ZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoQXV0aCwgJHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5BdXRoID0gQXV0aDtcclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLkF1dGguY2hlY2tBdXRoKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ2ZvbGRlcnMubGV0dGVycycsIHtmb2xkZXJJZDogMX0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hdXRoL2F1dGgucm91dGUuY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhNb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yICgkaHR0cEJhY2tlbmQsIEF1dGhUb2tlbikge1xyXG4gICAgICAgICRodHRwQmFja2VuZC53aGVuUE9TVCgvc2Vzc2lvbnMuKi8pLnJlc3BvbmQoKG1ldGhvZCwgdXJsLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjcmVkZW50aWFscyA9IEpTT04ucGFyc2UoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZihjcmVkZW50aWFscy5lbWFpbCA9PT0gJ3h6QHh6LnJ1JyAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gJzEyMycpe1xyXG4gICAgICAgICAgICAgICAgQXV0aFRva2VuLnRva2VuU2V0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIwMCwge21lc3NhZ2U6ICdBdXRoIFN1Y2Nlc3MnfSwge31dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0MDEsIHtlcnJvcjogJ0xvZ2luIG9yIHBhc3N3b3JkIGFyZSBub3QgY29ycmVjdCd9LCB7fV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGh0dHBCYWNrZW5kLndoZW5ERUxFVEUoL3Nlc3Npb25zLiovKS5yZXNwb25kKCgpID0+IHtcclxuICAgICAgICAgICAgaWYoIUF1dGhUb2tlbi50b2tlbkNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNDAxLCB7ZXJyb3I6ICdMb2dpbiBvciBwYXNzd29yZCBhcmUgbm90IGNvcnJlY3QnfSwge31dO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBBdXRoVG9rZW4uZGVsZXRlQ29va2llKCdhdXRoVG9rZW4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyMDAsIHt9LCB7fV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2F1dGgvYXV0aC5tb2NrLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihSZXN0YW5ndWxhcldpdGhBdXRoLCAkcSkge1xyXG4gICAgICAgIHRoaXMuUmVzdGFuZ3VsYXJXaXRoQXV0aCA9IFJlc3Rhbmd1bGFyV2l0aEF1dGg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXV0aChlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgICAgICBsZXQgZGVmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuUmVzdGFuZ3VsYXJXaXRoQXV0aC5hbGwoJ3Nlc3Npb25zJykucG9zdCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4oKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoKTtcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlZmVyLnJlamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlc3Npb24ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hdXRoL2F1dGguc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHN0YXRlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICB0b2tlblNldCgpIHtcclxuICAgICAgICB0aGlzLnNldENvb2tpZSgnYXV0aFRva2VuJywgJ2JkMmU5MzJhMDNhMTkyMTdhYjVhMWRmYjVhYTkzMzQwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5DaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb29raWUoJ2F1dGhUb2tlbicpICE9PSAnYmQyZTkzMmEwM2ExOTIxN2FiNWExZGZiNWFhOTMzNDAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0sIDAsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT0gXCJudW1iZXJcIiAmJiBleHBpcmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDApO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzID0gZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcy50b1VUQ1N0cmluZykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVkQ29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBwcm9wTmFtZTtcclxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG9wdGlvbnNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgICAgICBzZXRDb29raWUobmFtZSwgXCJcIiwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hdXRoL2F1dGgudG9rZW4uc2VydmljZS5qc1xuICoqLyIsImltcG9ydCBBcGlNb2NrIGZyb20gJy4vYXBpLm1vY2snO1xyXG5pbXBvcnQgUmVzdGFuZ3VsYXJXaXRoQXV0aCBmcm9tICcuL2FwaS5yZXN0YW5ndWxhcic7XHJcblxyXG5sZXQgYXBpID0gYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnYXBpLWNvcmUnLCBbJ25nTW9ja0UyRScsICdyZXN0YW5ndWxhciddKVxyXG4gICAgLnJ1bigoJGh0dHBCYWNrZW5kKSA9PiBuZXcgQXBpTW9jaygkaHR0cEJhY2tlbmQpKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdSZXN0YW5ndWxhcldpdGhBdXRoJywgUmVzdGFuZ3VsYXJXaXRoQXV0aCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGkgPSBhcGkubmFtZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hcGktY29yZS9hcGkuY29yZS5tb2R1bGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlNb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yICgkaHR0cEJhY2tlbmQpIHtcclxuICAgICAgICAkaHR0cEJhY2tlbmQud2hlbkdFVCgvXmh0dHA6XFwvXFwvanNvbnBsYWNlaG9sZGVyXFwudHlwaWNvZGVcXC5jb20vKS5wYXNzVGhyb3VnaCgpO1xyXG5cclxuICAgICAgICAkaHR0cEJhY2tlbmQud2hlblBPU1QoL15odHRwOlxcL1xcL2pzb25wbGFjZWhvbGRlclxcLnR5cGljb2RlXFwuY29tXFwvdXNlcnMvKS5yZXNwb25kKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFsyMDAsIHt9LCB7fV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJGh0dHBCYWNrZW5kLndoZW5ERUxFVEUoL15odHRwOlxcL1xcL2pzb25wbGFjZWhvbGRlclxcLnR5cGljb2RlXFwuY29tXFwvdXNlcnMvKS5yZXNwb25kKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFsyMDAsIHt9LCB7fV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItZXhhbXBsZS9zcmMvYXBwL2FwaS1jb3JlL2FwaS5tb2NrLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdGFuZ3VsYXJXaXRoQXV0aChSZXN0YW5ndWxhciwgJGluamVjdG9yLCAkaHR0cCkge1xyXG4gICAgcmV0dXJuIFJlc3Rhbmd1bGFyLndpdGhDb25maWcoZnVuY3Rpb24oUmVzdGFuZ3VsYXJDb25maWd1cmVyKSB7XHJcbiAgICAgICAgUmVzdGFuZ3VsYXJDb25maWd1cmVyLnNldEVycm9ySW50ZXJjZXB0b3IoZnVuY3Rpb24ocmVzcG9uc2UsIGRlZmVycmVkLCByZXNwb25zZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAkaW5qZWN0b3IuZ2V0KCckc3RhdGUnKS5nbygnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICRodHRwKHJlc3BvbnNlLmNvbmZpZykudGhlbihyZXNwb25zZUhhbmRsZXIsIGRlZmVycmVkLnJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWV4YW1wbGUvc3JjL2FwcC9hcGktY29yZS9hcGkucmVzdGFuZ3VsYXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUlBO0FBQUE7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFIQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQVJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOztBQVFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWRBOzs7QUFBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBbkJBOzs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBTUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXpCQTs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7O0FBaUJBO0FBQ0E7QUFDQTs7O0FBbkJBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFYQTs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBSkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU1BOzs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQWRBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQU9BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXpCQTs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNURBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9