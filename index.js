// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
	e.preventDefault(); // Prevent the default form submission

	// Get the username and password values
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Check if the fields are empty
	if (username === '' || password === '') {
		// Display an error message
		const errorElement = document.getElementById('error');
		errorElement.textContent = 'Please fill in all fields.';
		return;
	}

	// Create an object with the username and password
	const data = {
		username,
		password,
	};

	// Send the data to the specific endpoint using fetch
	fetch('https://example.com/endpoint', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((result) => {
			// Handle the response from the endpoint
			console.log(result);
		})
		.catch((error) => {
			// Handle any errors that occur during the request
			console.error(error);
		});
});
