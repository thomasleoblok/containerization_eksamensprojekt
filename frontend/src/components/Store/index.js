import Vuex from 'vuex';
import {alert} from './alert.module';
import {authentication}  from './authentication.module';
import {users}  from './users.module';


export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        users
    }
});
