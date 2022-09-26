<template>
    <button type="button" @click="emitClick" :class="color">{{ text }}</button>
</template>

<script>
    export default ({
        props:{
            text:{
                type: String,
                default: ""
            },
            color:{
                type: String,
                default : ""
            }
        },
        methods:{
            emitClick(){
                this.$emit('emitClick')
            }
        }
    })
</script>

<style scoped>
    .transparent{
        font-size: 11px;
        color: darksalmon;
        background: transparent;
    }

    .blue{
        background: lightblue;
    }
</style>