import axios from 'axios';

export async function createDirectory(path) {
	await axios.post('/dbfs/mkdirs', {path});

	return true;
}
