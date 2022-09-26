import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toDo: [
            {
                title: "menyapu"
            },
            {
                title: "cuci piring"
            }   
        ]

    },
    getters: {
        getToDo (state) {
            return state.toDo
        }

    },
    mutations: {
        // UPDATE_TODO(state, payload){
        //     state.toDo = [...payload]
        // },
        ADD_TODO(state, payload){
            state.toDo.push(payload)
        },
        DELETE_TODO(state, payload){
            state.toDo.splice(payload, 1)
        }
        

    },
    actions: {
        getList(context){
            let url = 'api/get_todo'
        },
        addList (context, payload){
            context.commit('ADD_TODO', payload)
        },
        deleteList (context, payload){
            context.commit('DELETE_TODO', payload)
        }

    },
    modules: {
        
    }
})