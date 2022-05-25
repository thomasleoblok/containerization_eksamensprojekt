import Vuex from 'vuex';
import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { users } from './users.module';
import { RegisterUser } from './RegisterStore.module';
import { DeleteUser } from './DeleteStore.Module';

//import different stores functions to our vuex.store
export const store = new Vuex.Store({
	modules: {
		alert,
		authentication,
		users,
		RegisterUser,
		DeleteUser,
	},
});
