export default class Folders {
    constructor() {
        this._folders = [{
            id: 1,
            name: 'Inbox',
            count: 8
        }, {
            id: 2,
            name: 'Sent',
            count: 5
        }, {
            id: 3,
            name: 'Spam',
            count: 8
        }];
    }

    getFolders() {
        return this._folders;
    }
}
