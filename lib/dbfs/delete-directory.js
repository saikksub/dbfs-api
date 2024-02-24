import axios from 'axios';

export async function deleteDirectory(path, recursive = true) {
	await axios.post('/dbfs/delete', {path, recursive});

	return true;
}
