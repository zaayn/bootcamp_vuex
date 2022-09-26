<template>
    <div class="container">
        <h1>To-Do</h1>
        <input-form @emitSubmit="addList"/>
        <list :listdata="toDo" @emitDelete="deleteList"/>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                toDo: [
                    {
                        title: "menyapu"
                    },
                    {
                        title: "cuci piring"
                    }   
                ]
            }
        },
        computed: {

        },
        methods:{
            addList(inputform){
                let newList = {
                    title: inputform
                }
                this.toDo.push(newList)

            },
            deleteList(index){
                this.toDo.splice(index,1)
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
