const app = Vue.createApp({
data() {   
return {
    output1: 'name',
    output2: 'name2'
}
},
methods: {
    show(){
        alert("button pressed")
    },
    setInput(event){
        this.output1 = event.target.value;
    },
    confirmInput(firstName,event){
        this.output2 = this.output1 + ' ' + event.target.value;
    }

}

});
app.mount('#assignment');
