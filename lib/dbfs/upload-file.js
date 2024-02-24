import axios from 'axios';
import {calculateBase64Size} from '../helper.js';
import {openStream} from './open-stream.js';
import {addBlock} from './add-block.js';
import {closeStream} from './close-stream.js';

const BASE64_CHUNK_SIZE = 1_048_576;

/**
 * Uploads a file to the specified path. If the file size exceeds the base64 chunk size limit,
 * it splits the contents into chunks and uploads them sequentially.
 *
 * @param {string} path - The filesystem path where the file will be uploaded.
 * @param {string} contents - The base64 encoded contents of the file to be uploaded.
 * @param {boolean} [overwrite=false] - Whether to overwrite the file if it already exists. Defaults to false.
 * @returns {Promise<boolean>} A promise that resolves to true upon successful upload of the file.
 * @throws Will throw an error if the upload process fails at any point.
 */
export async function uploadFile(path, contents, overwrite = false) {
	let handle = {handle: -1};

	try {
		const chunks = [];
		const size = calculateBase64Size(contents);

		if (size > 1_048_576) {
			for (let i = 0; i < contents.length; i += BASE64_CHUNK_SIZE) {
				const chunk = contents.slice(i, i + BASE64_CHUNK_SIZE);
				chunks.push(chunk);
			}
		}

		if (chunks.length > 0) {
			handle = await openStream(path, overwrite);

			for (const chunk of chunks) {
				// eslint-disable-next-line no-await-in-loop
				await addBlock(handle.handle, chunk);
			}

			await closeStream(handle.handle);
		} else {
			await axios.post('/dbfs/put', {
				path,
				contents,
			});
		}

		return true;
	} catch (error) {
		if (handle > 0) {
			await closeStream(handle.handle);
		}

		throw error;
	}
}
