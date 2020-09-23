const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            };
        },

    methods: {
        add5(){
            this.counter+= 5;
         },
         add1(){
             this.counter+=1;
         }

    },
    computed:{
        yourResult(){
            if (this.counter < 37) {
                return "not there yet";
            }
            if (this.counter == 37) {
                return "37";
            }
            else  {return "Too much!";}
        }
    },



});
app.mount('#assignment')