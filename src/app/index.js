import config from './index.config';
import routerConfig from './index.route';
import RunController from './index.run';

import users from './users/users.module';
import mailbox from './mail-box/mailbox.module';
import auth from './auth/auth.module';
import api from './api-core/api.core.module';

angular.module('myApp', ['restangular', 'ui.router', api, auth, mailbox, users])
    .config(config)
    .config(routerConfig)
    .run(($rootScope, $state, $stateParams, AuthToken) =>
            new RunController($rootScope, $state, $stateParams, AuthToken));