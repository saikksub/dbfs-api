export const calculateBase64Size = function (base64String) {
	const padding = (base64String.endsWith('==') ? 2 : (base64String.endsWith('=') ? 1 : 0));
	const fileSizeInBytes = (base64String.length - padding) * 3 / 4;
	return fileSizeInBytes;
};
