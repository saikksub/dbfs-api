import axios from 'axios';
import {calculateBase64Size} from '../helper.js';
import {openStream} from './open-stream.js';
import {addBlock} from './add-block.js';
import {closeStream} from './close-stream.js';

const BASE64_CHUNK_SIZE = 1_048_576;

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
