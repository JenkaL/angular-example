export default class FoldersListController {
    constructor(Folders, $stateParams, $state) {
        this.activeFolder = $stateParams.folderId || 1;

        this.folders = Folders.getFolders();
    }
}
