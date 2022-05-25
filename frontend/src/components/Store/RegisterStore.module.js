import { userService } from '../ServicesHelp/user.service';
import router from '../Helpers/Routes';
// Viewmodel
//Controll state, Register from userservice state based on error or succes 


// checking if the user is saved in local storage if not save it
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: user }
    : { status: {}, user: null };

// Store register pushes credentiels to register in userservice if succes it pushes to login page else it pushes a error    
export const RegisterUser = {
    namespaced: true,
    state: initialState,
    actions: {
        Register({ dispatch, commit }, { Email, password, FullName }) {
            commit('RegisterRequest', { Email });

            userService.Register(Email, password, FullName)
                .then(
                    user => {
                        commit('RegisterSuccess', user);
                        router.push('/Login');
                    },
                    error => {
                        commit('RegisterFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
       
    },
    //mutations based on action
    //viewcontroller
    mutations: {
        RegisterRequest(state, user){
            state.status = {};
            state.user = user;
        },
        RegisterSuccess(state, user) {
            state.status = {};
            state.user = user;
        },
        RegisterFailure(state) {
            state.status = {};
            state.user = null;
        },
    }
}
