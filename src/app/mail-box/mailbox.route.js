export default function mailboxRouterConfig ($stateProvider) {
    $stateProvider
        .state('folders', {
            parent: 'main',
            url: '/folders/:folderId',
            template: '<folders-list></folders-list>',
            params: {
                folderId: '1'
            }
        })
            .state('folders.letters', {
                //parent: 'folders',
                url: '/letters',
                template: '<letters-list></letters-list>'
            })
                .state('folders.letters.letter', {
                    //parent: 'letters',
                    url: '/:letterId',
                    template: '<letter-fullview></letter-fullview>'
                })
}