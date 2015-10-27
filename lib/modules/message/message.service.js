class MessageService {

    constructor () {
        'ngInject';

        let vm = this;
        let imagePath = 'img/lena.jpg';
        vm.messages = [
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 0
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 1
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 2
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 3
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 4
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 5
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 6
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 7
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 8
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 9
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands",
            id: 10
          }
      ];

        vm.getMessages = getMessages;
        vm.setMessages = setMessages;
        vm.getMessage = getMessage;

        function getMessages () {
            return vm.messages;
        }

        function setMessages (messages) {
            vm.messages = messages;
        }

        function getMessage (id) {
            var index = parseInt(id);
            return vm.messages.filter((message)=> {
                if(message.id === index) {
                    return message;
                }
            })[0];
        }

    }



}


export default MessageService;
