import axios from 'axios';

/**
 * Retrieves the status of a file or directory at the specified path.
 *
 * @param {string} path - The filesystem path of the item whose status is being queried.
 * @returns {Promise<Object>} A promise that resolves to the data containing the status of the specified file or directory.
 */
export async function getStatus(path) {
	const response = await axios.get('/api/2.0/dbfs/get-status', {
		params: {path},
	});

	return response.data;
}
