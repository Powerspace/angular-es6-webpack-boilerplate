class MessageConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.message', {
            url: "/message/:messageId",
            views: {
                'content@': {
                    templateUrl: require("./message.html"),
                    controller: "MessageController as messageCtrl"
                }
            }
        });
    }
}

export default MessageConfig.initRoute;
