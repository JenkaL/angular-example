import mainPageTemplate from './views/main-page.html';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            template: mainPageTemplate
        });

    $urlRouterProvider.otherwise("/login");
}