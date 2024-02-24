/**
 * Adds a block of data to an open stream identified by a handle.
 *
 * @param {number} handle - The handle identifier of the open stream to which the data block will be added. Defaults to -1.
 * @param {string} data - The data to be added to the stream. Defaults to an empty string.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful addition of the data block.
 */

import axios from 'axios';

export async function addBlock(handle = -1, data = '') {
	await axios.post('/dbfs/add-block', {handle, data});

	return true;
}
