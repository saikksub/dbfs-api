import axios from 'axios';

/**
 * Deletes a file at the specified path.
 *
 * @param {string} path - The filesystem path of the file to be deleted.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful deletion of the file.
 */
export async function deleteFile(path) {
	await axios.post('/dbfs/delete', {path, recursive: false});

	return true;
}
