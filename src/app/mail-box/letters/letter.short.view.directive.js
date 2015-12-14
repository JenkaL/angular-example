import letterShortViewTemplate from './views/letter-short-view.html';

export default class LettersShortViewDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope = {
            letter: "="
        };

        this.template = letterShortViewTemplate;
    }
}