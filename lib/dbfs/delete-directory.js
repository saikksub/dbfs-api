import axios from 'axios';

export async function deleteDirectory(path, recursive = false) {
	const response = await axios.post('/dbfs/delete', {path, recursive});

	return response.data;
}
