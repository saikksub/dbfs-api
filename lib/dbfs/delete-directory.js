import axios from 'axios';

export async function deleteDirectory(path, recursive = true) {
	const response = await axios.post('/dbfs/delete', {path, recursive});

	return response.data;
}
