class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} messageService
     * @param {object} $state
     */
    constructor(messageService, $state) {
        'ngInject';

        let vm = this;

        vm.goToMessage = goToMessage;

        vm.messages = messageService.getMessages();

        function goToMessage(id) {
            $state.go('public.message', {messageId: id});
        }

    }
}

export default HomeController;
