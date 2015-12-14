import userCardEditTemplate from './views/user-card-edit.html';
import UserCardEditController from './user.card.edit.controller.js';

export default class UserCardEditDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {
            user: '='
        };

        this.controller = UserCardEditController;
        this.controllerAs = 'userCardEditCtrl';

        this.template = userCardEditTemplate;
    }
}