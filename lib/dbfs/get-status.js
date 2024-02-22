import axios from 'axios';

export async function getStatus() {
	const response = await axios.get('/dbfs/get-status', {
		params: {path: '/'},
	});

	return response.data;
}
