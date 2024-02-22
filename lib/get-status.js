import axios from 'axios';

export async function getStatus() {
	try {
		await axios.get('/get-status', {
			params: {path: '/'},
		});
		return true;
	} catch {
		return false;
	}
}
