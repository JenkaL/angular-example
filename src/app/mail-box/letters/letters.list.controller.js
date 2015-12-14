export default class LettersListController {
    constructor(Letters, $stateParams, $state) {
        this.activeFolder = $stateParams.folderId || 1;

        Letters.getLetters(this.activeFolder).then((response) => {
            this.letters = response;

            $state.go('folders.letters.letter', { folderId: this.activeFolder, letterId: this.letters[0].id });
        });
    }
}
