import { requestOptions } from '../Helpers/request-options';
import { store } from '../Store';
// ViewController;

export const userService = {
	login,
	logout,
	getAll,
	Register,
	Delete,
};

// Login sends the credentiels to json body to the api for Authentication
function login(Email, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ Email, password }),
	};

	return fetch(
		`https://localhost:7282/api/users/authenticate`,
		requestOptions
	)
		.then(handleResponse)
		.then((user) => {
			// login successful if there's a jwt token in the response
			if (user.token) {
				store.dispatch('users/UpdateLogin', true);

				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
				if (user.role === 'Admin')
					store.dispatch('users/UpdateAdmin', true);
			}

			return user;
		});
}

function Register(Email, password, FullName) {
	// Register and the credentiels to json body to the api for resigester
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ Email, password, FullName }),
	};

	return fetch(`https://localhost:7282/api/users/Register`, requestOptions)
		.then(handleResponse)
		.then((user) => {
			return user;
		});
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('user');
	store.dispatch('users/UpdateLogin', false);
}

function getAll() {
	// Gets all the users based on the fetch from the api sends bearertoken (requestoption) to the api for authentication
	return fetch(`https://localhost:7282/api/users`, requestOptions.get()).then(
		handleResponse
	);
}

function Delete(id) {
	return fetch(
	// Delete the users based on the fetch from the api sends bearertoken (requestoption) to the api for authentication
		`https://localhost:7282/api/users/DeleteUser/${id}`,
		requestOptions.delete('')
	)
		.then(handleResponse)
		.then((user) => {
			return user;
		});
}

// our handlereponse based on our reponse converts to json format if 401 or 403 is reponded logout and reload the page.
function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		console.log(data);
		if (!response.ok) {
			if ([401, 403].indexOf(response.status) !== -1) {
				// auto logout if 401 response returned from api
				logout();
				location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
