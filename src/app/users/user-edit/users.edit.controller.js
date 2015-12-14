export default class UserEditController {
    constructor(Users, $stateParams) {
        this.Users = Users;

        this.user = {};
        this.getUser(+$stateParams.userId);
    }

    getUser(userId) {
        if (!!userId) {
            this.Users.getOne(userId).then(user => {
                this.user = user;
            });
        }
    }
}
