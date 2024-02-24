import axios from 'axios';

/**
 * Retrieves a list of files and directories at the specified path.
 *
 * @param {string} path - The filesystem path from which to list contents.
 * @returns {Promise<Object>} A promise that resolves to the data containing the list of files and directories.
 */
export async function getList(path) {
	const response = await axios.get('/api/2.0/dbfs/list', {
		params: {path},
	});

	return response.data;
}
