import axios from 'axios';

export {getStatus} from './lib/get-status.js';

export const connect = async function ({url, token}) {
	try {
		axios.defaults.baseURL = url;
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		return true;
	} catch {
		return false;
	}
};
