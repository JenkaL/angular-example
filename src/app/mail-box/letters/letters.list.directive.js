import LettersListController from './letters.list.controller';
import lettersListTemplate from './views/letters-list.html';

export default class LettersListDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {};
        this.controller = LettersListController;
        this.controllerAs = 'lettersCtrl';

        this.template = lettersListTemplate;
    }
}