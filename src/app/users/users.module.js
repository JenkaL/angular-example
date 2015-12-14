import usersRouterConfig from './users.route';

import Users from './users.service';
import UsersRestangular from './users.api.config';

import UserAvatarDirective from './user.avatar.directive';
import UserCardDirective from './user-card/user.card.directive.js';
import UserCardEditDirective from './user-edit/user.card.edit.directive.js';

let users = angular
    .module('users', [])
    .config(usersRouterConfig)

    .service('Users', Users)
    .service('UsersRestangular', UsersRestangular)

    .directive('avatar', () => new UserAvatarDirective())
    .directive('userCard', () => new UserCardDirective())
    .directive('userCardEdit', () => new UserCardEditDirective());

export default users = users.name;
