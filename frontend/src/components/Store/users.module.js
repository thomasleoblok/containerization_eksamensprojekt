import { userService } from '../ServicesHelp/user.service';

export const users = {
    namespaced: true,
    state: {
        all: {},
        isLoggedIn: false
    },
    getters:{
        GetLoginState(state){
            return state.isLoggedIn
        }
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        },
        UpdateLogin({commit}, state){
            commit('UpdateIsloggedIn', state);    
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        },
        UpdateIsloggedIn(state, value){
            state.isLoggedIn = value;
        }
    }
}
