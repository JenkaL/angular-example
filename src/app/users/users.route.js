import UsersController from './users.controller';
import UserEditController from './user-edit/users.edit.controller.js';

import usersTemplate from './views/users.html';
import usersListTemplate from './views/users-list.html';
import userEditTemplate from './user-edit/views/user-edit.html';

export default function usersRouterConfig ($stateProvider) {
    $stateProvider
        .state('users', {
            abstract: true,
            parent: 'main',
            template: usersTemplate
        })
            .state('usersList', {
                parent: 'users',
                url: '/users',
                template: usersListTemplate,
                controller: UsersController,
                controllerAs: 'usersCtrl'
            })
            .state('userEdit', {
                parent: 'users',
                url: '/users/:userId/edit',
                template: userEditTemplate,
                controller: UserEditController,
                controllerAs: 'userEditCtrl'
            });
}