import userAvatarTemplate from './views/user-avatar.html';

export default class UserAvatarDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {
            avatarUrl: '='
        };

        this.template = userAvatarTemplate;
    }
}