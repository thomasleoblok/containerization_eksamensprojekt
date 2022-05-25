import { BehaviorSubject } from 'rxjs';
// ViewController
// currentUserValue property can be used when you just want to get the current value of the logged in user but don't need to reactively update when it changes, for example in the router.beforeEach()
// hook inside router.js which restricts access to routes by checking if the user is currently logged in and authorised.
//mainly used in router
const currentUserSubject = new BehaviorSubject(
	JSON.parse(localStorage.getItem('user'))
);

export const authenticationService = {
	// currentUser: currentUserSubject.asObservable(),
	get currentUserValue() {
		return currentUserSubject.value;
	},
};
