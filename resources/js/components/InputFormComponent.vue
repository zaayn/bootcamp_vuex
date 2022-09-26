<template>
    <form class="form">
        <input v-model="inputform"/>
        <button-form text="Reset" color="blue" @emitClick="reset"/>
        <button-form text="Submit" @emitClick="addList"/>
    </form>
</template>

<script>
    export default({
        data(){
            return {
                inputform:"",
            }
        },
        methods:{
            addList(){
                this.$emit('emitSubmit', this.inputform)
                this.inputform = ""
            },
            reset(){
                this.inputform = ""
            }
        }
    })
</script>
