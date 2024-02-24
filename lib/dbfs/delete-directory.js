import axios from 'axios';

/**
 * Deletes a directory at the specified path.
 *
 * @param {string} path - The filesystem path of the directory to be deleted.
 * @param {boolean} [recursive=true] - Whether to delete the directory recursively. Defaults to true.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful deletion of the directory.
 */
export async function deleteDirectory(path, recursive = true) {
	await axios.post('/dbfs/delete', {path, recursive});

	return true;
}
