import axios from 'axios';

export async function deleteFile(path) {
	await axios.post('/dbfs/delete', {path, recursive: false});

	return true;
}
