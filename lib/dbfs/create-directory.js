import axios from 'axios';

export async function createDirectory(path) {
	const response = await axios.post('/dbfs/mkdirs', {
		params: {path},
	});

	return response.data;
}
