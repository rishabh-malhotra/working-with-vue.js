let app =new Vue({
    el: '#app',
    data: {
        newtask:"",
        tasklist:[]
    },
    methods:{
        addtask(){
            this.tasklist.push({
                name:this.newtask,
                done:false
            })
        this.newtask=""    
        }
    }
})