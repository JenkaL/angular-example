import userCardTemplate from './views/user-card.html';

export default class UserCardDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {
            user: '='
        };

        this.template = userCardTemplate;
    }
}