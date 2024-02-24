import axios from 'axios';

export async function openStream(path, overwrite = false) {
	const response = await axios.post('/dbfs/create', {path, overwrite});

	return response.data;
}
