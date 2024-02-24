import axios from 'axios';

export async function closeStream(handle = -1) {
	await axios.post('/dbfs/close', {handle});

	return true;
}
