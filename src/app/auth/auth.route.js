import loginTemplate from './views/login.html';
import AuthRouteController from './auth.route.controller';

export default function authRouterConfig ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            template: loginTemplate,
            controllerAs: 'loginCtrl',
            controller: AuthRouteController
        })
}