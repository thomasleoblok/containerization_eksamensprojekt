import { requestOptions } from '../Helpers/request-options';
// ViewController

export const eventService = {
	getAll,
	create,
	attend,
};

// Calls the attend method in events controller, with EventId and UserId via the URL
// json body is empty
function attend(EventId, UserId) {
	return fetch(
		`https://localhost:7282/api/events/attend/${EventId}/${UserId}`,
		requestOptions.post('')
	)
		.then(handleResponse)
		.then((event) => {
			return event;
		});
}

// Calls the create method (the only HttpPost method) in events controller
// body should be event
function create(ev) {
	console.log(ev)
	return fetch(`https://localhost:7282/api/events`, requestOptions.post(ev))
		.then(handleResponse)
		.then((event) => {
			return event;
		});
}

// Calls the get method in events controller, without body or other parameters
function getAll() {
	return fetch(
		`https://localhost:7282/api/events`,
		requestOptions.get()
	).then(handleResponse);
}

// our handlereponse based on our reponse converts to json format if 401 or 403 is reponded logout and reload the page.
function handleResponse(response) {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
