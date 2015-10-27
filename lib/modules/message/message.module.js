import MessageConfig from './message.config';
import MessageController from './message.controller';
import MessageService   from './message.service';

require('./message.scss');

export default angular.module('demo.message', [])
    .config(MessageConfig)
    .service('messageService', MessageService)
    .controller('MessageController', MessageController)
    .name;
