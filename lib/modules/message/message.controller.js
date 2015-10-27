class MessageController {

    /**
     * Constructor class MessageController
     *
     */
    constructor(messageService, $state) {
        'ngInject';

        let vm = this;

        vm.message = messageService.getMessage($state.params.messageId);

        console.log(vm.message);


    }
}

export default MessageController;
