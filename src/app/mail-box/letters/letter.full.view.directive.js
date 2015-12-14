import LetterFullViewController from './letter.full.view.controller';
import letterFullViewTemplate from './views/letter-full-view.html';

export default class LetterFullViewDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {};
        this.controller = LetterFullViewController;
        this.controllerAs = 'letterCtrl';

        this.template = letterFullViewTemplate;
    }
}