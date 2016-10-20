// Framework dependencies
import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import './modules/products/module';

// Application Modules
/*import './modules/healthCheck/module';
import './modules/search/module';
import './modules/summary/module';
import './modules/engine/module';
import './modules/common/module';
import './modules/workscopeNav/module';
import 'hubs/ng-apphub-service';*/

/**
 * @name AppModule
 * @param {Provider} $locationProvider
 * @param {Provider} $httpProvider
 * @param {Provider} $urlRouterProvider
 * @param {Provider} $stateProvider
 * @description
 * Create our application, inject dependencies, and configure route behavior
 * NOTE: Injected modules will add their own routes
 */
let AppModule = angular.module('app', [
	'ui.router',
	'ui.bootstrap',
  'ProductModule'
]).config(['$locationProvider', '$httpProvider', '$urlRouterProvider', '$stateProvider',
	($locationProvider,	$httpProvider,	$urlRouterProvider,	$stateProvider) => {
		// Batch multiple $http requests around the same time into one $digest
		$httpProvider.useApplyAsync(true);
    // This is your default route. User will get redirected
    // here if they type a weird route into the location bar.
    $urlRouterProvider.otherwise(($injector) => {
      var $state = $injector.get('$state');
      $state.go('product');
    });
	}
]);

// Bootstrap our application once all that stuff is loaded
angular.element(document).ready(() => {
	return angular.bootstrap(document.querySelector('#content'), [AppModule.name], {
		strictDi: true // https://docs.angularjs.org/guide/di
	});
});

export default AppModule;