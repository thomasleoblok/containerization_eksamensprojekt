import { requestOptions } from '../Helpers/request-options';
// ViewController
export const blogService = {
    getAll,
    create,
    Delete
};

// Calls the create method (the only HttpPost method) in blogs controller
// body should be blog
function create(blg) {
    return fetch('https://localhost:7282/api/blogs', requestOptions.post(blg))
        .then(handleResponse)
        .then(blog => {
            return blog;
        });

}

// Calls the get method in blogs controller, without body or other parameters
function getAll() {
    return fetch(`https://localhost:7282/api/blogs`, requestOptions.get())
        .then(handleResponse);
}

// Calls delete method in blogs controller with id as parameter (parsed via the URL)
function Delete(id) {
    return fetch(`https://localhost:7282/api/blogs/${id}`, requestOptions.delete())
        .then(handleResponse);
}

// our handlereponse based on our reponse converts to json format if 401 or 403 is reponded logout and reload the page.
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}