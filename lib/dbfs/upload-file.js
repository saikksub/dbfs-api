import axios from 'axios';

export async function uploadFile(path, contents) {
	const response = await axios.post('/dbfs/put', {
		path,
		contents,
	});

	return response.data;
}
