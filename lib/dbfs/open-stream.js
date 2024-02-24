import axios from 'axios';

/**
 * Opens a stream for writing to a file at the specified path, optionally overwriting an existing file.
 *
 * @param {string} path - The filesystem path where the stream will be opened.
 * @param {boolean} [overwrite=false] - Whether to overwrite the file if it already exists. Defaults to false.
 * @returns {Promise<Object>} A promise that resolves to the data containing information about the opened stream.
 */
export async function openStream(path, overwrite = false) {
	const response = await axios.post('/api/2.0/dbfs/create', {path, overwrite});

	return response.data;
}
