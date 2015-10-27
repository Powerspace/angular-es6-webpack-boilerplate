import HomeConfig from './home.config';
import HomeController from './home.controller';
require('./home.scss');
require('../../img/cedric.jpg');

export default angular.module('demo.home', [])
    .config(HomeConfig)
    .controller('HomeController', HomeController)
    .name;
