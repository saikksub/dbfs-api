import axios from 'axios';

/**
 * Closes an open stream identified by a handle.
 *
 * @param {number} handle - The handle identifier of the stream to be closed. Defaults to -1.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful closure of the stream.
 */
export async function closeStream(handle = -1) {
	await axios.post('/dbfs/close', {handle});

	return true;
}
