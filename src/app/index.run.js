export default class RunController {
  constructor ($rootScope, $state, $stateParams, AuthToken) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
      $rootScope.toState = toState;
      $rootScope.toStateParams = toStateParams;

      if ($rootScope.toState.url != '/login') {
        AuthToken.tokenCheck();
      }
    });
  }
}