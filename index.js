import axios from 'axios';

export {getStatus} from './lib/dbfs/get-status.js';

export {getList} from './lib/dbfs/get-list.js';

export {createDirectory} from './lib/dbfs/create-directory.js';

export {deleteDirectory} from './lib/dbfs/delete-directory.js';

export {deleteFile} from './lib/dbfs/delete-file.js';

export {uploadFile} from './lib/dbfs/upload-file.js';

export {openStream} from './lib/dbfs/open-stream.js';

export {addBlock} from './lib/dbfs/add-block.js';

export {closeStream} from './lib/dbfs/close-stream.js';

/**
 * Connects to the Databricks filesystem with the given URL and token.
 * @param {Object} config Configuration for connecting to the database.
 * @param {string} config.url The URL of the database filesystem.
 * @param {string} config.token Authorization token for the database filesystem.
 * @returns {Promise<boolean>} Promise that resolves to true if connection is successful, false otherwise.
 */
export const connect = async function ({url, token}) {
	try {
		axios.defaults.baseURL = url;
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
		return true;
	} catch {
		return false;
	}
};
