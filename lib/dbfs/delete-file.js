import axios from 'axios';

export async function deleteFile(path) {
	const response = await axios.post('/dbfs/delete', {path, recursive: false});

	return response.data;
}
