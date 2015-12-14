export default class UsersController {
    constructor(Users) {
        Users.getUsers().then((response) => {
            this.users = response;
        });
    }
}
