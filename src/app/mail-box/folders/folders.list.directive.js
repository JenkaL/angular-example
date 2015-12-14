import FoldersListController from './folders.list.controller';
import foldersListTemplate from './views/folders-list.html';

export default class FoldersListDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {};
        this.controller = FoldersListController;
        this.controllerAs = 'foldersCtrl';

        this.template = foldersListTemplate;
    }
}