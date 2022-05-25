import { userService } from '../ServicesHelp/user.service';
// Viewmodel
//Controll state, DeleteUsers from userservice state based on error or succes 

// checks the current user in localstorage and saves it in state
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: user } : { status: {}, user: null };

// Store Delete pushes credentiels to register in userservice based on succes else it pushes a error  
export const DeleteUser = {
	namespaced: true,
	state: initialState,
	actions: {
		Delete({ dispatch, commit }, { id }) {
			commit('DeleteRequest', { id });

			userService.Delete(id).then(
				(user) => {
					commit('DeleteSuccess', user);
				},
				(error) => {
					commit('DeleteFailure', error);
					dispatch('alert/error', error, { root: true });
				}
			);
		},
	},
	//mutations based on action
	//viewcontroller
	mutations: {
		DeleteRequest(state, user) {
			state.status = {};
			state.user = user;
		},
		DeleteSuccess(state, user) {
			state.status = {};
			state.user = user;
		},
		DeleteFailure(state) {
			state.status = {};
			state.user = null;
		},
	},
};
