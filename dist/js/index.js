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
	var v1="<div class=\"row\"> <nav class=\"navbar navbar-inverse navbar-fixed-top\"> <div class=\"container-fluid\"> <div id=\"navbar\"> <a class=\"navbar-brand\" ui-sref=\"letters({ folderId: 1 })\">E-Mail</a>\n<a class=\"navbar-brand\" ui-sref=\"usersList\">Users</a> <form class=\"navbar-form navbar-right\"> <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"> </form> </div> </div> </nav> <div ui-view class=\"row\"></div> </div>";
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

	var _userCardUserCardDirectiveJs = __webpack_require__(56);

	var _userCardUserCardDirectiveJs2 = _interopRequireDefault(_userCardUserCardDirectiveJs);

	var _userEditUserCardEditDirectiveJs = __webpack_require__(58);

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

	var _userEditUsersEditControllerJs = __webpack_require__(54);

	var _userEditUsersEditControllerJs2 = _interopRequireDefault(_userEditUsersEditControllerJs);

	var _viewsUsersHtml = __webpack_require__(15);

	var _viewsUsersHtml2 = _interopRequireDefault(_viewsUsersHtml);

	var _viewsUsersListHtml = __webpack_require__(16);

	var _viewsUsersListHtml2 = _interopRequireDefault(_viewsUsersListHtml);

	var _userEditViewsUserEditHtml = __webpack_require__(55);

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
/* 10 */,
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
/* 17 */,
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
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

