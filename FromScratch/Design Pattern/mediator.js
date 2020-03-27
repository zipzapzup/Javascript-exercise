// MEdiator Pattern

const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}


const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const john = new User('john');
const jef = new User('jef');
const sara = new User('sara');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(jef);
chatroom.register(sara);

john.send('Hello Jeff', jef);
sara.send('Helo Yo', john)