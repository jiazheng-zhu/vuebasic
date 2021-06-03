var app = new Vue ({
    el: '#app',
    data: {
        greetings: ['Hello', 'Hi', 'Good day', 'Hey'],
        names: ['Jiazheng', 'Nicolas', 'William', 'Mia']
    },
    methods: { 
        randomBtn(){
        var myRandom = Math.round(Math.random() * 6);
        this.greetings = this.greetings[myRandom];
        this.names = this.names[myRandom];
    }
    }
})