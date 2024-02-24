/**
 * Calculates the size of a base64 encoded string in bytes.
 *
 * @param {string} base64String - The base64 encoded string for which the size is to be calculated.
 * @returns {number} The size of the base64 encoded string in bytes.
 */
export const calculateBase64Size = function (base64String) {
	const padding = (base64String.endsWith('==') ? 2 : (base64String.endsWith('=') ? 1 : 0));
	const fileSizeInBytes = (base64String.length - padding) * 3 / 4;
	return fileSizeInBytes;
};
