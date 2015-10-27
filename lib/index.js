import 'angular';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';

// Our modules
import home from './modules/home/home.module.js';

//Our Components
import sidenav from './components/sidenav/sidenav.module.js';

// Project specific style
import './scss/bootstrap.scss'

// Create our demo module
let demoModule = angular.module('demo', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    home,
    sidenav
]);

demoModule.config(($stateProvider, $mdThemingProvider) => {
    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./components/sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });

    $mdThemingProvider.theme('default').primaryPalette('purple');
});

demoModule.controller('MainController', function($mdSidenav) {
    let vm = this;
    vm.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
});

export default demoModule;
