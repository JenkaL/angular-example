import authRouterConfig from './auth.route';
import AuthMock from './auth.mock';

import Auth from './auth.service';
import AuthToken from './auth.token.service';

let auth = angular
    .module('auth', ['ngMockE2E'])
    .config(authRouterConfig)
    .run(($httpBackend, AuthToken) => new AuthMock($httpBackend, AuthToken))

    .service('Auth', Auth)
    .service('AuthToken', AuthToken);

export default auth = auth.name;
