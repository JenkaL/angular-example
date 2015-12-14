export default class UserCardEditController {
    constructor(Users, $state) {
        this.Users = Users;
        this.$state = $state;
    }

    save(user){
        let userSavePromise;

        if (user.id) {
            userSavePromise = this.Users.update(user);
        } else {
            userSavePromise = this.Users.create(user);
        }

        userSavePromise.then(() => {
            this.isEdit = false;
            this.$state.go('usersList');
        });
    }

    delete(user) {
        this.Users.delete(user).then(() => {
            this.$state.go('usersList');
        });
    }
}