/***/ },
/* 54 */
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
/* 55 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<user-card-edit user=\"userEditCtrl.user\"></user-card-edit>";
	ngModule.run(["$templateCache",function(c){c.put("user-edit/views/user-edit.html",v1)}]);
	module.exports=v1;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsUserCardHtml = __webpack_require__(57);

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
/* 57 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-info\" style=\"margin-top: 20px\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\"> <a ui-sref=\"user({userId: user.id})\" ng-bind=\"user.username\"></a> </h3> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-3 col-lg-3\" align=\"center\"> <avatar avatar-url=\"user.avatarUrl\"></avatar> </div> <div class=\"col-md-9 col-lg-9\"> <table class=\"table table-user-information\"> <tbody> <tr> <td>Имя</td> <td ng-bind=\"user.name\"></td> </tr> <tr> <td>Телефон</td> <td ng-bind=\"user.phone\"></td> </tr> <tr> <td>Website</td> <td><a ng-href=\"{{user.website}}\" target=\"_blank\" ng-bind=\"user.website\"></a></td> </tr> <tr> <td>Адрес</td> <td ng-bind=\"user.fullAddress\"></td> </tr> <tr> <td>Email</td> <td><a ng-href=\"mailto:{{user.email}}\" ng-bind=\"user.email\"></a></td> </tr> </tbody> </table> </div> </div> </div> <div class=\"panel-footer\"> <div class=\"text-right\"> <a ui-sref=\"userEdit({userId: user.id})\">&#9997; Edit</a> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("user-card/views/user-card.html",v1)}]);
	module.exports=v1;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(6)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _viewsUserCardEditHtml = __webpack_require__(59);

	var _viewsUserCardEditHtml2 = _interopRequireDefault(_viewsUserCardEditHtml);

	var _userCardEditControllerJs = __webpack_require__(60);

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
/* 59 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"panel panel-info\" ng-show=\"!!(user && user.id)\"> <form> <div class=\"panel-heading\"> <h3 class=\"panel-title\"> <input ng-model=\"user.name\">\n<a ng-if=\"user.id\" href=\"#\" class=\"pull-right bg-danger\" ng-click=\"userCardEditCtrl.delete(user)\">&#10008; Delete</a> </h3> </div> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-md-3 col-lg-3\" align=\"center\"> <avatar avatar-url=\"user.avatarUrl\"></avatar> </div> <div class=\"col-md-9 col-lg-9\"> <table class=\"table table-user-information\"> <tbody> <tr> <td>Телефон</td> <td><input style=\"width: 100%\" ng-model=\"user.phone\"></td> </tr> <tr> <td>Website</td> <td><input style=\"width: 100%\" ng-model=\"user.website\"></td> </tr> <tr> <td>Адрес</td> <td><input style=\"width: 100%\" ng-model=\"user.fullAddress\"></td> </tr> <tr> <td>Email</td> <td><input style=\"width: 100%\" ng-model=\"user.email\"></td> </tr></tbody> </table> </div> </div> </div> <div class=\"panel-footer\"> <div class=\"text-right\"> <a href=\"#\" ng-click=\"userCardEditCtrl.save(user)\">&#10004; Save</a> </div> </div> </form> </div>";
	ngModule.run(["$templateCache",function(c){c.put("user-edit/views/user-card-edit.html",v1)}]);
	module.exports=v1;

/***/ },
/* 60 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTY5N2JmNTU0YThlMTMyZDJiZGYiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbWFpbi1wYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXJzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvdXNlcnMvdXNlcnMucm91dGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL3VzZXJzL3ZpZXdzL3VzZXJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdmlld3MvdXNlcnMtbGlzdC5odG1sIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2Vycy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2Vycy5hcGkuY29uZmlnLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2VyLmF2YXRhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdmlld3MvdXNlci1hdmF0YXIuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbWFpbGJveC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L21haWxib3gucm91dGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9tYWlsLWJveC9mb2xkZXJzL2ZvbGRlcnMubGlzdC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5saXN0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC1ib3gvZm9sZGVycy92aWV3cy9mb2xkZXJzLWxpc3QuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvZm9sZGVycy9mb2xkZXIuaXRlbS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC1ib3gvZm9sZGVycy92aWV3cy9mb2xkZXItaXRlbS5odG1sIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9tYWlsLWJveC9sZXR0ZXJzL2xldHRlcnMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLmxpc3QuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9tYWlsLWJveC9sZXR0ZXJzL2xldHRlcnMubGlzdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21haWwtYm94L2xldHRlcnMvdmlld3MvbGV0dGVycy1saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVyLnNob3J0LnZpZXcuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL21haWwtYm94L2xldHRlcnMvdmlld3MvbGV0dGVyLXNob3J0LXZpZXcuaHRtbCIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbC1ib3gvbGV0dGVycy92aWV3cy9sZXR0ZXItZnVsbC12aWV3Lmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2F1dGgvYXV0aC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hdXRoL3ZpZXdzL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2F1dGgvYXV0aC5yb3V0ZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9hdXRoL2F1dGgubW9jay5qcyIsIndlYnBhY2s6Ly8vQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2F1dGgvYXV0aC50b2tlbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9hcGktY29yZS9hcGkuY29yZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2FwaS1jb3JlL2FwaS5tb2NrLmpzIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9hcGktY29yZS9hcGkucmVzdGFuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2Vycy5lZGl0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdXNlci1lZGl0L3ZpZXdzL3VzZXItZWRpdC5odG1sIiwid2VicGFjazovLy9DOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2VyLWNhcmQvdXNlci5jYXJkLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi91c2Vycy91c2VyLWNhcmQvdmlld3MvdXNlci1jYXJkLmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdXNlci1lZGl0L3ZpZXdzL3VzZXItY2FyZC1lZGl0Lmh0bWwiLCJ3ZWJwYWNrOi8vL0M6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTY5N2JmNTU0YThlMTMyZDJiZGZcbiAqKi8iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tICcuL2luZGV4LnJvdXRlJztcclxuaW1wb3J0IFJ1bkNvbnRyb2xsZXIgZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5cclxuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnMvdXNlcnMubW9kdWxlJztcclxuaW1wb3J0IG1haWxib3ggZnJvbSAnLi9tYWlsLWJveC9tYWlsYm94Lm1vZHVsZSc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGktY29yZS9hcGkuY29yZS5tb2R1bGUnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWydyZXN0YW5ndWxhcicsICd1aS5yb3V0ZXInLCBhcGksIGF1dGgsIG1haWxib3gsIHVzZXJzXSlcclxuICAgIC5jb25maWcoY29uZmlnKVxyXG4gICAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXHJcbiAgICAucnVuKCgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgQXV0aFRva2VuKSA9PlxyXG4gICAgICAgICAgICBuZXcgUnVuQ29udHJvbGxlcigkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgQXV0aFRva2VuKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIGNvbmZpZyAoUmVzdGFuZ3VsYXJQcm92aWRlcikge1xyXG4gICAgUmVzdGFuZ3VsYXJQcm92aWRlci5zZXRCYXNlVXJsKCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2luZGV4LmNvbmZpZy5qc1xuICoqLyIsImltcG9ydCBtYWluUGFnZVRlbXBsYXRlIGZyb20gJy4vdmlld3MvbWFpbi1wYWdlLmh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbWFpbicsIHtcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtYWluUGFnZVRlbXBsYXRlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9sb2dpblwiKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2luZGV4LnJvdXRlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgaWQ9XFxcIm5hdmJhclxcXCI+IDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHVpLXNyZWY9XFxcImxldHRlcnMoeyBmb2xkZXJJZDogMSB9KVxcXCI+RS1NYWlsPC9hPlxcbjxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHVpLXNyZWY9XFxcInVzZXJzTGlzdFxcXCI+VXNlcnM8L2E+IDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcXFwiPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCI+IDwvZm9ybT4gPC9kaXY+IDwvZGl2PiA8L25hdj4gPGRpdiB1aS12aWV3IGNsYXNzPVxcXCJyb3dcXFwiPjwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiYXBwL3ZpZXdzL21haW4tcGFnZS5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3ZpZXdzL21haW4tcGFnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVuQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgQXV0aFRva2VuKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24oZXZlbnQsIHRvU3RhdGUsIHRvU3RhdGVQYXJhbXMpIHtcbiAgICAgICRyb290U2NvcGUudG9TdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAkcm9vdFNjb3BlLnRvU3RhdGVQYXJhbXMgPSB0b1N0YXRlUGFyYW1zO1xuXG4gICAgICBpZiAoJHJvb3RTY29wZS50b1N0YXRlLnVybCAhPSAnL2xvZ2luJykge1xuICAgICAgICBBdXRoVG9rZW4udG9rZW5DaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvaW5kZXgucnVuLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB1c2Vyc1JvdXRlckNvbmZpZyBmcm9tICcuL3VzZXJzLnJvdXRlJztcclxuXHJcbmltcG9ydCBVc2VycyBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgVXNlcnNSZXN0YW5ndWxhciBmcm9tICcuL3VzZXJzLmFwaS5jb25maWcnO1xyXG5cclxuaW1wb3J0IFVzZXJBdmF0YXJEaXJlY3RpdmUgZnJvbSAnLi91c2VyLmF2YXRhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgVXNlckNhcmREaXJlY3RpdmUgZnJvbSAnLi91c2VyLWNhcmQvdXNlci5jYXJkLmRpcmVjdGl2ZS5qcyc7XHJcbmltcG9ydCBVc2VyQ2FyZEVkaXREaXJlY3RpdmUgZnJvbSAnLi91c2VyLWVkaXQvdXNlci5jYXJkLmVkaXQuZGlyZWN0aXZlLmpzJztcclxuXHJcbmxldCB1c2VycyA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3VzZXJzJywgW10pXHJcbiAgICAuY29uZmlnKHVzZXJzUm91dGVyQ29uZmlnKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdVc2VycycsIFVzZXJzKVxyXG4gICAgLnNlcnZpY2UoJ1VzZXJzUmVzdGFuZ3VsYXInLCBVc2Vyc1Jlc3Rhbmd1bGFyKVxyXG5cclxuICAgIC5kaXJlY3RpdmUoJ2F2YXRhcicsICgpID0+IG5ldyBVc2VyQXZhdGFyRGlyZWN0aXZlKCkpXHJcbiAgICAuZGlyZWN0aXZlKCd1c2VyQ2FyZCcsICgpID0+IG5ldyBVc2VyQ2FyZERpcmVjdGl2ZSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgndXNlckNhcmRFZGl0JywgKCkgPT4gbmV3IFVzZXJDYXJkRWRpdERpcmVjdGl2ZSgpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJzID0gdXNlcnMubmFtZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvdXNlcnMvdXNlcnMubW9kdWxlLmpzXG4gKiovIiwiaW1wb3J0IFVzZXJzQ29udHJvbGxlciBmcm9tICcuL3VzZXJzLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgVXNlckVkaXRDb250cm9sbGVyIGZyb20gJy4vdXNlci1lZGl0L3VzZXJzLmVkaXQuY29udHJvbGxlci5qcyc7XHJcblxyXG5pbXBvcnQgdXNlcnNUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL3VzZXJzLmh0bWwnO1xyXG5pbXBvcnQgdXNlcnNMaXN0VGVtcGxhdGUgZnJvbSAnLi92aWV3cy91c2Vycy1saXN0Lmh0bWwnO1xyXG5pbXBvcnQgdXNlckVkaXRUZW1wbGF0ZSBmcm9tICcuL3VzZXItZWRpdC92aWV3cy91c2VyLWVkaXQuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc1JvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIpIHtcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCd1c2VycycsIHtcclxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdXNlcnNUZW1wbGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgndXNlcnNMaXN0Jywge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiAndXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB1c2Vyc0xpc3RUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFVzZXJzQ29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzQ3RybCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCd1c2VyRWRpdCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogJ3VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy91c2Vycy86dXNlcklkL2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHVzZXJFZGl0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBVc2VyRWRpdENvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VyRWRpdEN0cmwnXHJcbiAgICAgICAgICAgIH0pO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvdXNlcnMvdXNlcnMucm91dGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoVXNlcnMpIHtcclxuICAgICAgICBVc2Vycy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2Vycy5jb250cm9sbGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiB1aS12aWV3PjwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwidXNlcnMvdmlld3MvdXNlcnMuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi91c2Vycy92aWV3cy91c2Vycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPHVzZXItY2FyZCBuZy1yZXBlYXQ9XFxcInVzZXIgaW4gdXNlcnNDdHJsLnVzZXJzXFxcIiB1c2VyPVxcXCJ1c2VyXFxcIj4gPC91c2VyLWNhcmQ+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcInVzZXJzL3ZpZXdzL3VzZXJzLWxpc3QuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi91c2Vycy92aWV3cy91c2Vycy1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMge1xyXG4gICAgY29uc3RydWN0b3IoVXNlcnNSZXN0YW5ndWxhcikge1xyXG4gICAgICAgIHRoaXMucm91dGUgPSBVc2Vyc1Jlc3Rhbmd1bGFyLmFsbCgndXNlcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T25lKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodXNlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBvc3Qoe3VzZXI6IHVzZXJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXJzLnNlcnZpY2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vyc1Jlc3Rhbmd1bGFyKFJlc3Rhbmd1bGFyV2l0aEF1dGgpIHtcclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NpbmdEYXRhKGl0ZW0pIHtcclxuICAgICAgICBpZighKCdmdWxsQWRkcmVzcycgaW4gaXRlbSkpIHtcclxuICAgICAgICAgICAgaXRlbS5mdWxsQWRkcmVzcyA9IGl0ZW0uYWRkcmVzcy5jaXR5ICsgJywgJyArIGl0ZW0uYWRkcmVzcy5zdHJlZXQgKyAnLCAnICsgaXRlbS5hZGRyZXNzLnN1aXRlO1xyXG4gICAgICAgICAgICBpdGVtLndlYnNpdGUgPSAoIX5pdGVtLndlYnNpdGUuaW5kZXhPZignaHR0cCcpKSA/ICdodHRwOi8vJyArIGl0ZW0ud2Vic2l0ZSA6IGl0ZW0ud2Vic2l0ZTtcclxuICAgICAgICAgICAgaXRlbS5hdmF0YXJVcmwgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvdGh1bWIvd29tZW4vJyArIGl0ZW0uaWQgKyAnLmpwZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBSZXN0YW5ndWxhcldpdGhBdXRoLndpdGhDb25maWcoZnVuY3Rpb24oUmVzdGFuZ3VsYXJDb25maWd1cmVyKSB7XHJcbiAgICAgICAgUmVzdGFuZ3VsYXJDb25maWd1cmVyLmFkZFJlc3BvbnNlSW50ZXJjZXB0b3IoZnVuY3Rpb24oZGF0YSwgb3BlcmF0aW9uLCB3aGF0KSB7XHJcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiAhPSAncG9zdCcgJiYgb3BlcmF0aW9uICE9ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RhdGEoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXJzLmFwaS5jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgdXNlckF2YXRhclRlbXBsYXRlIGZyb20gJy4vdmlld3MvdXNlci1hdmF0YXIuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQXZhdGFyRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgYXZhdGFyVXJsOiAnPSdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdXNlckF2YXRhclRlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvdXNlcnMvdXNlci5hdmF0YXIuZGlyZWN0aXZlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8ZGl2PiA8aW1nIG5nLXNyYz1cXFwie3thdmF0YXJVcmwgfHwgJ2h0dHA6Ly9wc2RleHBvcnQuY29tL3N0b3JhZ2UvYXZhdGFycy9kZWZhdWx0LnBuZyd9fVxcXCIgY2xhc3M9XFxcImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcXFwiPiA8YnIvPiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwidXNlcnMvdmlld3MvdXNlci1hdmF0YXIuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi91c2Vycy92aWV3cy91c2VyLWF2YXRhci5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBtYWlsYm94Um91dGVyQ29uZmlnIGZyb20gJy4vbWFpbGJveC5yb3V0ZSc7XHJcblxyXG5pbXBvcnQgRm9sZGVycyBmcm9tICcuL2ZvbGRlcnMvZm9sZGVycy5zZXJ2aWNlJztcclxuaW1wb3J0IEZvbGRlcnNMaXN0RGlyZWN0aXZlIGZyb20gJy4vZm9sZGVycy9mb2xkZXJzLmxpc3QuZGlyZWN0aXZlJztcclxuaW1wb3J0IEZvbGRlckl0ZW1EaXJlY3RpdmUgZnJvbSAnLi9mb2xkZXJzL2ZvbGRlci5pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgTGV0dGVycyBmcm9tICcuL2xldHRlcnMvbGV0dGVycy5zZXJ2aWNlJztcclxuaW1wb3J0IExldHRlcnNMaXN0RGlyZWN0aXZlIGZyb20gJy4vbGV0dGVycy9sZXR0ZXJzLmxpc3QuZGlyZWN0aXZlJztcclxuaW1wb3J0IExldHRlcnNTaG9ydFZpZXdEaXJlY3RpdmUgZnJvbSAnLi9sZXR0ZXJzL2xldHRlci5zaG9ydC52aWV3LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCBMZXR0ZXJGdWxsVmlld0RpcmVjdGl2ZSBmcm9tICcuL2xldHRlcnMvbGV0dGVyLmZ1bGwudmlldy5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbmxldCBtYWlsYm94ID0gYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnbWFpbGJveCcsIFtdKVxyXG4gICAgLmNvbmZpZyhtYWlsYm94Um91dGVyQ29uZmlnKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdGb2xkZXJzJywgRm9sZGVycylcclxuICAgIC5kaXJlY3RpdmUoJ2ZvbGRlcnNMaXN0JywgKCkgPT4gbmV3IEZvbGRlcnNMaXN0RGlyZWN0aXZlKCkpXHJcbiAgICAuZGlyZWN0aXZlKCdmb2xkZXJJdGVtJywgKCkgPT4gbmV3IEZvbGRlckl0ZW1EaXJlY3RpdmUoKSlcclxuXHJcbiAgICAuc2VydmljZSgnTGV0dGVycycsIExldHRlcnMpXHJcbiAgICAuZGlyZWN0aXZlKCdsZXR0ZXJzTGlzdCcsICgpID0+IG5ldyBMZXR0ZXJzTGlzdERpcmVjdGl2ZSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgnbGV0dGVyU2hvcnRWaWV3JywgKCkgPT4gbmV3IExldHRlcnNTaG9ydFZpZXdEaXJlY3RpdmUoKSlcclxuICAgIC5kaXJlY3RpdmUoJ2xldHRlckZ1bGx2aWV3JywgKCkgPT4gbmV3IExldHRlckZ1bGxWaWV3RGlyZWN0aXZlKCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbGJveCA9IG1haWxib3gubmFtZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbWFpbGJveC5tb2R1bGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWlsYm94Um91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoJ2ZvbGRlcnMnLCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICAgICAgICB1cmw6ICcvZm9sZGVycy86Zm9sZGVySWQnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxmb2xkZXJzLWxpc3Q+PC9mb2xkZXJzLWxpc3Q+JyxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBmb2xkZXJJZDogJzEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ2ZvbGRlcnMubGV0dGVycycsIHtcclxuICAgICAgICAgICAgICAgIC8vcGFyZW50OiAnZm9sZGVycycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvbGV0dGVycycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJzxsZXR0ZXJzLWxpc3Q+PC9sZXR0ZXJzLWxpc3Q+J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXRlKCdmb2xkZXJzLmxldHRlcnMubGV0dGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcGFyZW50OiAnbGV0dGVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnLzpsZXR0ZXJJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8bGV0dGVyLWZ1bGx2aWV3PjwvbGV0dGVyLWZ1bGx2aWV3PidcclxuICAgICAgICAgICAgICAgIH0pXHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9tYWlsLWJveC9tYWlsYm94LnJvdXRlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9mb2xkZXJzID0gW3tcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6ICdJbmJveCcsXHJcbiAgICAgICAgICAgIGNvdW50OiA4XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogJ1NlbnQnLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICdTcGFtJyxcclxuICAgICAgICAgICAgY291bnQ6IDhcclxuICAgICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb2xkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2xkZXJzO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5zZXJ2aWNlLmpzXG4gKiovIiwiaW1wb3J0IEZvbGRlcnNMaXN0Q29udHJvbGxlciBmcm9tICcuL2ZvbGRlcnMubGlzdC5jb250cm9sbGVyJztcclxuaW1wb3J0IGZvbGRlcnNMaXN0VGVtcGxhdGUgZnJvbSAnLi92aWV3cy9mb2xkZXJzLWxpc3QuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xkZXJzTGlzdERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBGb2xkZXJzTGlzdENvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnZm9sZGVyc0N0cmwnO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZm9sZGVyc0xpc3RUZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5saXN0LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlcnNMaXN0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihGb2xkZXJzLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRm9sZGVyID0gJHN0YXRlUGFyYW1zLmZvbGRlcklkIHx8IDE7XHJcblxyXG4gICAgICAgIHRoaXMuZm9sZGVycyA9IEZvbGRlcnMuZ2V0Rm9sZGVycygpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVycy5saXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC0yIHNpZGViYXJcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtc2lkZWJhclxcXCI+ICA8Zm9sZGVyLWl0ZW0gbmctcmVwZWF0PVxcXCJmb2xkZXIgaW4gZm9sZGVyc0N0cmwuZm9sZGVyc1xcXCIgZm9sZGVyPVxcXCJmb2xkZXJcXFwiIGFjdGl2ZT1cXFwiZm9sZGVyc0N0cmwuYWN0aXZlRm9sZGVyID09IGZvbGRlci5pZFxcXCIgdWktc3JlZj1cXFwiZm9sZGVycy5sZXR0ZXJzKHsgZm9sZGVySWQ6IGZvbGRlci5pZCB9KVxcXCI+IDwvZm9sZGVyLWl0ZW0+IDwvdWw+IDwvZGl2PiA8ZGl2IHVpLXZpZXc+PC9kaXY+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJmb2xkZXJzL3ZpZXdzL2ZvbGRlcnMtbGlzdC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWwtYm94L2ZvbGRlcnMvdmlld3MvZm9sZGVycy1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGZvbGRlckl0ZW1UZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2ZvbGRlci1pdGVtLmh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVySXRlbURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAge1xyXG4gICAgICAgICAgICBmb2xkZXI6IFwiPVwiLFxyXG4gICAgICAgICAgICBhY3RpdmU6IFwiPVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZvbGRlckl0ZW1UZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2ZvbGRlcnMvZm9sZGVyLml0ZW0uZGlyZWN0aXZlLmpzXG4gKiovIiwidmFyIGFuZ3VsYXI9d2luZG93LmFuZ3VsYXIsbmdNb2R1bGU7XG50cnkge25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFtcIm5nXCJdKX1cbmNhdGNoKGUpe25nTW9kdWxlPWFuZ3VsYXIubW9kdWxlKFwibmdcIixbXSl9XG52YXIgdjE9XCI8bGkgbmctY2xhc3M9XFxcInsnYWN0aXZlJzogYWN0aXZlfVxcXCI+IDxhIGhyZWY9XFxcIiNcXFwiPiA8c3BhbiBuZy1iaW5kPVxcXCJmb2xkZXIubmFtZVxcXCI+PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgbmctYmluZD1cXFwiZm9sZGVyLmNvdW50XFxcIj48L3NwYW4+IDwvYT4gPC9saT5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwiZm9sZGVycy92aWV3cy9mb2xkZXItaXRlbS5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWwtYm94L2ZvbGRlcnMvdmlld3MvZm9sZGVyLWl0ZW0uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKFJlc3Rhbmd1bGFyV2l0aEF1dGgpIHtcclxuICAgICAgICB0aGlzLlJlc3Rhbmd1bGFyV2l0aEF1dGggPSBSZXN0YW5ndWxhcldpdGhBdXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExldHRlcnMoZm9sZGVySWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5SZXN0YW5ndWxhcldpdGhBdXRoLm9uZSgndXNlcnMnLCBmb2xkZXJJZCkuZ2V0TGlzdCgncG9zdHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXR0ZXIobGV0dGVySWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5SZXN0YW5ndWxhcldpdGhBdXRoLm9uZSgncG9zdHMnLCBsZXR0ZXJJZCkuZ2V0KCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgTGV0dGVyc0xpc3RDb250cm9sbGVyIGZyb20gJy4vbGV0dGVycy5saXN0LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgbGV0dGVyc0xpc3RUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2xldHRlcnMtbGlzdC5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlcnNMaXN0RGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExldHRlcnNMaXN0Q29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJBcyA9ICdsZXR0ZXJzQ3RybCc7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBsZXR0ZXJzTGlzdFRlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXJzLmxpc3QuZGlyZWN0aXZlLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV0dGVyc0xpc3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKExldHRlcnMsICRzdGF0ZVBhcmFtcywgJHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVGb2xkZXIgPSAkc3RhdGVQYXJhbXMuZm9sZGVySWQgfHwgMTtcclxuXHJcbiAgICAgICAgTGV0dGVycy5nZXRMZXR0ZXJzKHRoaXMuYWN0aXZlRm9sZGVyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlcnMgPSByZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZm9sZGVycy5sZXR0ZXJzLmxldHRlcicsIHsgZm9sZGVySWQ6IHRoaXMuYWN0aXZlRm9sZGVyLCBsZXR0ZXJJZDogdGhpcy5sZXR0ZXJzWzBdLmlkIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL21haWwtYm94L2xldHRlcnMvbGV0dGVycy5saXN0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXY+IDxkaXYgY2xhc3M9XFxcImNvbC0zIGNvbC1vZmZzZXQtMiBsZXR0ZXJzLWxpc3Qgc2lkZWJhclxcXCI+ICA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPiA8bGV0dGVyLXNob3J0LXZpZXcgbmctcmVwZWF0PVxcXCJsZXR0ZXIgaW4gbGV0dGVyc0N0cmwubGV0dGVyc1xcXCIgbGV0dGVyPVxcXCJsZXR0ZXJcXFwiIHVpLXNyZWY9XFxcImZvbGRlcnMubGV0dGVycy5sZXR0ZXIoeyBsZXR0ZXJJZDogbGV0dGVyLmlkIH0pXFxcIj4gPC9sZXR0ZXItc2hvcnQtdmlldz4gPC91bD4gPC9kaXY+IDxkaXYgdWktdmlldyBjbGFzcz1cXFwiY29sLTcgY29sLW9mZnNldC01XFxcIj48L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImxldHRlcnMvdmlld3MvbGV0dGVycy1saXN0Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC1ib3gvbGV0dGVycy92aWV3cy9sZXR0ZXJzLWxpc3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbGV0dGVyU2hvcnRWaWV3VGVtcGxhdGUgZnJvbSAnLi92aWV3cy9sZXR0ZXItc2hvcnQtdmlldy5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlcnNTaG9ydFZpZXdEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdFJztcclxuICAgICAgICB0aGlzLnJlcGxhY2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlID0ge1xyXG4gICAgICAgICAgICBsZXR0ZXI6IFwiPVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGxldHRlclNob3J0Vmlld1RlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuc2hvcnQudmlldy5kaXJlY3RpdmUuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxsaSBjbGFzcz1cXFwiYnMtY2FsbG91dCBicy1jYWxsb3V0LWluZm9cXFwiPiA8aDQgbmctYmluZD1cXFwibGV0dGVyLnRpdGxlXFxcIj48L2g0PiA8cCBuZy1iaW5kPVxcXCJsZXR0ZXIuYm9keVxcXCI+PC9wPiA8L2xpPlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJsZXR0ZXJzL3ZpZXdzL2xldHRlci1zaG9ydC12aWV3Lmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFpbC1ib3gvbGV0dGVycy92aWV3cy9sZXR0ZXItc2hvcnQtdmlldy5odG1sXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBMZXR0ZXJGdWxsVmlld0NvbnRyb2xsZXIgZnJvbSAnLi9sZXR0ZXIuZnVsbC52aWV3LmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgbGV0dGVyRnVsbFZpZXdUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL2xldHRlci1mdWxsLXZpZXcuaHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXR0ZXJGdWxsVmlld0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBMZXR0ZXJGdWxsVmlld0NvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAnbGV0dGVyQ3RybCc7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBsZXR0ZXJGdWxsVmlld1RlbXBsYXRlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvbWFpbC1ib3gvbGV0dGVycy9sZXR0ZXIuZnVsbC52aWV3LmRpcmVjdGl2ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldHRlckZ1bGxWaWV3Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihMZXR0ZXJzLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUxldHRlciA9ICRzdGF0ZVBhcmFtcy5sZXR0ZXJJZCB8fCAxO1xyXG5cclxuICAgICAgICBMZXR0ZXJzLmdldExldHRlcih0aGlzLmFjdGl2ZUxldHRlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXIgPSByZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9tYWlsLWJveC9sZXR0ZXJzL2xldHRlci5mdWxsLnZpZXcuY29udHJvbGxlci5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwibGV0dGVyLWZ1bGx2aWV3XFxcIj4gIDxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCIgbmctc2hvdz1cXFwibGV0dGVyQ3RybC5sZXR0ZXIgJiYgbGV0dGVyQ3RybC5sZXR0ZXIuYm9keSAmJiBsZXR0ZXJDdHJsLmxldHRlci5ib2R5Lmxlbmd0aFxcXCI+IDxoMiBuZy1iaW5kPVxcXCJsZXR0ZXJDdHJsLmxldHRlci50aXRsZVxcXCI+PC9oMj4gPHAgbmctYmluZD1cXFwibGV0dGVyQ3RybC5sZXR0ZXIuYm9keVxcXCI+PC9wPiA8L2Rpdj4gPC9kaXY+XCI7XG5uZ01vZHVsZS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihjKXtjLnB1dChcImxldHRlcnMvdmlld3MvbGV0dGVyLWZ1bGwtdmlldy5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haWwtYm94L2xldHRlcnMvdmlld3MvbGV0dGVyLWZ1bGwtdmlldy5odG1sXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBhdXRoUm91dGVyQ29uZmlnIGZyb20gJy4vYXV0aC5yb3V0ZSc7XHJcbmltcG9ydCBBdXRoTW9jayBmcm9tICcuL2F1dGgubW9jayc7XHJcblxyXG5pbXBvcnQgQXV0aCBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCBBdXRoVG9rZW4gZnJvbSAnLi9hdXRoLnRva2VuLnNlcnZpY2UnO1xyXG5cclxubGV0IGF1dGggPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCdhdXRoJywgWyduZ01vY2tFMkUnXSlcclxuICAgIC5jb25maWcoYXV0aFJvdXRlckNvbmZpZylcclxuICAgIC5ydW4oKCRodHRwQmFja2VuZCwgQXV0aFRva2VuKSA9PiBuZXcgQXV0aE1vY2soJGh0dHBCYWNrZW5kLCBBdXRoVG9rZW4pKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdBdXRoJywgQXV0aClcclxuICAgIC5zZXJ2aWNlKCdBdXRoVG9rZW4nLCBBdXRoVG9rZW4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aCA9IGF1dGgubmFtZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXV0aC9hdXRoLm1vZHVsZS5qc1xuICoqLyIsImltcG9ydCBsb2dpblRlbXBsYXRlIGZyb20gJy4vdmlld3MvbG9naW4uaHRtbCc7XHJcbmltcG9ydCBBdXRoUm91dGVDb250cm9sbGVyIGZyb20gJy4vYXV0aC5yb3V0ZS5jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhSb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XHJcbiAgICAgICAgICAgIHVybDogJy9sb2dpbicsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBsb2dpblRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdsb2dpbkN0cmwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBBdXRoUm91dGVDb250cm9sbGVyXHJcbiAgICAgICAgfSlcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2F1dGgvYXV0aC5yb3V0ZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPGZvcm0gY2xhc3M9XFxcImZvcm0tc2lnbmluXFxcIj4gPHAgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHggMjBweFxcXCIgY2xhc3M9XFxcImJnLWRhbmdlclxcXCIgbmctc2hvdz1cXFwibG9naW5DdHJsLmxvZ2luRXJyb3JcXFwiPtCe0YjQuNCx0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4ITwvcD4gPGgyIGNsYXNzPVxcXCJmb3JtLXNpZ25pbi1oZWFkaW5nXFxcIj5QbGVhc2Ugc2lnbiBpbjwvaDI+IDxsYWJlbCBmb3I9XFxcImlucHV0RW1haWxcXFwiIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBpZD1cXFwiaW5wdXRFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsIGFkZHJlc3NcXFwiIHJlcXVpcmVkPVxcXCJcXFwiIG5nLW1vZGVsPVxcXCJsb2dpbkN0cmwuZW1haWxcXFwiLz4gPGxhYmVsIGZvcj1cXFwiaW5wdXRQYXNzd29yZFxcXCIgY2xhc3M9XFxcInNyLW9ubHlcXFwiPlBhc3N3b3JkPC9sYWJlbD4gPGJyLz4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwiaW5wdXRQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiByZXF1aXJlZD1cXFwiXFxcIiBuZy1tb2RlbD1cXFwibG9naW5DdHJsLnBhc3N3b3JkXFxcIi8+IDxici8+IDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj4gPGxhYmVsPiA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHZhbHVlPVxcXCJyZW1lbWJlci1tZVxcXCI+IFJlbWVtYmVyIG1lIDwvbGFiZWw+IDwvZGl2PiA8YnIvPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBuZy1jbGljaz1cXFwibG9naW5DdHJsLmxvZ2luKGxvZ2luQ3RybC5lbWFpbCwgbG9naW5DdHJsLnBhc3N3b3JkKVxcXCI+U2lnbiBpbjwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJhdXRoL3ZpZXdzL2xvZ2luLmh0bWxcIix2MSl9XSk7XG5tb2R1bGUuZXhwb3J0cz12MTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXV0aC92aWV3cy9sb2dpbi5odG1sXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhSb3V0ZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoQXV0aCwgJHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5BdXRoID0gQXV0aDtcclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLkF1dGguY2hlY2tBdXRoKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ2ZvbGRlcnMubGV0dGVycycsIHtmb2xkZXJJZDogMX0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXV0aC9hdXRoLnJvdXRlLmNvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTW9jayB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJGh0dHBCYWNrZW5kLCBBdXRoVG9rZW4pIHtcclxuICAgICAgICAkaHR0cEJhY2tlbmQud2hlblBPU1QoL3Nlc3Npb25zLiovKS5yZXNwb25kKChtZXRob2QsIHVybCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3JlZGVudGlhbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYoY3JlZGVudGlhbHMuZW1haWwgPT09ICd4ekB4ei5ydScgJiYgY3JlZGVudGlhbHMucGFzc3dvcmQgPT09ICcxMjMnKXtcclxuICAgICAgICAgICAgICAgIEF1dGhUb2tlbi50b2tlblNldCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyMDAsIHttZXNzYWdlOiAnQXV0aCBTdWNjZXNzJ30sIHt9XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNDAxLCB7ZXJyb3I6ICdMb2dpbiBvciBwYXNzd29yZCBhcmUgbm90IGNvcnJlY3QnfSwge31dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRodHRwQmFja2VuZC53aGVuREVMRVRFKC9zZXNzaW9ucy4qLykucmVzcG9uZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFBdXRoVG9rZW4udG9rZW5DaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQwMSwge2Vycm9yOiAnTG9naW4gb3IgcGFzc3dvcmQgYXJlIG5vdCBjb3JyZWN0J30sIHt9XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQXV0aFRva2VuLmRlbGV0ZUNvb2tpZSgnYXV0aFRva2VuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBbMjAwLCB7fSwge31dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXV0aC9hdXRoLm1vY2suanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIHtcclxuICAgIGNvbnN0cnVjdG9yKFJlc3Rhbmd1bGFyV2l0aEF1dGgsICRxKSB7XHJcbiAgICAgICAgdGhpcy5SZXN0YW5ndWxhcldpdGhBdXRoID0gUmVzdGFuZ3VsYXJXaXRoQXV0aDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBdXRoKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgICAgIGxldCBkZWZlciA9IHRoaXMuJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5SZXN0YW5ndWxhcldpdGhBdXRoLmFsbCgnc2Vzc2lvbnMnKS5wb3N0KHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbigoc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICAgICAgZGVmZXIucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgZGVmZXIucmVqZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2Vzc2lvbi5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC9hdXRoL2F1dGguc2VydmljZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHN0YXRlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICB0b2tlblNldCgpIHtcclxuICAgICAgICB0aGlzLnNldENvb2tpZSgnYXV0aFRva2VuJywgJ2JkMmU5MzJhMDNhMTkyMTdhYjVhMWRmYjVhYTkzMzQwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5DaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb29raWUoJ2F1dGhUb2tlbicpICE9PSAnYmQyZTkzMmEwM2ExOTIxN2FiNWExZGZiNWFhOTMzNDAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0sIDAsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHZhciBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT0gXCJudW1iZXJcIiAmJiBleHBpcmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDApO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gb3B0aW9ucy5leHBpcmVzID0gZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcy50b1VUQ1N0cmluZykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVkQ29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBwcm9wTmFtZTtcclxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IG9wdGlvbnNbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgICAgICBzZXRDb29raWUobmFtZSwgXCJcIiwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXV0aC9hdXRoLnRva2VuLnNlcnZpY2UuanNcbiAqKi8iLCJpbXBvcnQgQXBpTW9jayBmcm9tICcuL2FwaS5tb2NrJztcclxuaW1wb3J0IFJlc3Rhbmd1bGFyV2l0aEF1dGggZnJvbSAnLi9hcGkucmVzdGFuZ3VsYXInO1xyXG5cclxubGV0IGFwaSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwaS1jb3JlJywgWyduZ01vY2tFMkUnLCAncmVzdGFuZ3VsYXInXSlcclxuICAgIC5ydW4oKCRodHRwQmFja2VuZCkgPT4gbmV3IEFwaU1vY2soJGh0dHBCYWNrZW5kKSlcclxuXHJcbiAgICAuc2VydmljZSgnUmVzdGFuZ3VsYXJXaXRoQXV0aCcsIFJlc3Rhbmd1bGFyV2l0aEF1dGgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpID0gYXBpLm5hbWU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2FwaS1jb3JlL2FwaS5jb3JlLm1vZHVsZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaU1vY2sge1xyXG4gICAgY29uc3RydWN0b3IgKCRodHRwQmFja2VuZCkge1xyXG4gICAgICAgICRodHRwQmFja2VuZC53aGVuR0VUKC9eaHR0cDpcXC9cXC9qc29ucGxhY2Vob2xkZXJcXC50eXBpY29kZVxcLmNvbS8pLnBhc3NUaHJvdWdoKCk7XHJcblxyXG4gICAgICAgICRodHRwQmFja2VuZC53aGVuUE9TVCgvXmh0dHA6XFwvXFwvanNvbnBsYWNlaG9sZGVyXFwudHlwaWNvZGVcXC5jb21cXC91c2Vycy8pLnJlc3BvbmQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gWzIwMCwge30sIHt9XTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkaHR0cEJhY2tlbmQud2hlbkRFTEVURSgvXmh0dHA6XFwvXFwvanNvbnBsYWNlaG9sZGVyXFwudHlwaWNvZGVcXC5jb21cXC91c2Vycy8pLnJlc3BvbmQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gWzIwMCwge30sIHt9XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL2FwaS1jb3JlL2FwaS5tb2NrLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdGFuZ3VsYXJXaXRoQXV0aChSZXN0YW5ndWxhciwgJGluamVjdG9yLCAkaHR0cCkge1xyXG4gICAgcmV0dXJuIFJlc3Rhbmd1bGFyLndpdGhDb25maWcoZnVuY3Rpb24oUmVzdGFuZ3VsYXJDb25maWd1cmVyKSB7XHJcbiAgICAgICAgUmVzdGFuZ3VsYXJDb25maWd1cmVyLnNldEVycm9ySW50ZXJjZXB0b3IoZnVuY3Rpb24ocmVzcG9uc2UsIGRlZmVycmVkLCByZXNwb25zZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAkaW5qZWN0b3IuZ2V0KCckc3RhdGUnKS5nbygnbG9naW4nKTtcclxuICAgICAgICAgICAgICAgICRodHRwKHJlc3BvbnNlLmNvbmZpZykudGhlbihyZXNwb25zZUhhbmRsZXIsIGRlZmVycmVkLnJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovV2Vic3Rvcm1Qcm9qZWN0cy9hbmd1bGFyLWNvdXJzaWVzL3NyYy9hcHAvYXBpLWNvcmUvYXBpLnJlc3Rhbmd1bGFyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckVkaXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFVzZXJzLCAkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLlVzZXJzID0gVXNlcnM7XHJcblxyXG4gICAgICAgIHRoaXMudXNlciA9IHt9O1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcigrJHN0YXRlUGFyYW1zLnVzZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcih1c2VySWQpIHtcclxuICAgICAgICBpZiAoISF1c2VySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5Vc2Vycy5nZXRPbmUodXNlcklkKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2Vycy5lZGl0LmNvbnRyb2xsZXIuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjx1c2VyLWNhcmQtZWRpdCB1c2VyPVxcXCJ1c2VyRWRpdEN0cmwudXNlclxcXCI+PC91c2VyLWNhcmQtZWRpdD5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwidXNlci1lZGl0L3ZpZXdzL3VzZXItZWRpdC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3VzZXJzL3VzZXItZWRpdC92aWV3cy91c2VyLWVkaXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdXNlckNhcmRUZW1wbGF0ZSBmcm9tICcuL3ZpZXdzL3VzZXItY2FyZC5odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDYXJkRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgdXNlcjogJz0nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHVzZXJDYXJkVGVtcGxhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9XZWJzdG9ybVByb2plY3RzL2FuZ3VsYXItY291cnNpZXMvc3JjL2FwcC91c2Vycy91c2VyLWNhcmQvdXNlci5jYXJkLmRpcmVjdGl2ZS5qc1xuICoqLyIsInZhciBhbmd1bGFyPXdpbmRvdy5hbmd1bGFyLG5nTW9kdWxlO1xudHJ5IHtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShbXCJuZ1wiXSl9XG5jYXRjaChlKXtuZ01vZHVsZT1hbmd1bGFyLm1vZHVsZShcIm5nXCIsW10pfVxudmFyIHYxPVwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtaW5mb1xcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDIwcHhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj4gPGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCI+IDxhIHVpLXNyZWY9XFxcInVzZXIoe3VzZXJJZDogdXNlci5pZH0pXFxcIiBuZy1iaW5kPVxcXCJ1c2VyLnVzZXJuYW1lXFxcIj48L2E+IDwvaDM+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgY29sLWxnLTNcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPiA8YXZhdGFyIGF2YXRhci11cmw9XFxcInVzZXIuYXZhdGFyVXJsXFxcIj48L2F2YXRhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05IGNvbC1sZy05XFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS11c2VyLWluZm9ybWF0aW9uXFxcIj4gPHRib2R5PiA8dHI+IDx0ZD7QmNC80Y88L3RkPiA8dGQgbmctYmluZD1cXFwidXNlci5uYW1lXFxcIj48L3RkPiA8L3RyPiA8dHI+IDx0ZD7QotC10LvQtdGE0L7QvTwvdGQ+IDx0ZCBuZy1iaW5kPVxcXCJ1c2VyLnBob25lXFxcIj48L3RkPiA8L3RyPiA8dHI+IDx0ZD5XZWJzaXRlPC90ZD4gPHRkPjxhIG5nLWhyZWY9XFxcInt7dXNlci53ZWJzaXRlfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBuZy1iaW5kPVxcXCJ1c2VyLndlYnNpdGVcXFwiPjwvYT48L3RkPiA8L3RyPiA8dHI+IDx0ZD7QkNC00YDQtdGBPC90ZD4gPHRkIG5nLWJpbmQ9XFxcInVzZXIuZnVsbEFkZHJlc3NcXFwiPjwvdGQ+IDwvdHI+IDx0cj4gPHRkPkVtYWlsPC90ZD4gPHRkPjxhIG5nLWhyZWY9XFxcIm1haWx0bzp7e3VzZXIuZW1haWx9fVxcXCIgbmctYmluZD1cXFwidXNlci5lbWFpbFxcXCI+PC9hPjwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+IDxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiA8YSB1aS1zcmVmPVxcXCJ1c2VyRWRpdCh7dXNlcklkOiB1c2VyLmlkfSlcXFwiPiYjOTk5NzsgRWRpdDwvYT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj5cIjtcbm5nTW9kdWxlLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGMpe2MucHV0KFwidXNlci1jYXJkL3ZpZXdzL3VzZXItY2FyZC5odG1sXCIsdjEpfV0pO1xubW9kdWxlLmV4cG9ydHM9djE7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3VzZXJzL3VzZXItY2FyZC92aWV3cy91c2VyLWNhcmQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgdXNlckNhcmRFZGl0VGVtcGxhdGUgZnJvbSAnLi92aWV3cy91c2VyLWNhcmQtZWRpdC5odG1sJztcclxuaW1wb3J0IFVzZXJDYXJkRWRpdENvbnRyb2xsZXIgZnJvbSAnLi91c2VyLmNhcmQuZWRpdC5jb250cm9sbGVyLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJDYXJkRWRpdERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMucmVwbGFjZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6ICc9J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFVzZXJDYXJkRWRpdENvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyQXMgPSAndXNlckNhcmRFZGl0Q3RybCc7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB1c2VyQ2FyZEVkaXRUZW1wbGF0ZTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5kaXJlY3RpdmUuanNcbiAqKi8iLCJ2YXIgYW5ndWxhcj13aW5kb3cuYW5ndWxhcixuZ01vZHVsZTtcbnRyeSB7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoW1wibmdcIl0pfVxuY2F0Y2goZSl7bmdNb2R1bGU9YW5ndWxhci5tb2R1bGUoXCJuZ1wiLFtdKX1cbnZhciB2MT1cIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWluZm9cXFwiIG5nLXNob3c9XFxcIiEhKHVzZXIgJiYgdXNlci5pZClcXFwiPiA8Zm9ybT4gPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+IDxoMyBjbGFzcz1cXFwicGFuZWwtdGl0bGVcXFwiPiA8aW5wdXQgbmctbW9kZWw9XFxcInVzZXIubmFtZVxcXCI+XFxuPGEgbmctaWY9XFxcInVzZXIuaWRcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGJnLWRhbmdlclxcXCIgbmctY2xpY2s9XFxcInVzZXJDYXJkRWRpdEN0cmwuZGVsZXRlKHVzZXIpXFxcIj4mIzEwMDA4OyBEZWxldGU8L2E+IDwvaDM+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgY29sLWxnLTNcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPiA8YXZhdGFyIGF2YXRhci11cmw9XFxcInVzZXIuYXZhdGFyVXJsXFxcIj48L2F2YXRhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05IGNvbC1sZy05XFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS11c2VyLWluZm9ybWF0aW9uXFxcIj4gPHRib2R5PiA8dHI+IDx0ZD7QotC10LvQtdGE0L7QvTwvdGQ+IDx0ZD48aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIiBuZy1tb2RlbD1cXFwidXNlci5waG9uZVxcXCI+PC90ZD4gPC90cj4gPHRyPiA8dGQ+V2Vic2l0ZTwvdGQ+IDx0ZD48aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIiBuZy1tb2RlbD1cXFwidXNlci53ZWJzaXRlXFxcIj48L3RkPiA8L3RyPiA8dHI+IDx0ZD7QkNC00YDQtdGBPC90ZD4gPHRkPjxpbnB1dCBzdHlsZT1cXFwid2lkdGg6IDEwMCVcXFwiIG5nLW1vZGVsPVxcXCJ1c2VyLmZ1bGxBZGRyZXNzXFxcIj48L3RkPiA8L3RyPiA8dHI+IDx0ZD5FbWFpbDwvdGQ+IDx0ZD48aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIiBuZy1tb2RlbD1cXFwidXNlci5lbWFpbFxcXCI+PC90ZD4gPC90cj48L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGEgaHJlZj1cXFwiI1xcXCIgbmctY2xpY2s9XFxcInVzZXJDYXJkRWRpdEN0cmwuc2F2ZSh1c2VyKVxcXCI+JiMxMDAwNDsgU2F2ZTwvYT4gPC9kaXY+IDwvZGl2PiA8L2Zvcm0+IDwvZGl2PlwiO1xubmdNb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYyl7Yy5wdXQoXCJ1c2VyLWVkaXQvdmlld3MvdXNlci1jYXJkLWVkaXQuaHRtbFwiLHYxKX1dKTtcbm1vZHVsZS5leHBvcnRzPXYxO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi91c2Vycy91c2VyLWVkaXQvdmlld3MvdXNlci1jYXJkLWVkaXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ2FyZEVkaXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFVzZXJzLCAkc3RhdGUpIHtcclxuICAgICAgICB0aGlzLlVzZXJzID0gVXNlcnM7XHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSh1c2VyKXtcclxuICAgICAgICBsZXQgdXNlclNhdmVQcm9taXNlO1xyXG5cclxuICAgICAgICBpZiAodXNlci5pZCkge1xyXG4gICAgICAgICAgICB1c2VyU2F2ZVByb21pc2UgPSB0aGlzLlVzZXJzLnVwZGF0ZSh1c2VyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyU2F2ZVByb21pc2UgPSB0aGlzLlVzZXJzLmNyZWF0ZSh1c2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVzZXJTYXZlUHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0VkaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oJ3VzZXJzTGlzdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSh1c2VyKSB7XHJcbiAgICAgICAgdGhpcy5Vc2Vycy5kZWxldGUodXNlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKCd1c2Vyc0xpc3QnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1dlYnN0b3JtUHJvamVjdHMvYW5ndWxhci1jb3Vyc2llcy9zcmMvYXBwL3VzZXJzL3VzZXItZWRpdC91c2VyLmNhcmQuZWRpdC5jb250cm9sbGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBSEE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFLQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQW5CQTs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7O0FBaUJBO0FBQ0E7QUFDQTs7O0FBbkJBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFYQTs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBSkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU1BOzs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQWRBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQU9BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXpCQTs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU1BO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNURBOzs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUFRQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFkQTs7O0FBQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFNQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekJBOzs7QUFBQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=