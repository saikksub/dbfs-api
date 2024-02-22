import axios from 'axios';

export {getStatus} from './lib/dbfs/get-status.js';

export {getList} from './lib/dbfs/get-list.js';

export {createDirectory} from './lib/dbfs/create-directory.js';

export const connect = async function ({url, token}) {
	try {
		axios.defaults.baseURL = url;
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		return true;
	} catch {
		return false;
	}
};
