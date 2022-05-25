import { userService } from '../ServicesHelp/user.service';
import router from '../Helpers/Routes';
// Viewmodel
//Controll state, authentication from userservice state based on error or succes 

// checks the current user in localstorage and saves it in state
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

// Store authentication/login pushes credentiels to login in userservice based on succes else it pushes a error, succes it pushes to the home page
export const authentication = {
	namespaced: true,
	state: initialState,
	actions: {
		login({ dispatch, commit }, { Email, password }) {
			commit('loginRequest', { Email });

			userService.login(Email, password).then(
				(user) => {
					commit('loginSuccess', user);
					router.push('/');
				},
				(error) => {
					commit('loginFailure', error);
					dispatch('alert/error', error, { root: true });
				}
			);
		},
		//logout service
		logout({ commit }) {
			userService.logout();
			commit('logout');
		},
	},
	//mutations based on action
	//viewcontroller
	mutations: {
		loginRequest(state, user) {
			state.status = { loggingIn: true };
			state.user = user;
		},
		loginSuccess(state, user) {
			state.status = { loggedIn: true };
			state.user = user;
		},
		loginFailure(state) {
			state.status = {};
			state.user = null;
		},
		logout(state) {
			state.status = {};
			state.user = null;
		},
	},
};
