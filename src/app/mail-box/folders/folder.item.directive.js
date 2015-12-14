import folderItemTemplate from './views/folder-item.html';

export default class FolderItemDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = true;

        this.scope =  {
            folder: "=",
            active: "="
        };

        this.template = folderItemTemplate;
    }
}