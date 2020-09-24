const app =  Vue.createApp({
    data() {
        return{
            divAselected : false,
            divBselected : false,
            divCselected : false
        };
    },
    computed:{
        boxAclasses(){
            return {active: this.divAselected};
        }
    },
    methods: {
        divSelected(box){
            if(box === 'A'){
                this.divAselected = !this.divAselected;
            } else if(box === 'B'){
                this.divBselected = !this.divBselected;
            } else if(box === 'C'){
                this.divCselected = !this.divCselected;
            }
        }
    }
});
app.mount('#styling');

