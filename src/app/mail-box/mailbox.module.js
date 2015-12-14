import mailboxRouterConfig from './mailbox.route';

import Folders from './folders/folders.service';
import FoldersListDirective from './folders/folders.list.directive';
import FolderItemDirective from './folders/folder.item.directive';

import Letters from './letters/letters.service';
import LettersListDirective from './letters/letters.list.directive';
import LettersShortViewDirective from './letters/letter.short.view.directive';
import LetterFullViewDirective from './letters/letter.full.view.directive';


let mailbox = angular
    .module('mailbox', [])
    .config(mailboxRouterConfig)

    .service('Folders', Folders)
    .directive('foldersList', () => new FoldersListDirective())
    .directive('folderItem', () => new FolderItemDirective())

    .service('Letters', Letters)
    .directive('lettersList', () => new LettersListDirective())
    .directive('letterShortView', () => new LettersShortViewDirective())
    .directive('letterFullview', () => new LetterFullViewDirective());

export default mailbox = mailbox.name;
