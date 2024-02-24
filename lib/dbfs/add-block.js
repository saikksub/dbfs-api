import axios from 'axios';

export async function addBlock(handle = -1, data = '') {
	await axios.post('/dbfs/add-block', {handle, data});

	return true;
}
