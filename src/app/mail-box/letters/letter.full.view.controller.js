export default class LetterFullViewController {
    constructor(Letters, $stateParams) {
        this.activeLetter = $stateParams.letterId || 1;

        Letters.getLetter(this.activeLetter).then((response) => {
            this.letter = response;
        });
    }
}
