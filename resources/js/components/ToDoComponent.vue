<template>
    <div class="container">
        <h1>To-Do</h1>
        <input-form @emitSubmit="addList"/>
        <list :listdata="toDoList" @emitDelete="deleteList"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        data(){
            return{
                
            }
        },
        computed: {
            ...mapGetters({
                toDoList: 'getToDo'
            })
        },
        methods:{
            addList(inputform){
                let newList = {
                    title: inputform
                }
                // this.list.push(newList)
                this.$store.dispatch('addList', newList)

            },
            deleteList(index){
                // this.list.splice(index,1)
                this.$store.dispatch('deleteList', index)

            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
