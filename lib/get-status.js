import axios from 'axios';

export async function getStatus() {
	const response = await axios.get('/get-status', {
		params: {path: '/'},
	});

	return response.data;
}
