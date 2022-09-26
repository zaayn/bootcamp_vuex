<template>
    <ul class="list">
        <li v-for="(item,index) in listdata" :key="index">
        {{item.title}}
        <button-form text="Hapus" color="transparent" @emitClick="deleteList(index)"/>
        </li>
    </ul>
</template>

<script>
    export default{
        props:{
            listdata:{
                type: Array,
                default: () => {
                    return[]
                }
            }
        },
        methods:{
            deleteList(index){
                this.$emit('emitDelete', index)
            }
        }
    }
</script>