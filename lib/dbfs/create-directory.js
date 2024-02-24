import axios from 'axios';

/**
 * Creates a new directory at the specified path.
 *
 * @param {string} path - The filesystem path where the new directory will be created.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful creation of the directory.
 */
export async function createDirectory(path) {
	await axios.post('/api/2.0/dbfs/mkdirs', {path});

	return true;
}
