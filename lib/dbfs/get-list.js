import axios from 'axios';

export async function getList(path) {
	const response = await axios.get('/dbfs/list', {
		params: {path},
	});

	return response.data;
}
