// eslint-disable-next-line no-undef
const config = require('../config');

const putRequestBody = {
	"productsList":[
		{
			"id": 1,
			"quantity": 4
		}
	],
	"name": "new cart"
}

//this is to create the kit necessary for the test
const postRequestBody = {
		"name": "My set",
		"card": {
			"id": 1,
			"name": "For the situation"
		},
		"productsList": null,
		"id": 7,
		"productsCount": 0
}

test('status should be 200', async () => {
	let actualStatusCode;
    try {
		//creating the kit before the test to make sure that the endpoint for the
		const createKit = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(postRequestBody)
		});
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(putRequestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Request body should be ok true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(putRequestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody['ok']).toBe(Boolean(true));
});
